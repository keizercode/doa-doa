import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const MyDocument = () => {
  return (
    <Html>
      <Head>
        {/* <link rel='manifest' href='/manifest.json' /> */}
        <link rel='apple-touch-icon' href='/doa.png'></link>
        <link rel='icon' href='/doa.png'></link>
        <meta name='theme-color' content='#fff' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
