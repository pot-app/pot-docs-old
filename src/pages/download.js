import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function About() {
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
        <Layout title="软件下载" description="下载">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <div style={{ display: 'inline-block', margin: 'auto' }}>
                    <Link
                        className="button button--primary button--lg"
                        style={{ marginTop: '25px', width: 300 }}
                        to={latestVersion ? `https://gh.pylogmon.cn/https://github.com/Pylogmon/pot/releases/latest/download/pot_${latestVersion}_x64_zh-CN.msi` : 'https://github.com/Pylogmon/pot/releases/latest'}>
                        Windows x64(.msi)
                    </Link>
                    <br />
                    <Link
                        className="button button--primary button--lg"
                        style={{ marginTop: '25px', width: 300 }}
                        to={latestVersion ? `https://gh.pylogmon.cn/https://github.com/Pylogmon/pot/releases/latest/download/pot_${latestVersion}_x64_portable.zip` : 'https://github.com/Pylogmon/pot/releases/latest'}>
                        Windows x64(portable)
                    </Link>
                </div>
                <div style={{ display: 'inline-block', margin: 'auto' }}>
                    <Link
                        className="button button--primary button--lg"
                        style={{ marginTop: '25px', width: 300 }}
                        to={latestVersion ? `https://gh.pylogmon.cn/https://github.com/Pylogmon/pot/releases/latest/download/pot_${latestVersion}_aarch64.dmg` : 'https://github.com/Pylogmon/pot/releases/latest'}>
                        MacOS aarch64(.dmg)
                    </Link>
                    <br />
                    <Link
                        className="button button--primary button--lg"
                        style={{ marginTop: '25px', width: 300 }}
                        to={latestVersion ? `https://gh.pylogmon.cn/https://github.com/Pylogmon/pot/releases/latest/download/pot_${latestVersion}_x64.dmg` : 'https://github.com/Pylogmon/pot/releases/latest'}>
                        MacOS x64(.dmg)
                    </Link>
                </div>
                <div style={{ display: 'inline-block', margin: 'auto' }}>
                    <Link
                        className="button button--primary button--lg"
                        style={{ marginTop: '25px', width: 300 }}
                        to={latestVersion ? `https://gh.pylogmon.cn/https://github.com/Pylogmon/pot/releases/latest/download/pot_${latestVersion}_amd64.deb` : 'https://github.com/Pylogmon/pot/releases/latest'}>
                        Linux x64(.deb)
                    </Link>
                    <br />
                    <Link
                        className="button button--primary button--lg"
                        style={{ marginTop: '25px', width: 300 }}
                        to={latestVersion ? `https://gh.pylogmon.cnhttps://github.com/Pylogmon/pot/releases/latest/download/pot_${latestVersion}_amd64_universal.deb` : 'https://github.com/Pylogmon/pot/releases/latest'}>
                        Linux x64 universal(.deb)
                    </Link>
                    <br />
                    <Link
                        className="button button--primary button--lg"
                        style={{ marginTop: '25px', width: 300 }}
                        to={latestVersion ? `https://gh.pylogmon.cn/https://github.com/Pylogmon/pot/releases/latest/download/pot_${latestVersion}_amd64.AppImage` : 'https://github.com/Pylogmon/pot/releases/latest'}>
                        Linux x64(.AppImage)
                    </Link>
                </div>
            </div >
            <HomepageFeatures />
        </Layout >
    );
}