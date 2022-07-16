import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header/header';
import Main from './home';

const Home: NextPage = () => {
  return (
    <div className='w-full max-w-[1920px] m-auto'>
      <Head>
        <title>Re:ventures</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Main />
    </div>
  );
};

export default Home;
