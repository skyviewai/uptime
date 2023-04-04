import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Environments from 'components/Environments';
import GlobalStyle from '../globalStyles';

export default function Home() {
  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1024px'}}>
      <Head>
        <title>uptime</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col px-4">
        <Navbar />

        <section>
          <Environments />
        </section>
      </main>
      <Footer/>
    </div>
  );
};
