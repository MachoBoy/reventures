const PortfolioNotFound = () => {
  return (
    <div className='w-full h-full border-[1px] border-[#0000001A] flex justify-center items-center'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='bi bi-exclamation-triangle-fill'
          viewBox='0 0 16 16'
        >
          <path d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
        </svg>
      </div>
      <div className='text-[22px] text-[#3D3D3D] ml-4'>
        조건에 맞는 포트폴리오가 없습니다
      </div>
    </div>
  );
};

export default PortfolioNotFound;
