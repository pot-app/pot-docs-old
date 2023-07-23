import ReactMarkdown from 'react-markdown';
import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import axios from 'axios';

export default function ChangeLog() {
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [changeLog, setChangeLog] = useState([]);

    useEffect(() => {
        fetchChangeLog();
    }, [])

    function fetchChangeLog() {
        setLoading(true);
        setSuccess(false);
        axios.get('https://api.github.com/repos/pot-app/pot-desktop/releases?per_page=100').then(
            res => {
                const { data } = res;
                setChangeLog(data.filter(x => {
                    return x['tag_name'] !== 'updater'
                }))
                setLoading(false);
                setSuccess(true);
            },
            err => {
                console.log(err)
                setLoading(false);
                setSuccess(false);
            }
        )
    }
    return (
        <Layout title="更新日志" description="更新日志">
            <div className={clsx('hero ', styles.heroBanner)}>
                <div className="container">
                    <h1>更新日志{success ? ` (共${changeLog.length}个)` : ''}</h1>
                    <hr />

                    {
                        loading ? <p>加载中...</p> :
                            success ?
                                <div style={{ textAlign: 'left' }} >
                                    {
                                        changeLog.map(x => {
                                            return (
                                                <details key={x['tag_name']} id={x['tag_name']}>
                                                    <summary style={{
                                                        fontSize: 24,
                                                        fontWeight: 'bold'
                                                    }}>
                                                        {x.body.split('\n')[0].replace('## ', '')}
                                                    </summary>
                                                    <Link to={`https://github.com/pot-app/pot-desktop/releases/tag/${x['tag_name']}`}>
                                                        在Github查看
                                                    </Link>
                                                    <ReactMarkdown>{
                                                        x.body.split('\n').slice(1).reduce((a, b) => {
                                                            return a + '\n' + b
                                                        })
                                                    }</ReactMarkdown>
                                                </details>
                                            )
                                        })
                                    }
                                </div> :
                                <>
                                    <p>加载失败</p>
                                    <button onClick={fetchChangeLog}>重试</button>
                                </>
                    }
                </div>

            </div>
        </Layout>
    );
}