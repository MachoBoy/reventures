interface Props {
  number: string;
  title: string;
  subtitle?: string[];
}

const MainInvestCount = ({ number, title, subtitle }: Props) => {
  return (
    <div className='flex items-center flex-col lg:mt-6 sm:mt-8 lg:first:col-span-3 sm:first:col-span-1'>
      <div className='number text-gray-eee text-[58px] lg:text-5xl sm:text[40px]'>
        {number}
      </div>
      <div className='title text-[33px] text-[#868686] sm:text-[26px]'>
        {title}
      </div>
      <div className='text-center'>
        {subtitle !== null
          ? subtitle?.map((text, index) => {
              return (
                <div className='text-gray-eee text-lg sm:text-base' key={index}>
                  {text}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default MainInvestCount;
