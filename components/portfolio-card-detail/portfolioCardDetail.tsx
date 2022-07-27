import Image from 'next/image';
import { PostType } from '../../data/portfolio-data';

interface Props {
  closeModal: Function;
  activePost: PostType;
}

// 포트폴리오 카드 클릭시 보여지는 기업 디테일 컴포넌트
const PortfolioCardDetail = ({ closeModal, activePost }: Props) => {
  // console.log(activePost);
  const {
    ceoName,
    companyDesc,
    companyName,
    foundDate,
    location,
    logo,
    stage,
    sector,
  } = activePost;
  return (
    <div className='w-full max-w-[1060px] h-auto bg-white sm:w-full sm:h-screen'>
      <div className='absolute w-full flex justify-end -left-10 top-8 sm:-left-5 sm:top-4'>
        <button onClick={() => closeModal()}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='31'
            height='31'
            fill='currentColor'
            className='bi bi-x-lg'
            viewBox='0 0 16 16'
          >
            <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
          </svg>
        </button>
      </div>
      <div className='flex flex-row items-center sm:flex-col'>
        {logo ? (
          <div className='relative w-[190px] h-[190px] border-[1px] border-[#0000001A] border-solid bg-white flex items-center sm:w-[160px] sm:h-[160px]'>
            <div className='relative mx-auto w-3/4 h-1/2'>
              <Image
                layout='fill'
                objectFit='contain'
                src={logo.sourceUrl}
                alt='logo'
              />
            </div>
          </div>
        ) : (
          <div className='w-[190px] h-[190px] border-[1px] border-[#0000001A] border-solid bg-white flex justify-center items-center text-4xl sm:w-[160px] sm:h-[160px] sm:text-2xl'>
            {companyName}
          </div>
        )}
        <div className='flex flex-col ml-16 sm:ml-0'>
          <div className='font-semibold text-[#333333] text-5xl sm:text-3xl sm:text-center sm:mt-4'>
            {companyName}
          </div>
          <div className='flex flex-row mt-6 sm:mx-auto'>
            {stage ? (
              <div className='mr-[10px] inline-block px-2 py-1 h-[30px] border-[1px] border-solid border-[#333] text-sm bg-white align-middle'>
                {stage}
              </div>
            ) : null}
            {sector ? (
              <div className='inline-block px-2 py-1 h-[30px] bg-[#6D7278] text-[#FEFEFED9] text-sm'>
                {sector}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className='mt-9 divider w-full h-[1px] bg-[#979797] bg-opacity-40'></div>
      <p className='mt-5 text-2xl text-[#666666] sm:text-base sm:text-center'>
        {companyDesc}
      </p>
      <div className='flex flex-col mt-9'>
        <div className='flex flex-row'>
          <div className='text-[#6D7278] text-xl sm:text-sm sm:min-w-[37px]'>
            대표자
          </div>
          <div className='ml-14 text-[#666666] text-xl font-semibold sm:text-sm'>
            {ceoName}
          </div>
        </div>
        <div className='mt-3 flex flex-row'>
          <div className='text-[#6D7278] text-xl sm:text-sm sm:min-w-[37px]'>
            소재지
          </div>
          <div className=' ml-14 text-[#666666] text-xl font-semibold sm:text-sm'>
            {location}
          </div>
        </div>
        <div className='mt-3 flex flex-row'>
          <div className='text-[#6D7278] text-xl sm:text-sm sm:min-w-[37px]'>
            설립일
          </div>
          <div className='ml-14 text-[#666666] text-xl font-semibold sm:text-sm'>
            {foundDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCardDetail;
