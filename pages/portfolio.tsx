import MainSectionTitle from '../components/main-section-title/mainSectionTitle';
import BrandSlider from '../components/brand-slider/brandSlider';
import BrandBox from '../components/brand-box/brandBox';
import PortfolioCard from '../components/portfolio-card/portfolioCard';
import SectorCategoryButton from '../components/sector-category-button/SectorCategoryButton';
import { portfolioData } from '../data/portfolio-data';
import { contactCategory } from '../data/contact-data';

const portfolio = () => {
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
              placeholder='키워드를 입력해주세요'
            />
            <button className='ml-3 w-[135px] h-[46px] bg-black flex justify-center items-center text-white'>
              Search
            </button>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 gap-x-2'>
          {portfolioData.map(
            ({ stage, logo, company, sector, desc }, index) => {
              return (
                <PortfolioCard
                  key={index}
                  stage={stage}
                  logo={logo}
                  company={company}
                  sector={sector}
                  desc={desc}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default portfolio;
