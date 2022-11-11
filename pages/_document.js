import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <title>Nachete Crypto-Invest</title>
        <Head>
          {/* <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" />  */}
          <meta name="Content-Type" content="text/html"/>
          <meta charset="UTF-8"/>
          <meta name="google" content="nositelinkssearchbox" />
          <meta name="google" content="notranslate" />
          <meta name="robots" content="noindex,nofollow"/>
          <meta name="description" content="Author: Nachete, Illustrator: CryptoInvest, Category: Crypto, Invest, Golden Way, Kannabyte, Bitcoin"/>
          <meta name='title' content='Golden Way, Crypto Invest, Earn Money Fast, Bitcoin' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;