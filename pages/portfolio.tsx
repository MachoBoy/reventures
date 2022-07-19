import { useState } from 'react';
import { client } from '../lib/apollo';
import MainSectionTitle from '../components/main-section-title/mainSectionTitle';
import BrandSlider from '../components/brand-slider/brandSlider';
import BrandBox from '../components/brand-box/brandBox';
import SectorCategoryButton from '../components/sector-category-button/SectorCategoryButton';
import PortfolioCardDetail from '../components/portfolio-card-detail/portfolioCardDetail';
import { portfolioData } from '../data/portfolio-data';
import { contactCategory } from '../data/contact-data';
import { GET_PORTFOLIO_POSTS } from '../lib/queries/portfolio/get-portfolio';
import { PortfolioProps, PortfolioType } from '../data/portfolio-data';
import LoadMorePortfolio from '../components/load-more-portfolio/load-more-portfolio';

const Portfolio = ({ portfolioPosts, pageInfo }: PortfolioProps) => {
  // console.log(pageInfo);
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
  const [selectedSector, setSelectedSector] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

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
        <div>
          {contactCategory.map((category, index) => {
            return (
              <SectorCategoryButton
                key={index}
                name={category}
                color='#6D7278'
                textColor='#FEFEFED9'
                bgHover='bg-black'
                selectedSector={selectedSector}
              />
            );
          })}
        </div>
        <div className='w-full mt-6 flex justify-end'>
          <div className='flex flex-row relative'>
            <i>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='13'
                height='13'
                fill='currentColor'
                className='bi bi-search absolute right-[120px] bottom-4 text-[#747474]'
                viewBox='0 0 16 16'
              >
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
              </svg>
            </i>
            <input
              className='w-full max-w-[320px] px-4 py-2 border-[1px] border-[#0000001A]'
              type='text'
              placeholder='기업명을 입력해주세요'
            />
            <button className='ml-3 w-[135px] h-[46px] bg-black flex justify-center items-center text-white'>
              Search
            </button>
          </div>
        </div>
        <LoadMorePortfolio
          posts={portfolioPosts}
          pages={pageInfo}
          openModal={openModal}
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
    },
  };
}
