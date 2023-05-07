import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🌟划词翻译',
    description: (
      <>
        鼠标划词，即刻翻译！
      </>
    ),
  },
  {
    title: '🚀Tauri 驱动',
    description: (
      <>
        Rust + React 开发，界面美观，快如闪电！
      </>
    ),
  },
  {
    title: '🧩多翻译接口',
    description: (
      <>
        多接口支持，总有一款适合你的！
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='card'>
        <div style={{ height: 40 }} />
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
