import Image from 'next/image';
import { LogoType } from '../../data/portfolio-data';
import { useRouter } from 'next/router';

interface Props {
  stage: string | null;
  logo: LogoType | null;
  companyName: string | null;
  sector: string | null;
  companyDesc: string | null;
  openModal: Function;
  index?: number;
}

// 포트폴리오 카드: 기업의 간략한 정보를 보여주고 메인 / 포트폴리오 페이지에 사용되고 있는 컴포넌트
const PortfolioCard = ({
  stage,
  logo,
  companyName,
  sector,
  companyDesc,
  openModal,
  index,
}: Props) => {
  const router = useRouter();
  // console.log(router);
  return (
    <div className='my-9 flex justify-center'>
      <div
        className={`py-5 px-4 bg-white w-[363px] h-[455px] shadow-portfolio ${
          router.pathname === '/portfolio' ? 'cursor-pointer' : 'cursor-default'
        } `}
        onClick={() => openModal(index)}
      >
        {stage ? (
          <div className='tier inline-block px-2 pt-[6px] pb-2 border-[1px] border-solid border-[#333] text-sm'>
            {stage}
          </div>
        ) : (
          <div className='w-full h-[36px]'></div>
        )}
        {logo !== null ? (
          <div className='mt-7 w-3/4 h-1/6 relative mx-auto'>
            <Image
              layout='fill'
              objectFit='contain'
              src={logo?.sourceUrl}
              alt='logo'
            />
          </div>
        ) : (
          <div className='mt-7 w-3/4 h-1/6 relative mx-auto text-5xl text-center'>
            {companyName}
          </div>
        )}
        <div className='mt-12 divider w-full h-[1px] bg-[#979797] bg-opacity-40'></div>
        <h5 className='mt-8 text-[#333333] text-xl'>{companyName}</h5>
        <div className='mt-5 inline-block bg-[#6D7278] py-[6px] px-[10px] text-[#FEFEFED9] text-sm'>
          {sector}
        </div>
        <p className='mt-5 text-base text-[#666666]'>{companyDesc}</p>
      </div>
    </div>
  );
};
export default PortfolioCard;
