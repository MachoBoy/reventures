import type { NextPage } from 'next';
import Head from 'next/head';
import Home from './home';
import { PortfolioType, PortfolioProps } from '../data/portfolio-data';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

const Main: NextPage<PortfolioProps> = ({ portfolioPosts }) => {
  // console.log(portfolioPosts);
  return (
    <div className='w-full'>
      <Head>
        <title>Re:ventures</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Home portfolioPosts={portfolioPosts} />
    </div>
  );
};

export async function getStaticProps() {
  const GET_PORTFOLIO_POST = gql`
    query AllPortfolioPosts {
      posts {
        nodes {
          portfolio {
            stage
            # ceoName
            # location
            companyDesc
            companyName
            # foundDate
            sector
            logo {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_PORTFOLIO_POST,
  });

  const portfolioPosts = response?.data?.posts?.nodes.map(
    (post: PortfolioType) => {
      return post.portfolio;
      // return { ...post.portfolio, logo: post?.portfolio.logo.sourceUrl };
    }
  );

  return {
    props: {
      portfolioPosts,
    },
  };
}

export default Main;
