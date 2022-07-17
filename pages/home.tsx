import Link from 'next/link';
import Image from 'next/image';
import MainSectionTitle from '../components/main-section-title/mainSectionTitle';
import MainAboutItem from '../components/main-about-item/mainAboutItem';
import PortfolioCard from '../components/portfolio-card/portfolioCard';
import MainInvestCount from '../components/main-invest-count/mainInvestCount';
import AllRightsReserve from '../components/all-rights-reserve/allRightsReserve';
import PortfolioSlider from '../components/portfolio-slider/portfolioSlider';
import { aboutData, investCountData } from '../data/home-data';
import { portfolioData } from '../data/portfolio-data';

const Home = () => {
  // console.log(process.env.GOOGLE_MAP_KEY);
  // console.log(process.env.WORDPRESS_URL);

  return (
    <div className='w-full'>
      <div className='pt-[320px] pl-[358px] relative top-section h-[867px] bg-black'>
        <video
          autoPlay
          loop
          muted
          className='w-full h-full absolute left-0 -top-14'
        >
          <source src='main.mp4' type='video/mp4' />
        </video>
        <div className='absolute -left-28 rotate-90 top-1/2'>
          <AllRightsReserve />
        </div>
        <div className='relative'>
          <div className='flex flex-row items-center'>
            <div className='w-[5px] h-[93px] bg-[#64676A]'></div>
            <div className='ml-5 text-white text-[120px] font-semibold'>
              RE:VENTURES
            </div>
          </div>
          <div className='ml-8 text-4xl text-[#A2A4A7]'>
            Venture for the early starts-up
          </div>
        </div>
      </div>
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
          <div className='relative w-[430px] h-[562px] z-20'>
            <Image
              src='/img_home.png'
              layout='responsive'
              width={409}
              height={562}
              alt='airplain'
            />
          </div>
          <Link href='/about'>
            <a className='block mt-20 w-full text-right text-[#6D7278] text-[27px]'>
              Read More &#10132;
            </a>
          </Link>
        </div>
      </div>
      <div className='third-section pt-[75px] pb-[95px] bg-slate-500 flex flex-col items-center bg-home-third bg-center bg-no-repeat'>
        <div className='text-white text-[80px] font-semibold'>RE:VENTURES</div>
        <p className='text-center text-[#FEFEFE] text-3xl w-full max-w-2xl whitespace-pre-wrap'>
          리벤처스는 혁신적 창업가와 투자자가 함께 {'\u000A'} 10년의 미래의
          변화에 도전하는 엑셀러레이터 입니다.
        </p>
      </div>
      <div className='fourth-section w-full pt-16 pb-28'>
        <div className='w-full max-w-[1200px] m-auto'>
          <MainSectionTitle title='portfolio' isDark={false} />
          <div className='mt-9'>
            <PortfolioSlider>
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
            </PortfolioSlider>
          </div>
        </div>
      </div>
      <div className='fifth-section w-full pt-10 pb-14 bg-home-fifth bg-center bg-cover bg-no-repeat'>
        <div className='w-full inline-block'>
          <div className='w-full max-w-[1143px] m-auto'>
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
      <div className='sixth-section w-full pt-[60px] pb-[81px] bg-[#1A1A1A]'>
        <div className='w-full max-w-[1143px] m-auto flex flex-col'>
          <MainSectionTitle title='contact us' isDark={true} />
          <div className='mt-12 flex flex-col '>
            <div className='mt-5 flex flex-row gap-7'>
              <div className='w-full'>
                <div className='text-gray-eee text-xl font-bold'>
                  서울 영등포구 여의대로 108 파크원타워1 4~5층
                </div>
                <div className='mt-2 text-gray-eee text-lg mb-5'>
                  108, Yeoui-daero, Yeongdeungpo-gu, Seoul, Republic of Korea
                </div>
                {/* <Image
                  width='558'
                  height='522'
                  alt='google-map'
                  src='/img_map1.png'
                /> */}
                <Image
                  width='558'
                  height='522'
                  alt='google-map'
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=37.525296,126.9193534&zoom=14&size=558x522&maptype=roadmap&key=${process.env.GOOGLE_MAP_KEY}`}
                />
              </div>
              <div className='w-full'>
                <div className='text-gray-eee text-xl font-bold'>
                  대전 유성구 궁동로 21 대전 팁스타운(TIPS TOWN)
                </div>
                <div className='mt-2 text-gray-eee text-lg mb-5'>
                  21, Gungdong-ro, Yuseong-gu, Daejeon, Republic of Korea
                </div>
                <Image
                  width='558'
                  height='522'
                  alt='google-map'
                  src='/img_map2.png'
                />
                {/* <Image
                  width='558'
                  height='522'
                  alt='google-map'
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=36.3631304,127.3447129&zoom=14&size=558x522&maptype=roadmap&key=${process.env.GOOGLE_MAP_KEY}`}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='seventh-section pt-[121px] pb-[92px] bg-slate-500 text-center bg-home-seventh bg-center bg-no-repeat'>
        <div className='text-white text-3xl'>IR, 창업, 제휴 및 협업 문의</div>
        <div className='mt-5 text-gray-eee text-xl'>
          리벤처스와 함께 성장하고 싶으신가요?
        </div>
        <div className='text-gray-eee text-xl'>
          혹은 리벤처스에 의뢰할 프로젝트가 있으신가요?
        </div>
        <div className='text-gray-eee text-xl'>
          리벤처스는 항상 열려 있습니다.
        </div>
        <Link href='/'>
          <a className='mt-7 inline-block py-5 px-36 bg-white text-2xl font-bold'>
            지원하기
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
