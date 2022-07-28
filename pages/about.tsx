import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import MainSectionTitle from '../components/main-section-title/mainSectionTitle';

const About = () => {
  return (
    <div className='w-full max-w-[1920px] mx-auto'>
      <Head>
        <title>RE:VENTURES - About</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width maximum-scale=1.0, shrink-to-fit=no, user-scalable=0'
        />
      </Head>
      <div className='about-top h-[479px] bg-about-top bg-center bg-no-repeat flex justify-center items-center sm:h-[330px] sm:items-start sm:pt-24'>
        <div className='flex flex-row justify-between w-full max-w-[1000px] mx-auto px-6 md:justify-center'>
          <div>
            <div className='text-7xl text-[#FFFFFF] font-semibold lg:text-6xl md:text-center sm:text-[46px]'>
              About
            </div>
            <div className='mt-5 text-4xl text-[#FEFEFE] lg:text-3xl md:text-center sm:text-[26px] sm:mt-[26px]'>
              벤처투자를 위한
            </div>
            <div className='inline-flex flex-row text-4xl text-[#FEFEFE] lg:text-3xl md:flex-col md:text-center sm:text-2xl'>
              <div>투자자와 스타트업의 파트너,</div>
              <div>리벤처스</div>
            </div>
          </div>
          <div className='flex justify-center items-center md:hidden'>
            <div className='font-bold text-white text-[130px] w-[206px] flex flex-row lg:text-8xl'>
              RE
              <div className='-mt-3 text-[130px] lg:text-8xl lg:-mt-2'>:</div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-20 w-full max-w-[1142px] mx-auto px-6 sm:pt-12'>
        <MainSectionTitle title='what we do' isDark={false} />
        <h3 className='mt-9 text-[32px] font-semibold text-[#3D3D3D] lg:text-2xl sm:text-[18px]'>
          더 나은 변화에 끊임없이 도전하는 창업가를 발굴합니다.
        </h3>
        <p className='mt-9 text-2xl font-light text-[#3D3D3D] lg:text-xl lg:mt-5 sm:text-base sm:mt-3'>
          리벤처스는 계속 도전하고자 하는 끊임없는 열정과 도전을 찾습니다.
          <br />
          투자사와 투자자를 넘어서 함께 고민하고 도전하는 열정에 산업계 및 각
          분야 전문가의 전문성과 경험을 기반으로 스타트업의 성장에 기여하고,
          외부의 시각을 통해 객관적인 방향을 제시하려고 합니다.
          <br />
          <br />
          리벤처스는 산업계 출신, EXIT경험이 있는 구성원과, 전문가 구성원의
          노하우와 각 산업계, 연구계 네트워크를 통한 기업발굴 및 성장을 지원하며
          창업가를 만나고 있으며, Company-Builder로서의 역할부터 초기 투자 및,
          전문성 있는 Pre-Series A, Series A, Series B 단계에 이르는 폭넓은
          분야의 스타트업과 함께 하고 있습니다.
        </p>
      </div>
      <div className='mt-16 w-full max-w-[1142px] mx-auto px-6 sm:mt-12'>
        <MainSectionTitle title='value add' isDark={false} />
        <h3 className='mt-9 text-[32px] font-semibold text-[#3D3D3D] lg:text-2xl sm:text-[18px]'>
          창업가의 성장에 기여하며, 가장 가까이서 지속하는 파트너가
          되고자합니다.
        </h3>
        <p className='mt-9 text-2xl font-light text-[#3D3D3D] lg:text-xl lg:mt-5 sm:text-base sm:mt-3'>
          초기 창업가에게 가장 필요한건 기업의 방향성을 끝까지 유지시킬 수 있는
          힘과 이를 지원할 수 있는 풍부한 네트워크입니다.
          <br />
          하지만 부족한 자원에 모든 것을 달성하기 어렵기 때문에 스타트업과
          산업에 대한 이해도가 높고, 지원이 가능한 파트너를 만나 시작하는 것이
          중요합니다.
          <br /> 리벤처스는 투자와 TIPS프로그램과 같은 역할에 더하여 창업가가
          확살하게 성장할 수 있는 길로 함께 가고자 합니다.
          <br />
          <br />
          스타트업에 지속적으로 찾아오는 많은 풍파를 이겨나갈 수 있는 파트너로
          리벤처스는 후속투자와 성장지원 그리고 네트워크연결 뿐만 아니라,
          패밀리사와 외부 패밀리사와의 연계 등 다양한 프로그램으로 스타트업을
          도우며 항상 다음을, 미래를 함께하고자 합니다.
        </p>
      </div>
      <div className='philosophy mt-12 bg-about-philosophy bg-center bg-no-repeat pt-16 pb-20 sm:pt-10 sm:pb-16'>
        <div className='w-full max-w-[1142px] mx-auto px-6'>
          <MainSectionTitle title='philosophy' isDark={true} />
          <div className='mt-8 text-[32px] font-semibold text-gray-eee lg:text-2xl sm:text-[18px]'>
            끊임없이 도전하는 모험가, 도전자,
            <br /> 실패도 두려워하지 않는 용기 그 시작을
            <br /> 함께하고자 노력을 아끼지 않는 사람들이 있습니다.
          </div>
          <div className='w-full max-w-[520px] mt-8 text-2xl font-light text-gray-eee lg:text-xl sm:text-base'>
            <p>
              리벤처스는 가능성 있는 혁신가들이
              <br /> 자신의 가치를 알아보는 파트너와 만나는 지점에서
              <br /> 더 큰 변화를 만들 수 있다고 믿습니다.
            </p>
            <p className='mt-9 sm:mt-4'>
              세상을 바꿀 혁신가들의 순수한 이념과 계속되는 도전이 활발하게
              이루어지는 사회를 꿈꿉니다.
            </p>
            <p className='mt-9 sm:mt-4'>
              투자자와 스타트업의 파트너, 리벤처스
              <br /> All of Starts up’s Partner, Reventures
            </p>
          </div>
        </div>
      </div>
      <div className='py-28 px-6 w-full sm:pt-12 sm:pb-16'>
        <div className='w-full max-w-[1142px] mx-auto'>
          <MainSectionTitle title='corporate identity' isDark={false} />
          <div className='mt-14 w-full flex flex-row gap-14 md:flex-col md:justify-center md:items-center sm:mt-8'>
            <div className='w-full max-w-[557px] flex flex-col gap-y-7 lg:gap-y-4 md:justify-center md:items-center sm:items-start sm:justify-start'>
              <div className='relative w-full'>
                <Image
                  layout='responsive'
                  width={557}
                  height={192}
                  src='/logo1.png'
                  alt='big-logo'
                />
              </div>
              <div className='w-full flex flex-row gap-x-7 md:items-center md:justify-center'>
                <div className='relative w-full max-w-[265px]'>
                  <Image
                    layout='responsive'
                    width={265}
                    height={140}
                    src='/logo2.png'
                    alt='small-logo'
                  />
                </div>
                <div className='relative w-full max-w-[265px]'>
                  <Image
                    layout='responsive'
                    width={265}
                    height={140}
                    src='/logo3.png'
                    alt='small-logo'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full max-w-[530px] text-[#3D3D3D] text-2xl lg:text-xl md:text-center xl:items-center sm:text-base'>
              <p>
                혁신가들의 순수한 이념과 계속되는 도전이 활발하게 지속될 수
                있도록 사회가 되는 것을 염원하는 (Re:)
              </p>
              <p className='mt-10 lg:mt-10 sm:mt-5'>
                그리고 혁신가들의 모험을 함께하기 위해 Venture(s)의 의미는
                파트너로서 멀리서 응원이 아닌 함께 성공을 향해 달리는
                Own-Onership-Partner가 되고자 합니다.
              </p>
              <Link href='https://reventures-vc.com/wp-content/uploads/2022/07/logo.zip'>
                <a className='mt-[82px] w-full max-w-[362px] h-[77px] font-medium text-2xl text-white flex justify-center items-center bg-black hover:bg-[#6D7278] transition-colors lg:mt-[27px] sm:h-[60px]'>
                  CI 다운로드
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
