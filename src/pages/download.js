import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
    return (
        <Layout title="软件下载" description="下载">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <p>
                    Edit <code>pages/download.js</code> and save to reload.
                </p>
            </div>
        </Layout>
    );
}