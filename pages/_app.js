import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/tailwind.css";

import Head from "next/head";
import { siteDescription, siteTitle } from "../site.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="description" content={siteDescription} />

        <meta property="og:title" content={siteTitle} key="ogtitle" />
        <meta
          property="og:description"
          content={siteDescription}
          key="ogdesc"
        />

        <title>{siteTitle}</title>
      </Head>
      <div className="min-h-screen flex flex-col justify-between bg-gray-200 text-white">
        <Navbar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default MyApp;
