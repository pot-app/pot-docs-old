import React, { useEffect, useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const [latestVersion, setLatestVersion] = useState();
  const { siteConfig } = useDocusaurusContext();

  const getVersion = async () => {
    const res = await axios.get('/.netlify/functions/version');
    return res.data;
  }

  useEffect(() => {
    getVersion().then(v => {
      setLatestVersion(v);
    })
  }, [])

  return (
    <header className={clsx('hero ', styles.heroBanner)}>

      <div className="container">

        <img alt="Logo" src="img/pot.png" height={150} style={{ height: 150 }} />
        <br />
        <h1 className="hero__title" style={{ display: 'inline-block' }}>{siteConfig.title}</h1>
        <h1 className="hero__title" style={{ marginLeft: '24px', display: 'inline-block', color: '#ffc131' }}>{latestVersion}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link
          className="button button--secondary button--lg"
          style={{ margin: 10 }}
          to="/docs/tutorial/intro">
          快速开始
        </Link>
        <Link
          className="button button--secondary button--lg"
          style={{ margin: 10 }}
          to="/download">
          立即下载
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [showAdBlockAlert, setShowAdBlockAlert] = useState(false);

  useEffect(() => {
    if (window._AdBlockInit === undefined) {
      setShowAdBlockAlert(true);
    }
  }, []);

  return (
    <Layout
      title={`${siteConfig.title} | ${siteConfig.tagline}`}
      description={siteConfig.tagline}>
      {
        showAdBlockAlert && <div className='alert alert--warning' style={{ margin: '5px', textAlign: 'center' }}>
          <h3>为了本站的长期运营，请将我们的网站加入广告拦截器的白名单，感谢您的支持！</h3>
        </div>
      }

      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
