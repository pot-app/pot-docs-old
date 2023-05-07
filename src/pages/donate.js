import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

export default function Donate() {
    return (
        <Layout title="关于" description="关于">
            <div className={clsx('hero ', styles.heroBanner)} >
                <div className='container' style={{ height: '100vh' }}>
                    <img src='img/donate.png' style={{ width: '60%' }} />
                    <h1>您的Star也是对我最大的支持</h1>
                    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/Pylogmon/pot?style=social" style={{ marginRight: 8 }}></img>

                    <img alt="GitHub forks" src="https://img.shields.io/github/forks/Pylogmon/pot?style=social"></img>
                    <br />
                    <Link
                        className="button button--secondary button--lg"
                        to='https://github.com/Pylogmon/pot'
                    >Star 支持</Link>
                </div>
            </div>
        </Layout >
    );
}