import Image from 'next/image';
import MainSectionTitle from '../components/main-section-title/mainSectionTitle';
import BrandSlider from '../components/brand-slider/brandSlider';
import TipsApplyHow from '../components/tips-apply-how/tipsApplyHow';
import BrandBox from '../components/brand-box/brandBox';
import { tipsApplyData, tipsCategoryData } from '../data/tips-data';
import { portfolioData } from '../data/portfolio-data';

const Tips = () => {
  return (
    <div className='w-full max-w-[1920px] mx-auto'>
      <div className='w-full h-[390px] bg-tips-top flex flex-col justify-center items-center'>
        <div className='text-white text-7xl font-semibold'>TIPS</div>
        <div className='mt-4 text-white text-4xl'>
          기술력을 갖춘 유망한 창업팀에게 과감한 창업 도전 기회를 제공
        </div>
      </div>
      <div className='w-full max-w-[1140px] pt-20 mx-auto'>
        <div className='w-full'>
          <MainSectionTitle title='tips program' isDark={false} />
          <div className='flex flex-row mt-14'>
            <div>
              <Image
                width={407}
                height={236}
                src='/img_tips1.png'
                alt='tips_stair'
              />
            </div>
            <div className='flex flex-col max-w-[700px]'>
              <div className='text-[28px] text-[#3D3D3D] font-semibold text-center'>
                TIPS 프로그램은 중소벤처기업부가 만든 민간투자 주도형 초기
                기술창업기업 지원 프로그램입니다.
              </div>
              <div className='mt-9 text-[28px] text-[#3D3D3D] font-semibold text-center'>
                리벤처스는 투자와 함께 R&D/사업화/글로벌 진출 지원을 통해 미래를
                선도할 창업기업을 집중 육성합니다.
              </div>

              <p className='mt-9'>
                <span className='font-semibold'>지원조건 :&nbsp;</span>
                창업팀당 최대 10억언 내외(최장 3년 이내)
              </p>
              <p className='mt-2 ml-[72px] -indent-[72px]'>
                <span className='font-semibold'>지원내용 :&nbsp;</span>{' '}
                엔젤투자(1억원) + 성공벤처인의 보육·맨토링 + R&D(5억) + 추가지원
                4억 <br />
                (창업자금 1억원, 엔젤매칭펀드 2억원, 해외마케팅 1억원)
              </p>
            </div>
          </div>
          <div className='w-full mt-10'>
            <Image
              layout='responsive'
              width={1146}
              height={466}
              src='/img_table.png'
              alt='tips-table'
            />
          </div>
        </div>
        <div className='mt-24 w-full'>
          <MainSectionTitle title='tips 보육기업' isDark={false} />
          <div className='mt-7'>
            <BrandSlider>
              {portfolioData.map(({ logo }, index) => {
                return <BrandBox key={index} logo={logo} />;
              })}
            </BrandSlider>
          </div>
        </div>

        <div className='mt-24 w-full'>
          <MainSectionTitle title='tips 지원하기' isDark={false} />
          <div className='mt-16'>
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
          <div className='mt-10'>
            <Image
              layout='responsive'
              width={1142}
              height={338}
              src='/img_tips2.png'
              alt='collabo'
            />
          </div>
        </div>

        <div className='w-full mt-[72px] mb-36'>
          <MainSectionTitle title='지원분야' isDark={false} />
          <div className='mt-20 grid grid-cols-2 gap-y-24 content-evenly justify-items-center'>
            {tipsCategoryData.map(({ icon, title }, index) => {
              return (
                <div key={index} className='w-full text-center'>
                  <Image
                    layout='fixed'
                    width={130}
                    height={130}
                    src={icon}
                    alt='icon'
                  />
                  <div className='mt-4 text-[32px] text-[#3D3D3D] font-medium'>
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
