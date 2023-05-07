import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
    return (
        <Layout title="更新日志" description="更新日志">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <p>
                    Edit <code>pages/changelog.js</code> and save to reload.
                </p>
            </div>
        </Layout>
    );
}