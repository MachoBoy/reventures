import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header/header';
import Main from './main/home';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Re:ventures</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main>
        <Header />
        <div className='container w-full max-w-[1920px]'>
          <Main />
        </div>
      </main>
    </div>
  );
};

export default Home;
