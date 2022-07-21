import { useState } from 'react';
import { client } from '../lib/apollo';
import MainSectionTitle from '../components/main-section-title/mainSectionTitle';
import BrandSlider from '../components/brand-slider/brandSlider';
import BrandBox from '../components/brand-box/brandBox';
import PortfolioCardDetail from '../components/portfolio-card-detail/portfolioCardDetail';
import { portfolioData } from '../data/portfolio-data';
import { GET_PORTFOLIO_POSTS } from '../lib/queries/portfolio/get-portfolio';
import { GET_PORTFOLIO_CATEGORIES } from '../lib/queries/portfolio/get-portfolio-categories';
import { PortfolioProps, PortfolioType } from '../data/portfolio-data';
import LoadMorePortfolio from '../components/load-more-portfolio/load-more-portfolio';

const Portfolio = ({
  portfolioPosts,
  pageInfo,
  categories,
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
      <div className='h-[80px] bg-portfolio-top bg-center bg-no-repeat'></div>
      <div className='w-full max-w-[1140px] mx-auto pt-14 pb-24'>
        <MainSectionTitle title='ATTRACTING INVESTMENT' isDark={false} />
        <div className='mt-14'>
          <BrandSlider>
            {portfolioData.map(({ logo }, index) => {
              return <BrandBox key={index} logo={logo} />;
            })}
          </BrandSlider>
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
  const pageInfo = response?.data?.posts?.pageInfo;

  return {
    props: {
      portfolioPosts,
      pageInfo,
      categories,
    },
  };
}
