import type { NextPage } from 'next';
import Head from 'next/head';
import Main from './home';

const Home: NextPage = () => {
  return (
    <div className='w-full min-w-[1560px] max-w-[1920px] overflow-hidden m-auto'>
      <Head>
        <title>Re:ventures</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Main />
    </div>
  );
};

export default Home;
