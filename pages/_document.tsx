import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
	    <meta name="og:title" content="Revision Bot Commands" />
		<meta name="og:type" content="website" />
		<meta name="og:image" content="https://i.imgur.com/HhD3nM8.png" />
		<meta name="og:url" content="https://revicmd.vercel.app" />
		<meta name="og:description" content="read the commands!!!" />
      	<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/favicon.ico" />
	  </Head>
	  <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
