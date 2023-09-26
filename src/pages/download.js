import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import axios from 'axios';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { BsWindows } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';
import { FaLinux } from 'react-icons/fa';
export default function Download() {
    const [latestVersion, setLatestVersion] = useState('');

    const getVersion = async () => {
        const res = await axios.get('/.netlify/functions/version');
        return res.data;
    }

    useEffect(() => {
        getVersion().then(v => {
            setLatestVersion(v);
        });
        function ABDetected() {
            document.getElementsByClassName("my-ads")[0].insertAdjacentHTML("beforeend", "<style>.wwads-horizontal,.wwads-vertical{background-color:#f4f8fa;padding:5px;min-height:120px;margin-top:20px;box-sizing:border-box;border-radius:3px;font-family:sans-serif;display:flex;min-width:150px;position:relative;overflow:hidden;}.wwads-horizontal{flex-wrap:wrap;justify-content:center}.wwads-vertical{flex-direction:column;align-items:center;padding-bottom:32px}.wwads-horizontal a,.wwads-vertical a{text-decoration:none}.wwads-horizontal .wwads-img,.wwads-vertical .wwads-img{margin:5px}.wwads-horizontal .wwads-content,.wwads-vertical .wwads-content{margin:5px}.wwads-horizontal .wwads-content{flex:130px}.wwads-vertical .wwads-content{margin-top:10px}.wwads-horizontal .wwads-text,.wwads-content .wwads-text{font-size:14px;line-height:1.4;color:#0e1011;-webkit-font-smoothing:antialiased}.wwads-horizontal .wwads-poweredby,.wwads-vertical .wwads-poweredby{display:block;font-size:11px;color:#a6b7bf;margin-top:1em}.wwads-vertical .wwads-poweredby{position:absolute;left:10px;bottom:10px}.wwads-horizontal .wwads-poweredby span,.wwads-vertical .wwads-poweredby span{transition:all 0.2s ease-in-out;margin-left:-1em}.wwads-horizontal .wwads-poweredby span:first-child,.wwads-vertical .wwads-poweredby span:first-child{opacity:0}.wwads-horizontal:hover .wwads-poweredby span,.wwads-vertical:hover .wwads-poweredby span{opacity:1;margin-left:0}.wwads-horizontal .wwads-hide,.wwads-vertical .wwads-hide{position:absolute;right:-23px;bottom:-23px;width:46px;height:46px;border-radius:23px;transition:all 0.3s ease-in-out;cursor:pointer;}.wwads-horizontal .wwads-hide:hover,.wwads-vertical .wwads-hide:hover{background:rgb(0 0 0 /0.05)}.wwads-horizontal .wwads-hide svg,.wwads-vertical .wwads-hide svg{position:absolute;left:10px;top:10px;fill:#a6b7bf}.wwads-horizontal .wwads-hide:hover svg,.wwads-vertical .wwads-hide:hover svg{fill:#3E4546}</style><a href='https://wwads.cn/page/whitelist-wwads' class='wwads-img' target='_blank' rel='nofollow'><img src='https://creatives-1301677708.file.myqcloud.com/images/placeholder/wwads-friendly-ads.png' width='130'></a><div class='wwads-content'><a href='https://wwads.cn/page/whitelist-wwads' class='wwads-text' target='_blank' rel='nofollow'>为了本站的长期运营，请将我们的网站加入广告拦截器的白名单，感谢您的支持！</a><a href='https://wwads.cn/page/end-user-privacy' class='wwads-poweredby' title='万维广告 ～ 让广告更优雅，且有用' target='_blank'><span>万维</span><span>广告</span></a></div><a class='wwads-hide' onclick='parentNode.remove()' title='隐藏广告'><svg xmlns='http://www.w3.org/2000/svg' width='6' height='7'><path d='M.879.672L3 2.793 5.121.672a.5.5 0 11.707.707L3.708 3.5l2.12 2.121a.5.5 0 11-.707.707l-2.12-2.12-2.122 2.12a.5.5 0 11-.707-.707l2.121-2.12L.172 1.378A.5.5 0 01.879.672z'></path></svg></a>");
        };

        setTimeout(function () {
            if (window._AdBlockInit === undefined) {
                ABDetected();
            }
        }, 3000);
    }, []);

    return (
        <Layout title="软件下载" description="软件下载">
            <div class="wwads-cn wwads-horizontal wwads-sticky" data-id="285" style={{ maxWidth: "350px" }}></div>
            <div className={clsx('hero ', styles.heroBanner)}>
                <div className="container"
                >
                    <h1 className="hero__title" style={{ color: '#ffc131' }}>{latestVersion}</h1>
                    <div className='alert alert--info my-ads' style={{ display: 'flex', justifyContent: 'space-around' }}>
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
                                to={latestVersion ? `https://ghproxy.com/https://github.com/pot-app/pot-desktop/releases/download/${latestVersion}/pot_${latestVersion}_x64-setup.exe` : 'https://github.com/pot-app/pot-desktop/releases/latest'}>
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
                                to={latestVersion ? `https://ghproxy.com/https://github.com/pot-app/pot-desktop/releases/download/${latestVersion}/pot_${latestVersion}_x86-setup.exe` : 'https://github.com/pot-app/pot-desktop/releases/latest'}>
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
                                to={latestVersion ? `https://ghproxy.com/https://github.com/pot-app/pot-desktop/releases/download/${latestVersion}/pot_${latestVersion}_arm64-setup.exe` : 'https://github.com/pot-app/pot-desktop/releases/latest'}>
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
                                to={latestVersion ? `https://ghproxy.com/https://github.com/pot-app/pot-desktop/releases/download/${latestVersion}/pot_${latestVersion}_aarch64.dmg` : 'https://github.com/pot-app/pot-desktop/releases/latest'}>
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
                                to={latestVersion ? `https://ghproxy.com/https://github.com/pot-app/pot-desktop/releases/download/${latestVersion}/pot_${latestVersion}_x64.dmg` : 'https://github.com/pot-app/pot-desktop/releases/latest'}>

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
                                to={latestVersion ? `https://ghproxy.com/https://github.com/pot-app/pot-desktop/releases/download/${latestVersion}/pot_${latestVersion}_amd64.deb` : 'https://github.com/pot-app/pot-desktop/releases/latest'}>

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
                                to={latestVersion ? `https://ghproxy.com/https://github.com/pot-app/pot-desktop/releases/download/${latestVersion}/pot_${latestVersion}_i386.deb` : 'https://github.com/pot-app/pot-desktop/releases/latest'}>
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
                                to={latestVersion ? `https://ghproxy.com/https://github.com/pot-app/pot-desktop/releases/download/${latestVersion}/pot_${latestVersion}_arm64.deb` : 'https://github.com/pot-app/pot-desktop/releases/latest'}>
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
                                to={latestVersion ? `https://ghproxy.com/https://github.com/pot-app/pot-desktop/releases/download/${latestVersion}/pot_${latestVersion}_armhf.deb` : 'https://github.com/pot-app/pot-desktop/releases/latest'}>
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

                    </div>
                </div>
            </div>
            <div>
                <HomepageFeatures />
            </div>

        </Layout >
    );
}