import React from 'react';
import Head from 'next/head';
import * as config from '../site.config';
import '../css/index.css';

const Root = (props) => {
  const { Component, pageProps } = props;
  const { title, stylesheets } = config;

  return (
    <>
      <Head>
        <title>{title}</title>
        {stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Root;
