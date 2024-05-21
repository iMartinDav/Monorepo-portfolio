import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* eslint-disable */}
          <link id="theme-link" href={`/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
          <script src="/scripts/prism/prism.js" data-manual></script>
          <link rel="icon" href="/favicon.ico" />
          {/* eslint-enable */}
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
