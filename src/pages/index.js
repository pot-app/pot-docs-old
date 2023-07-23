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

  useEffect(() => {
    axios.get('https://api.github.com/repos/pot-app/pot-desktop/releases/tags/updater').then(
      res => {
        const { data: { body } } = res;
        setLatestVersion(body)
      },
      err => {
        console.log(err)
      }
    )
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

  return (
    <Layout
      title={`${siteConfig.title} | ${siteConfig.tagline}`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
