import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import MainSectionTitle from '../components/main-section-title/mainSectionTitle';
// import BrandSlider from '../components/brand-slider/brandSlider';
import TipsApplyHow from '../components/tips-apply-how/tipsApplyHow';
// import BrandBox from '../components/brand-box/brandBox';
import { tipsApplyData, tipsCategoryData } from '../data/tips-data';
import Modal from '../components/modal/modal';
// import { portfolioData } from '../data/portfolio-data';

const Tips = () => {
  const [isModalOpen, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
    // document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModal(false);
    // document.body.style.overflow = 'unset';
  };
  return (
    <div className='w-full max-w-[1920px] mx-auto'>
      <Head>
        <title>RE:VENTURES - TIPS</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width maximum-scale=1.0, shrink-to-fit=no, user-scalable=0'
        />
      </Head>
      <div className='w-full h-[390px] bg-tips-top bg-center bg-no-repeat flex flex-col justify-center items-center px-6 sm:h-[330px] sm:items-start sm:pt-24'>
        <div className='w-full text-white text-7xl font-semibold lg:text-6xl text-center sm:text-[46px]'>
          TIPS
        </div>
        {/* <div className='mt-4 text-white text-4xl lg:text-3xl text-center sm:text-[26px] sm:mt-[26px]'>
          기술력을 갖춘 유망한 창업팀에게 과감한 창업 도전 기회를 제공
        </div> */}
      </div>
      <div className='w-full max-w-[1140px] pt-20 mx-auto px-6 sm:pt-12'>
        {/* image zoom modal */}
        <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
          <div className='z-20 absolute w-5/6 h-[500px] inset-0 m-auto overflow-x-auto bg-white'>
            <Image
              layout='fixed'
              width={1146}
              height={467}
              src='/img_table.png'
              alt='tips-table'
              quality={100}
            />
          </div>
        </Modal>
        <div className='w-full'>
          <MainSectionTitle title='tips program' isDark={false} />
          <div className='mt-14 flex flex-row justify-center items-center lg:flex-col'>
            <div className='relative w-full max-w-[354px]'>
              <Image
                layout='responsive'
                width={354}
                height={251}
                src='/img_tips1.png'
                alt='tips_stair'
              />
            </div>
            <div className='flex flex-col max-w-[700px] lg:mt-5'>
              <div className='text-[28px] text-[#3D3D3D] font-semibold text-center lg:text-2xl sm:text-[18px]'>
                TIPS 프로그램은 중소벤처기업부가 만든 민간투자 주도형 초기
                기술창업기업 지원 프로그램입니다.
              </div>
              <div className='mt-9 text-[28px] text-[#3D3D3D] font-semibold text-center lg:text-2xl sm:text-[18px] sm:mt-5'>
                리벤처스는 투자와 함께 R&D/사업화/글로벌 진출 지원을 통해 미래를
                선도할 창업기업을 집중 육성합니다.
              </div>

              <p className='mt-9 sm:mt-6 text-base sm:text-sm'>
                <span className='font-semibold'>지원조건 :&nbsp;</span>
                창업팀당 최대 10억언 내외(최장 3년 이내)
              </p>
              <p className='mt-2 ml-[72px] -indent-[72px] text-base sm:text-sm sm:indent-0 sm:ml-0'>
                <span className='font-semibold'>지원내용 :&nbsp;</span>
                엔젤투자(1억원) + 성공벤처인의 보육·맨토링 + R&D(5억) + 추가지원
                4억 <br />
                (창업자금 1억원, 엔젤매칭펀드 2억원, 해외마케팅 1억원)
              </p>
            </div>
          </div>
          <div className='relativ w-full max-w-[1146px] mt-10 sm:mt-6'>
            <Image
              layout='responsive'
              width={1146}
              height={466}
              src='/img_table.png'
              alt='tips-table'
            />
          </div>
          <button
            className='relative hidden w-[37px] h-[37px] mx-auto mt-4 lg:block'
            onClick={() => openModal()}
          >
            <Image
              layout='fill'
              objectFit='contain'
              alt='Magnifier'
              src='/btn_zoom.png'
            />
          </button>
        </div>
        {/* <div className='mt-24 w-full'>
          <MainSectionTitle title='tips 보육기업' isDark={false} />
          <div className='mt-7'>
            <BrandSlider>
              {portfolioData.map(({ logo }, index) => {
                return <BrandBox key={index} logo={logo} />;
              })}
            </BrandSlider>
          </div>
        </div> */}

        <div className='mt-24 w-full sm:mt-11'>
          <MainSectionTitle title='tips 지원하기' isDark={false} />
          <div className='mt-16 sm:mt-7'>
            {tipsApplyData.map(({ icon, title, desc, href }, index) => {
              return (
                <TipsApplyHow
                  key={index}
                  icon={icon}
                  title={title}
                  desc={desc}
                  href={href}
                />
              );
            })}
          </div>
          <div className='mt-10 w-full max-w-[1146px] relative'>
            <Image
              layout='responsive'
              width={1146}
              height={338}
              src='/img_tips2.png'
              alt='collabo'
            />
          </div>
        </div>

        <div className='w-full mt-[72px] mb-36'>
          <MainSectionTitle title='지원분야' isDark={false} />
          <div className='mt-20 grid grid-cols-2 gap-y-24 content-evenly justify-items-center sm:gap-y-4 sm:mt-8'>
            {tipsCategoryData.map(({ icon, title }, index) => {
              return (
                <div
                  key={index}
                  className='w-full max-w-[400px] text-center flex flex-col justify-center items-center sm:justify-start'
                >
                  <div className='relative w-full max-w-[130px] sm:max-w-[60px]'>
                    <Image
                      layout='responsive'
                      width={130}
                      height={130}
                      src={icon}
                      alt='icon'
                    />
                  </div>
                  <div className='mt-4 text-[32px] text-[#3D3D3D] font-medium lg:text-2xl sm:text-sm'>
                    {title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tips;
