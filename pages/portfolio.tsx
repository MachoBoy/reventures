import Head from 'next/head';
import { useState } from 'react';
import { client } from '../lib/apollo';
import ReactModal from 'react-modal';
import useWidth from '../hook/useWidth';
import MainSectionTitle from '../components/main-section-title/mainSectionTitle';
import BrandSlider from '../components/brand-slider/brandSlider';
import BrandBox from '../components/brand-box/brandBox';
import PortfolioCardDetail from '../components/portfolio-card-detail/portfolioCardDetail';
import PortfolioNotFound from '../components/portfolio-not-found/portfolio-not-found';
// import { portfolioData } from '../data/portfolio-data';
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
  const windowWidth = useWidth();
  // console.log(windowWidth);

  const openModal = (postsData: [], index: number) => {
    //const post = portfolioPosts[index];
    console.log(postsData[index]);
    setModalOpen(true);
    setActivePost(postsData[index]);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className='relative w-full'>
      <Head>
        <title>RE:VENTURES - Portfolio</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width maximum-scale=1.0, shrink-to-fit=no, user-scalable=0'
        />
      </Head>
      <div className='h-[80px] bg-portfolio-top bg-center bg-no-repeat'></div>
      <div className='w-full max-w-[1188px] mx-auto pt-14 pb-24 px-6'>
        <MainSectionTitle title='ATTRACTING INVESTMENT' isDark={false} />
        <div className='mt-14 sm:hidden'>
          {sliderPosts ? (
            <BrandSlider>
              {sliderPosts.map(({ logo, companyName }, index) => {
                return (
                  <BrandBox key={index} logo={logo} companyName={companyName} />
                );
              })}
            </BrandSlider>
          ) : (
            <div className='w-full mt-4 h-[190px]'>
              <PortfolioNotFound />
            </div>
          )}
        </div>
        <div className='hidden md:hidden sm:block'>
          <div className='mt-6 flex flex-row overflow-x-scroll'>
            {sliderPosts ? (
              sliderPosts.map(({ logo, companyName }, index) => {
                return (
                  <BrandBox key={index} logo={logo} companyName={companyName} />
                );
              })
            ) : (
              <div className='w-full mt-4 h-[190px]'>
                <PortfolioNotFound />
              </div>
            )}
          </div>
        </div>
        <div className='mt-20 sm:mt-11'>
          <MainSectionTitle title='PORTFOLIO' isDark={false} />
        </div>

        <LoadMorePortfolio
          posts={portfolioPosts}
          pages={pageInfo}
          openModal={openModal}
          categories={categories}
        />
      </div>
      <div>
        <ReactModal
          isOpen={isModalOpen}
          style={{
            overlay: { backgroundColor: 'rgba(0,0,1,0.5)' },
            content: {
              // boxSizing: 'content-box',
              padding: `${windowWidth > 640 ? '56px 80px' : '20px'}`,
              width: `${windowWidth > 640 ? '100%' : '100vw'}`,
              maxWidth: '1060px',
              height: `${windowWidth > 640 ? '535px' : 'calc(100vh - 60px)'}`,
              inset: 0,
              zIndex: 999,
              borderRadius: 'none',
              marginTop: `${windowWidth > 640 ? 'none' : '60px'}`,
              overflow: 'none',
              border: 'none',
              margin: `${windowWidth > 640 ? 'auto' : 'none'}`,
            },
          }}
        >
          <PortfolioCardDetail
            closeModal={closeModal}
            activePost={activePost}
          />
        </ReactModal>
      </div>
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
