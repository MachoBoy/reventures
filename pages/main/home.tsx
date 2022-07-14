import Link from 'next/link';
import MainSectionTitle from '../../components/main-section-title/mainSectionTitle';
import MainAboutItem from '../../components/main-about-item/mainAboutItem';
import PortfolioCard from '../../components/portfolio-card/portfolioCard';
import { aboutData, investCountData } from './home-data';
import MainInvestCount from '../../components/main-invest-count/mainInvestCount';

const Home = () => {
  return (
    <div className='w-full'>
      <div className='top-section h-[867px] bg-black z-10'></div>
      <div className='second-section m-auto flex justify-center items-center'>
        <div className='about-left relative w-full max-w-[710px] h-[845px]'>
          <div className='block w-full h-full shadow-2xl absolute inset-0 p-14 z-20 bg-white -mt-11'>
            <MainSectionTitle title='About' isDark={false} />
            <p className='text-2xl text-[#3D3D3D] mt-9'>
              벤처투자를 위한 투자자와 스타트업의 파트너, 리벤처스
            </p>
            <div className='mt-9'>
              {aboutData.map(({ icon, title, desc }, index) => {
                return (
                  <MainAboutItem
                    key={index}
                    icon={icon}
                    title={title}
                    desc={desc}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className='about-right relative ml-20'>
          <div className='relative w-[409px] h-[562px] bg-slate-800 z-20'></div>
          <div className='w-[409px] h-[562px] z-10 absolute left-9 top-9 bg-gray-500'></div>
          <Link href='/about'>
            <a className='block mt-20 w-full text-right text-[#6D7278] text-[27px]'>
              Read More &#10132;
            </a>
          </Link>
        </div>
      </div>
      <div className='third-section pt-[75px] pb-[95px] bg-slate-500 flex flex-col items-center'>
        <p className='text-center text-[#FEFEFE] text-3xl w-full max-w-xl'>
          리벤처스는 혁신적 창업가와 투자자가 함께 10년의 미래의 변화에 도전하는
          엑셀러레이터 입니다.
        </p>
      </div>
      <div className='fourth-section w-full pt-16 pb-28'>
        <div className='w-full max-w-[1143px] m-auto'>
          <MainSectionTitle title='portfolio' isDark={false} />
          <div className='mt-9'></div>
          <PortfolioCard />
        </div>
      </div>
      <div className='fifth-section w-full pt-10 pb-14 bg-black'>
        <div className='w-full inline-block'>
          <div className='ml-[387px] mr-auto'>
            <MainSectionTitle title='our investment history' isDark={true} />
          </div>
          <div className='w-full max-w-[1188px] flex flex-row justify-between mt-10 m-auto'>
            {investCountData.map(({ number, title, subtitle }, index) => {
              return (
                <MainInvestCount
                  key={index}
                  number={number}
                  title={title}
                  subtitle={subtitle}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
