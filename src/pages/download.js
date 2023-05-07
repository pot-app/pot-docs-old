import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import axios from 'axios';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { BsWindows } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';
import { FaLinux } from 'react-icons/fa';

export default function Download() {
    const [latestVersion, setLatestVersion] = useState();
    const {
        siteConfig: { customFields },
    } = useDocusaurusContext();
    useEffect(() => {
        axios.get('https://api.github.com/repos/Pylogmon/pot/releases/latest', {
            headers: {
                Authorization: `Bearer ${customFields.github_token}`
            }
        }).then(
            res => {
                const { data: { tag_name } } = res;
                setLatestVersion(tag_name)
            },
            err => {
                console.log(err)
            }
        )
    }, [])

    return (
        <Layout title="软件下载" description="软件下载">
            <div className={clsx('hero ', styles.heroBanner)}>
                <div className="container"
                >
                    <div className="row">
                        <div style={{ display: 'inline-block', margin: 'auto' }}>
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://gh.pylogmon.cn/https://github.com/Pylogmon/pot/releases/latest/download/pot_${latestVersion}_x64_zh-CN.msi` : 'https://github.com/Pylogmon/pot/releases/latest'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <BsWindows style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        Windows x64(.msi)
                                        <br />
                                        {latestVersion}
                                    </span>
                                </div>
                            </Link>
                            <br />
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://gh.pylogmon.cn/https://github.com/Pylogmon/pot/releases/latest/download/pot_${latestVersion}_x64_portable.zip` : 'https://github.com/Pylogmon/pot/releases/latest'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <BsWindows style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        Windows x64(portable)
                                        <br />
                                        {latestVersion}
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div style={{ display: 'inline-block', margin: 'auto' }}>
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://gh.pylogmon.cn/https://github.com/Pylogmon/pot/releases/latest/download/pot_${latestVersion}_aarch64.dmg` : 'https://github.com/Pylogmon/pot/releases/latest'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <BsApple style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        MacOS aarch64(.dmg)
                                        <br />
                                        {latestVersion}
                                    </span>
                                </div>
                            </Link>
                            <br />
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://gh.pylogmon.cn/https://github.com/Pylogmon/pot/releases/latest/download/pot_${latestVersion}_x64.dmg` : 'https://github.com/Pylogmon/pot/releases/latest'}>

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <BsApple style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        MacOS x64(.dmg)
                                        <br />
                                        {latestVersion}
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div style={{ display: 'inline-block', margin: 'auto' }}>
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://gh.pylogmon.cn/https://github.com/Pylogmon/pot/releases/latest/download/pot_${latestVersion}_amd64.deb` : 'https://github.com/Pylogmon/pot/releases/latest'}>

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <FaLinux style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        Linux x64(.deb)
                                        <br />
                                        {latestVersion}
                                    </span>
                                </div>
                            </Link>
                            <br />
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://gh.pylogmon.cn/https://github.com/Pylogmon/pot/releases/latest/download/pot_${latestVersion}_amd64_universal.deb` : 'https://github.com/Pylogmon/pot/releases/latest'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <FaLinux style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        Linux x64 universal(.deb)
                                        <br />
                                        {latestVersion}
                                    </span>
                                </div>
                            </Link>
                            <br />
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://gh.pylogmon.cn/https://github.com/Pylogmon/pot/releases/latest/download/pot_${latestVersion}_amd64.AppImage` : 'https://github.com/Pylogmon/pot/releases/latest'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <FaLinux style={{ marginTop: 'auto', marginBottom: 'auto' }} />

                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        Linux x64(.AppImage)
                                        <br />
                                        {latestVersion}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <HomepageFeatures />
            </div>

        </Layout >
    );
}