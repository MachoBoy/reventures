import Image from 'next/image';
import { LogoType } from '../../data/portfolio-data';

interface Props {
  stage: string | null;
  logo: LogoType | null;
  companyName: string | null;
  sector: string | null;
  companyDesc: string | null;
  openModal: Function;
  index?: number;
}

const PortfolioCardMobile = ({
  stage,
  logo,
  companyName,
  sector,
  companyDesc,
  openModal,
  index,
}: Props) => {
  return (
    <div
      className='w-[150px] flex flex-col justify-center items-center mx-auto'
      onClick={() => openModal(index)}
    >
      <div className='relative w-full h-[150px] bg-white shadow-2xl p-[6px] flex justify-center items-center'>
        <div className='absolute top-[6px] left-[6px] inline-flex justify-center px-2 border-[1px] border-[#333333] border-solid text-sm'>
          {stage}
        </div>
        {logo !== null ? (
          <div className='w-11/12 h-2/6 relative mx-auto'>
            <Image
              layout='fill'
              objectFit='contain'
              src={logo?.sourceUrl}
              alt='logo'
            />
          </div>
        ) : (
          <div className='w-3/4 h-1/6 relative mx-auto text-3xl text-center'>
            {companyName}
          </div>
        )}
      </div>
      <div className='mt-5'>
        <div className='w-full text-left text-[18px] font-semibold text-[#333333]'>
          {companyName}
        </div>
        <p className='w-full max-w-[150px] text-base text-[#666666] text-left truncate'>
          {companyDesc}
        </p>
        {sector ? (
          <div className='mt-5 inline-block bg-[#6D7278] py-[6px] px-[10px] text-[#FEFEFED9] text-sm truncate'>
            {sector}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PortfolioCardMobile;
