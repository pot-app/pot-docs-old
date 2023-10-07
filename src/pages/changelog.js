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
    const [showAdBlockAlert, setShowAdBlockAlert] = useState(false);

    useEffect(() => {
        fetchChangeLog();
        if (window._AdBlockInit === undefined) {
            setShowAdBlockAlert(true);
        }
    }, [])

    function fetchChangeLog() {
        setLoading(true);
        setSuccess(false);
        axios.get('https://jihulab.com/api/v4/projects/153845/releases?per_page=100').then(
            res => {
                const { data } = res;
                setChangeLog(data);
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
            {
                showAdBlockAlert && <div className='alert alert--warning' style={{ margin: '5px', textAlign: 'center' }}>
                    <h3>为了本站的长期运营，请将我们的网站加入广告拦截器的白名单，感谢您的支持！</h3>
                </div>
            }
            <div class="wwads-cn wwads-horizontal wwads-sticky" data-id="285" style={{ maxWidth: "400px" }}></div>
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
                                                        {x.description.split('\n')[0].replace('## ', '')}
                                                    </summary>
                                                    <ReactMarkdown>{
                                                        x.description.split('\n').slice(1).reduce((a, b) => {
                                                            return a + '\n' + b
                                                        })
                                                    }</ReactMarkdown>
                                                    <Link className="button button--secondary button--md" to={`https://github.com/pot-app/pot-desktop/releases/tag/${x['tag_name']}`}
                                                        style={{ marginRight: '8px' }}
                                                    >
                                                        在Github查看
                                                    </Link>
                                                    <Link className="button button--secondary button--md mr-1" to={`https://jihulab.com/pot-app/pot-desktop/-/releases/${x['tag_name']}`}>
                                                        在Jihulab查看
                                                    </Link>
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