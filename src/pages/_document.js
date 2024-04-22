import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="fa" dir='rtl'>
      <Head>
      <link rel="icon" type="image/png" href="/images/logo/logo.png" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}