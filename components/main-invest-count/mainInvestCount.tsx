interface Props {
  number: string;
  title: string;
  subtitle?: string[];
}

const MainInvestCount = ({ number, title, subtitle }: Props) => {
  return (
    <div className='flex items-center flex-col'>
      <div className='number text-gray-eee text-[58px]'>{number}</div>
      <div className='title text-[33px] text-[#868686]'>{title}</div>
      <div className='text-center'>
        {subtitle !== null
          ? subtitle?.map((text, index) => {
              return (
                <div className='text-gray-eee text-lg' key={index}>
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
