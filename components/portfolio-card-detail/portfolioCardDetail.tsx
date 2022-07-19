import Image from 'next/image';
import { PostType } from '../../data/portfolio-data';

interface Props {
  closeModal: Function;
  activePost: PostType;
}

// 포트폴리오 카드 클릭시 보여지는 기업 디테일 컴포넌트
const PortfolioCardDetail = ({ closeModal, activePost }: Props) => {
  console.log(activePost);
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
    <div className='relative px-20 py-14 bg-white'>
      <div className='absolute w-full flex justify-end -left-10 top-8'>
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
      <div className='flex flex-row items-center'>
        {logo ? (
          <div className='relative w-[190px] h-[190px] border-[1px] border-[#0000001A] border-solid bg-white flex items-center'>
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
          <div className='w-[190px] h-[190px] border-[1px] border-[#0000001A] border-solid bg-white flex justify-center items-center text-4xl'>
            {companyName}
          </div>
        )}
        <div className='flex flex-col ml-16'>
          <div className='font-semibold text-[#333333] text-5xl'>
            {companyName}
          </div>
          <div className='flex flex-row mt-6'>
            {stage ? (
              <div className='mr-[10px] inline-block px-2 py-1 h-[30px] border-[1px] border-solid border-[#333] text-sm bg-white align-middle'>
                {stage}
              </div>
            ) : null}
            <div className='inline-block px-2 py-1 h-[30px] bg-[#6D7278] text-[#FEFEFED9]'>
              {sector}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-9 divider w-full h-[1px] bg-[#979797] bg-opacity-40'></div>
      <p className='mt-5 text-2xl text-[#666666]'>{companyDesc}</p>
      <div className='flex flex-col mt-9'>
        <div className='flex flex-row'>
          <div className='text-[#6D7278] text-xl'>대표자</div>
          <div className='ml-14 text-[#666666] text-xl font-semibold'>
            {ceoName}
          </div>
        </div>
        <div className='mt-3 flex flex-row'>
          <div className='text-[#6D7278] text-xl'>소재지</div>
          <div className='ml-14 text-[#666666] text-xl font-semibold'>
            {location}
          </div>
        </div>
        <div className='mt-3 flex flex-row'>
          <div className='text-[#6D7278] text-xl'>설립일</div>
          <div className='ml-14 text-[#666666] text-xl font-semibold'>
            {foundDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCardDetail;
