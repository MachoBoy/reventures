const MainAboutItem = () => {
  return (
    <div className='flex flex-row justify-between items-center max-w-[599px]'>
      <div className='circle w-36 h-36 rounded-full border-2 border-solid border-black'></div>
      <div className='flex flex-col'>
        <h6 className='text-gray-40 font-bold text-[26px] uppercase'>
          what we do
        </h6>
        <p className='max-w-[406px] text-gray-2e text-[26px] mt-[13.5px]'>
          유망한 창업팀에서 성장 단계의 스타트업까지, Seed ~ SeriesB 단계의
          기업에 집중적으로 투자합니다.
        </p>
      </div>
    </div>
  );
};

export default MainAboutItem;
