import Link from 'next/link';
import MainSectionTitle from '../../components/main-section-title/mainSectionTitle';
import MainAboutItem from '../../components/main-about-item/mainAboutItem';
import { aboutData } from './home-data';

const Home = () => {
  return (
    <div className='w-full'>
      <div className='top-section h-[867px] bg-black z-10'></div>
      <div className='second-section m-auto flex justify-center items-center'>
        <div className='about-left relative w-full max-w-[710px] h-[845px]'>
          <div className='block w-full h-full shadow-2xl absolute inset-0 p-14 z-20 bg-white -mt-11'>
            <MainSectionTitle />
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
      <div className='third-section'></div>
    </div>
  );
};

export default Home;
