import Image from 'next/image';

interface Props {
  stage: string;
  logo: string;
  company: string;
  sector: string;
  desc: string;
}

const PortfolioCard = ({ stage, logo, company, sector, desc }: Props) => {
  return (
    <div className='my-9 mx-2'>
      <div className='py-5 px-4 bg-white w-[363px] h-[455px] shadow-portfolio'>
        <div className='tier inline-block px-2 pt-[6px] pb-2 border-[1px] border-solid border-[#333] text-sm'>
          {stage}
        </div>
        <div className='mt-7 w-3/4 h-1/6 relative mx-auto'>
          <Image layout='fill' objectFit='contain' src={logo} alt='logo' />
        </div>
        <div className='mt-12 divider w-full h-[1px] bg-[#979797] bg-opacity-40'></div>
        <h5 className='mt-8 text-[#333333] text-xl'>{company}</h5>
        <div className='mt-5 inline-block bg-[#6D7278] py-[6px] px-[10px] text-[#FEFEFED9] text-sm'>
          {sector}
        </div>
        <p className='mt-5 text-base text-[#666666]'>{desc}</p>
      </div>
    </div>
  );
};
export default PortfolioCard;
