import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link id="theme-css" href={`/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
          <meta name="keywords" content="" />
          <meta name="description" content="Spiritual Awareness - Priti Soni" />
          <meta name="pritisoni" content="ATFN" />

          <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
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
