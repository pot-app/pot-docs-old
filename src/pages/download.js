import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import axios from 'axios';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { FaGitlab } from 'react-icons/fa6';
import { BsWindows } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';
import { FaLinux } from 'react-icons/fa';
export default function Download() {
    const [latestVersion, setLatestVersion] = useState('');
    const [showAdBlockAlert, setShowAdBlockAlert] = useState(false);

    const getVersion = async () => {
        const res = await axios.get('https://jihulab.com/api/v4/projects/153845/releases/permalink/latest');
        return res.data.tag_name;
    }

    useEffect(() => {
        getVersion().then(v => {
            setLatestVersion(v);
        });
        if (window._AdBlockInit === undefined) {
            setShowAdBlockAlert(true);
        }
    }, []);

    return (
        <Layout title="软件下载" description="软件下载">
            {
                showAdBlockAlert && <div className='alert alert--warning' style={{ margin: '5px', textAlign: 'center' }}>
                    <h3>为了本站的长期运营，请将我们的网站加入广告拦截器的白名单，感谢您的支持！</h3>
                </div>
            }
            <div class="wwads-cn wwads-horizontal wwads-sticky" data-id="285" style={{ maxWidth: "350px" }}></div>
            <div className={clsx('hero ', styles.heroBanner)}>
                <div className="container"
                >
                    <h1 className="hero__title" style={{ color: '#ffc131' }}>{latestVersion}</h1>
                    <div className='alert alert--info' style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <span>
                            不知道该下载哪个？请查看
                            <Link to="/docs/tutorial/install"> 安装指南 </Link>
                        </span>
                        <span>
                            本站下载加速由
                            <Link to="https://ghproxy.com"> ghproxy.com </Link>
                            提供
                        </span>
                    </div>
                    <div className="row" style={{ display: latestVersion === '' && 'none' }}>
                        <div style={{ display: 'inline-block', margin: 'auto' }}>
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://jihulab.com/api/v4/projects/153845/packages/generic/pot-desktop/${latestVersion}/pot_${latestVersion}_x64-setup.exe` : 'https://jihulab.com/pot-app/pot-desktop/-/releases'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <BsWindows style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        Windows x64 (.exe)
                                    </span>
                                </div>
                            </Link>
                            <br />
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://jihulab.com/api/v4/projects/153845/packages/generic/pot-desktop/${latestVersion}/pot_${latestVersion}_x86-setup.exe` : 'https://jihulab.com/pot-app/pot-desktop/-/releases'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <BsWindows style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        Windows x86 (.exe)
                                    </span>
                                </div>
                            </Link>
                            <br />
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://jihulab.com/api/v4/projects/153845/packages/generic/pot-desktop/${latestVersion}/pot_${latestVersion}_arm64-setup.exe` : 'https://jihulab.com/pot-app/pot-desktop/-/releases'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <BsWindows style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        Windows arm64 (.exe)
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div style={{ display: 'inline-block', margin: 'auto' }}>
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://jihulab.com/api/v4/projects/153845/packages/generic/pot-desktop/${latestVersion}/pot_${latestVersion}_aarch64.dmg` : 'https://jihulab.com/pot-app/pot-desktop/-/releases'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <BsApple style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        MacOS aarch64 (.dmg)
                                    </span>
                                </div>
                            </Link>
                            <br />
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://jihulab.com/api/v4/projects/153845/packages/generic/pot-desktop/${latestVersion}/pot_${latestVersion}_x64.dmg` : 'https://jihulab.com/pot-app/pot-desktop/-/releases'}>

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <BsApple style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        MacOS x64 (.dmg)
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div style={{ display: 'inline-block', margin: 'auto' }}>
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://jihulab.com/api/v4/projects/153845/packages/generic/pot-desktop/${latestVersion}/pot_${latestVersion}_amd64.deb` : 'https://jihulab.com/pot-app/pot-desktop/-/releases'}>

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <FaLinux style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        Linux x64 (.deb)
                                    </span>
                                </div>
                            </Link>
                            <br />
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://jihulab.com/api/v4/projects/153845/packages/generic/pot-desktop/${latestVersion}/pot_${latestVersion}_i386.deb` : 'https://jihulab.com/pot-app/pot-desktop/-/releases'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <FaLinux style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        Linux x86 (.deb)
                                    </span>
                                </div>
                            </Link>
                            <br />
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://jihulab.com/api/v4/projects/153845/packages/generic/pot-desktop/${latestVersion}/pot_${latestVersion}_arm64.deb` : 'https://jihulab.com/pot-app/pot-desktop/-/releases'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <FaLinux style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        Linux aarch64 (.deb)
                                    </span>
                                </div>
                            </Link>
                            <br />
                            <Link
                                className="button button--primary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to={latestVersion ? `https://jihulab.com/api/v4/projects/153845/packages/generic/pot-desktop/${latestVersion}/pot_${latestVersion}_armhf.deb` : 'https://jihulab.com/pot-app/pot-desktop/-/releases'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <FaLinux style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        Linux armv7 (.deb)
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div style={{ display: 'inline-block', margin: 'auto' }}>
                            <Link
                                className="button button--secondary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to='https://github.com/pot-app/pot-desktop/releases/latest'>

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <BsGithub style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        前往Github Release
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div style={{ display: 'inline-block', margin: 'auto' }}>
                            <Link
                                className="button button--secondary button--lg"
                                style={{ marginTop: '25px', width: 350 }}
                                to='https://jihulab.com/pot-app/pot-desktop/-/releases'>

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <FaGitlab style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                    <span style={{ width: 250, textAlign: 'center' }}>
                                        前往Jihulab Release
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