import type { NextPage } from 'next';
import Head from 'next/head';
import Main from './home';

const Home: NextPage = () => {
  return (
    <div className='w-full'>
      <Head>
        <title>Re:ventures</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Main />
    </div>
  );
};

export default Home;
