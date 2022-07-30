import type { NextPage } from 'next';
import Head from 'next/head';
import Home from './home';
import { PortfolioType, PortfolioProps } from '../data/portfolio-data';
import { client } from '../lib/apollo';
import { GET_PORTFOLIO_SLIDER } from '../lib/queries/portfolio/get-portfolio-slider';

const Main: NextPage<PortfolioProps> = ({ portfolioPosts }) => {
  // console.log(portfolioPosts);
  return (
    <div className='w-full'>
      <Head>
        <title>RE:VENTURES</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Home portfolioPosts={portfolioPosts} />
    </div>
  );
};

export async function getStaticProps() {
  const response = await client.query({
    query: GET_PORTFOLIO_SLIDER,
  });

  const portfolioPosts = response?.data?.posts?.nodes.map(
    (post: PortfolioType) => post.portfolio
  );

  return {
    props: {
      portfolioPosts,
    },
  };
}

export default Main;
