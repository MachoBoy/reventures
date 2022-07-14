import Image from 'next/image';

const PortfolioCard = () => {
  return (
    <div className='py-5 px-4 bg-white w-[363px] h-[455px] shadow-xl'>
      <div className='tier inline-block px-2 pt-[6px] pb-2 border-[1px] border-solid border-[#333] text-sm'>
        Pre-A
      </div>
      <div></div>
      <div className='divider w-full h-[1px] bg-[#979797] bg-opacity-40'></div>
      <h5 className='mt-8 text-[#333333] text-xl'>㈜HN노바텍</h5>
      <div className='mt-5 inline-block bg-[#6D7278] py-[6px] px-[10px] text-[#FEFEFED9] text-sm'>
        Food-Tech
      </div>
      <p className='mt-5 text-base text-[#666666]'>
        해조류 추출 헴분자('아미노산 복합체'(ACOM-S)) 기반 대체육류 식품개발
      </p>
    </div>
  );
};
export default PortfolioCard;
