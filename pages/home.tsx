import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MainSectionTitle from '../components/main-section-title/mainSectionTitle';
import MainAboutItem from '../components/main-about-item/mainAboutItem';
import PortfolioCard from '../components/portfolio-card/portfolioCard';
import MainInvestCount from '../components/main-invest-count/mainInvestCount';
import AllRightsReserve from '../components/all-rights-reserve/allRightsReserve';
import ScrollIndicator from '../components/scroll-indicator/scroll-indicator';
import PortfolioSlider from '../components/portfolio-slider/portfolioSlider';
import { aboutData, investCountData } from '../data/home-data';
import { PortfolioProps } from '../data/portfolio-data';
import PortfolioNotFound from '../components/portfolio-not-found/portfolio-not-found';
import FadeIn from '../components/fade-in/fadeIn';

const Home = ({ portfolioPosts }: PortfolioProps) => {
  // console.log(portfolioPosts);
  //pt-[320px] pl-[358px]
  const portfolioVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        // delay: 0.2,
        staggerChildren: 0.3,
      },
    },
  };
  const cardVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className='w-full'>
      <div className='relative top-section h-[867px] bg-black mx-auto lg:flex lg:flex-col lg:justify-center lg:items-center'>
        <video
          autoPlay
          loop
          muted
          className='w-full h-full absolute left-0 -top-14 sm:top-0 lg:transform lg:scale-150'
        >
          <source src='main.mp4' type='video/mp4' />
        </video>
        <div className='absolute -left-28 rotate-90 top-1/2 block lg:hidden'>
          <AllRightsReserve />
        </div>
        <div className='absolute right-7 top-1/3 -mt-6 block lg:hidden'>
          <ScrollIndicator />
        </div>
        <div className='absolute h-[220px] flex justify-center flex-col top-1/2 left-1/2 -translate-y-1/2 -translate-x-[37rem] px-6 xl:-translate-x-1/2 lg:relative lg:w-full lg:text-center lg:translate-x-0 lg:left-0 lg:top-0 lg:-translate-y-[1/6] lg:h-auto'>
          <div className='flex flex-row items-center'>
            <div className='w-[5px] h-[93px] bg-[#64676A] block lg:hidden'></div>
            <div className='ml-5 text-white text-7xl font-semibold lg:ml-0 lg:w-full lg:text-center sm:text-5xl'>
              RE:VENTURES
            </div>
          </div>
          <div className='block ml-8 text-3xl text-[#A2A4A7] text-left lg:ml-0 lg:text-center lg:mt-5 lg:uppercase'>
            Venture for the early starts-up
          </div>
        </div>
        <div className='hidden lg:relative lg:block lg:-mt-10 mt-16'>
          <ScrollIndicator />
        </div>
      </div>
      <div className='second-section m-auto flex justify-center items-center flex-row lg:flex-col pb-0 px-6 lg:pb-7'>
        <div className='about-left relative w-full max-w-[710px] mb-10'>
          <div className='block w-full h-full shadow-2xl p-14 z-20 bg-white -mt-11 lg:-mt-44 md:relative'>
            <MainSectionTitle title='About' isDark={false} />
            {/* <p className='text-2xl text-[#3D3D3D] mt-9 text-left lg:text-center sm:mt-5 sm:text-xl'>
              벤처투자를 위한 투자자와 스타트업의 파트너, 리벤처스
            </p> */}
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
        <div className='about-right relative ml-20 lg:ml-0'>
          <div className='relative w-[430px] h-[562px] z-20 block lg:hidden'>
            <Image src='/img_home.png' layout='fill' alt='airplain' />
          </div>
          <div className='mt-8 w-full flex justify-end pr-12 hover:pr-9 transition-all lg:pr-0 lg:mt-5'>
            <Link href='/about'>
              <a className='relative block w-[171px] h-[42px] text-right text-[#6D7278] text-[27px]'>
                <Image layout='fill' alt='Read More' src='/btn_readmore.png' />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <FadeIn>
        <div className='third-section pt-[75px] pb-[95px] h-[362px] bg-slate-500 flex flex-col items-center bg-home-third bg-center bg-no-repeat px-6 sm:pt-[50px] sm:pb-[55px]'>
          {/* <div className='text-white text-[80px] font-semibold lg:text-6xl md:text-5xl sm:text-[40px]'>
            RE:VENTURES
          </div>
          <p className='text-center text-[#FEFEFE] text-3xl w-full max-w-2xl whitespace-pre-wrap lg:text-2xl lg:mt-3 md:text-xl sm:mt-11'>
            리벤처스는 혁신적 창업가와 투자자가 함께 {'\u000A'} 10년의 미래의
            변화에 도전하는 엑셀러레이터 입니다.
          </p> */}
        </div>
      </FadeIn>

      <motion.div
        className='fourth-section w-full pt-16 pb-28'
        variants={portfolioVariant}
        viewport={{ once: true }}
        initial='hidden'
        whileInView='visible'
      >
        <div className='w-full max-w-[1240px] m-auto px-5 sm:px-1'>
          <MainSectionTitle title='portfolio' isDark={false} />
          <div className='mt-9 sm:mt-0'>
            {portfolioPosts.length > 0 ? (
              <PortfolioSlider>
                {portfolioPosts.map(
                  (
                    { stage, logo, companyName, sector, companyDesc },
                    index
                  ) => {
                    return (
                      <motion.div key={index} variants={cardVariant}>
                        <PortfolioCard
                          stage={stage}
                          logo={logo}
                          companyName={companyName}
                          sector={sector}
                          companyDesc={companyDesc}
                          openModal={() => {}}
                        />
                      </motion.div>
                    );
                  }
                )}
              </PortfolioSlider>
            ) : (
              <div className='mt-4 w-full h-[455px] border-[1px] border-[#0000001A] flex justify-center items-center'>
                <PortfolioNotFound />
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <div className='fifth-section w-full pt-10 pb-14 bg-home-fifth bg-center bg-cover bg-no-repeat px-6'>
        <div className='w-full inline-block'>
          <div className='w-full max-w-[1143px] m-auto'>
            <MainSectionTitle title='our investment history' isDark={true} />
          </div>
          <div className='w-full max-w-[1188px] flex flex-row justify-between mt-10 m-auto lg:grid lg:grid-cols-3 sm:grid-cols-1 sm:mt-0'>
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
      <FadeIn>
        <div className='sixth-section w-full pt-[60px] pb-[81px] bg-[#1A1A1A] px-6'>
          <div className='w-full max-w-[1143px] m-auto flex flex-col'>
            <MainSectionTitle title='contact us' isDark={true} />
            <div className='mt-12 flex flex-col sm:mt-4'>
              <div className='mt-5 flex flex-row gap-7 sm:flex-col sm:mt-5'>
                <div className='w-full'>
                  <div className='text-gray-eee text-xl font-semibold sm:text-base text-left sm:text-center'>
                    서울 강남구 역삼로 165 해성빌딩 팁스타운S1 5층 D호실
                  </div>
                  <div className='mt-2 text-gray-eee text-lg mb-5 sm:text-base text-left sm:text-center'>
                    Unit D, Tipstown S1 5F, 165 Yeoksam-ro, Gangnam-gu, Seoul
                    Republic of Korea
                  </div>
                  <Image
                    width='558'
                    height='522'
                    alt='google-map'
                    src='/img_map2.png'
                  />
                </div>
                <div className='w-full'>
                  <div className='text-gray-eee text-xl font-semibold sm:text-base'>
                    대전 유성구 대학로 99 충남대학교, 대전 팁스타운 506호
                  </div>
                  <div className='mt-2 text-gray-eee text-lg mb-5 sm:text-base'>
                    Unit 506, Chung-nam Univ, Tipstown 99, Daehak-ro,
                    Yuseong-gu, Daejeon Republic of Korea
                  </div>
                  <Image
                    width='558'
                    height='522'
                    alt='google-map'
                    src='/img_map1.png'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className='seventh-section pt-[121px] pb-[92px] bg-slate-500 text-center bg-home-seventh bg-center bg-no-repeat px-6 sm:py-11'>
          <div className='text-white text-3xl font-semibold sm:text-2xl'>
            Contact Us
          </div>
          <div className='mt-5 text-gray-eee text-xl sm:text-base'>
            IR, 창업, 제휴 및 협업 문의
          </div>
          <Link href='/contact'>
            <a className='mt-7 inline-block py-5 px-36 bg-white text-2xl text-black font-semibold border-2 border-white border-solid hover:bg-black hover:text-white transition-all sm:py-4 sm:px-0 sm:w-full'>
              지원하기
            </a>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
};

export default Home;
