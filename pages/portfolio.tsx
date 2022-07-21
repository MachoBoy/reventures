import Head from 'next/head';
import { useState } from 'react';
import { client } from '../lib/apollo';
import MainSectionTitle from '../components/main-section-title/mainSectionTitle';
import BrandSlider from '../components/brand-slider/brandSlider';
import BrandBox from '../components/brand-box/brandBox';
import PortfolioCardDetail from '../components/portfolio-card-detail/portfolioCardDetail';
import { portfolioData } from '../data/portfolio-data';
import { GET_PORTFOLIO_POSTS } from '../lib/queries/portfolio/get-portfolio';
import { GET_PORTFOLIO_SLIDER } from '../lib/queries/portfolio/get-portfolio-slider';
import { GET_PORTFOLIO_CATEGORIES } from '../lib/queries/portfolio/get-portfolio-categories';
import { PortfolioProps, PortfolioType } from '../data/portfolio-data';
import LoadMorePortfolio from '../components/load-more-portfolio/load-more-portfolio';

const Portfolio = ({
  portfolioPosts,
  pageInfo,
  categories,
  sliderPosts,
}: PortfolioProps) => {
  // console.log(portfolioPosts);
  //console.log(categories);
  const [isModalOpen, setModalOpen] = useState(false);
  const [activePost, setActivePost] = useState({
    stage: '',
    ceoName: '',
    logo: {
      sourceUrl: '',
      __typename: '',
    },
    companyName: '',
    companyDesc: '',
    foundDate: '',
    location: '',
    sector: '',
    __typename: '',
  });

  const openModal = (postsData: [], index: number) => {
    //const post = portfolioPosts[index];
    setModalOpen(true);
    setActivePost(postsData[index]);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='w-full'>
      <Head>
        <title>RE:VENTURES - Portfolio</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width maximum-scale=1.0, shrink-to-fit=no, user-scalable=0'
        />
      </Head>
      <div className='h-[80px] bg-portfolio-top bg-center bg-no-repeat'></div>
      <div className='w-full max-w-[1140px] mx-auto pt-14 pb-24'>
        <MainSectionTitle title='ATTRACTING INVESTMENT' isDark={false} />
        <div className='mt-14'>
          {sliderPosts ? (
            <BrandSlider>
              {sliderPosts.map(({ logo, companyName }, index) => {
                return (
                  <BrandBox key={index} logo={logo} companyName={companyName} />
                );
              })}
            </BrandSlider>
          ) : (
            <div className='mt-4 h-[190px] border-[1px] border-[#0000001A] flex justify-center items-center'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  fill='currentColor'
                  className='bi bi-exclamation-triangle-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
                </svg>
              </div>
              <div className='text-[22px] text-[#3D3D3D] ml-4'>
                조건에 맞는 포트폴리오가 없습니다
              </div>
            </div>
          )}
        </div>
        <div className='mt-20'>
          <MainSectionTitle title='PORTFOLIO' isDark={false} />
        </div>
        <div className='mt-14 uppercase text-xl text-black font-semibold'>
          sector
        </div>

        <LoadMorePortfolio
          posts={portfolioPosts}
          pages={pageInfo}
          openModal={openModal}
          categories={categories}
        />
      </div>
      {isModalOpen ? (
        <div className='fixed w-full h-full bg-[#0000001A]/[0.5] top-0 left-0 flex justify-center items-center'>
          <div className='relative w-[1060px]'>
            <PortfolioCardDetail
              closeModal={closeModal}
              activePost={activePost}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Portfolio;

export async function getStaticProps() {
  const response = await client.query({
    query: GET_PORTFOLIO_POSTS,
    variables: {
      first: 9,
      after: null,
    },
  });

  const sliderResponse = await client.query({
    query: GET_PORTFOLIO_SLIDER,
  });

  const categoriesResponse = await client.query({
    query: GET_PORTFOLIO_CATEGORIES,
  });

  const categories = categoriesResponse?.data?.categories?.nodes
    ?.concat({
      categoryId: 0,
      name: 'All',
    })
    .filter((category: any) => category.name !== 'portfolio')
    .sort((a: any, b: any) => {
      return a.categoryId - b.categoryId;
    });

  const portfolioPosts = response?.data?.posts?.nodes.map(
    (post: PortfolioType) => {
      return post.portfolio;
      // return { ...post.portfolio, logo: post?.portfolio.logo.sourceUrl };
    }
  );

  const sliderPosts = sliderResponse?.data?.posts?.nodes.map(
    (post: PortfolioType) => {
      return post.portfolio;
      // return { ...post.portfolio, logo: post?.portfolio.logo.sourceUrl };
    }
  );
  const pageInfo = response?.data?.posts?.pageInfo;

  return {
    props: {
      portfolioPosts,
      pageInfo,
      categories,
      sliderPosts,
    },
  };
}
