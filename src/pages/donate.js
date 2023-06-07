import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';
import donatelist from '../utils/donatelist';

export default function Donate() {
    return (
        <Layout title="赞赏" description="赞赏">
            <div className={clsx('hero ', styles.heroBanner)} >
                <div className='container'>
                    <h1>🌟您的Star是对我最大的支持🌟</h1>
                    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/pot-app/pot-desktop?style=social" style={{ marginRight: 8 }}></img>

                    <img alt="GitHub forks" src="https://img.shields.io/github/forks/pot-app/pot-desktop?style=social"></img>
                    <br />
                    <Link
                        style={{ margin: 16 }}
                        className="button button--secondary button--lg"
                        to='https://github.com/pot-app/pot-desktop'
                    >Star 支持</Link>
                    <br />
                    <img src='img/donate.png' style={{ width: '60%' }} />

                    <h1 style={{ margin: 16 }}>赞赏列表</h1>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <table>
                            <thead>
                                <tr>
                                    <td>日期</td>
                                    <td>用户</td>
                                    <td>金额</td>
                                    <td>支付方式</td>
                                    <td>留言</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    donatelist.map(x => {
                                        return (
                                            <tr key={x.date + x.name}>
                                                <td>{x.date}</td>
                                                <td>{x.name}</td>
                                                <td>{x.money}</td>
                                                <td>{x.method}</td>
                                                <td>{x.message}</td>
                                            </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout >
    );
}