import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>BigQuery</>,
    imageUrl: 'img/BigQuery.svg',
    description: (
      <>
        AWS を使っていても、DWH だけは BigQuery って企業もあるくらいに BigQuery は強いです。
        これを活用できるような情報発信をしていきます。
      </>
    ),
  },
  {
    title: <>Google Cloud Platform</>,
    imageUrl: 'img/logo_gcp_hexagon_rgb.png',
    description: (
      <>
        BigQuery を触っていると GCP を触らざるを得ません。
        BigQuery と一緒に活用しやすいサービスの情報発信もします。
      </>
    ),
  },
  {
    title: <>Data Engineering</>,
    imageUrl: 'img/data_engineer.png',
    description: (
      <>
        BigQuery のおかげでデータの変換だけでなく、データの品質に着目できるようになっています。
        データエンジニアリングに関して情報交換できたら良いと思います。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/data-management')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
