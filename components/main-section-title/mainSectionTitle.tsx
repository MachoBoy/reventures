interface Props {
  title: string;
  isDark: boolean;
}

const MainSectionTitle = ({ title, isDark }: Props) => {
  return (
    <div className='flex flex-col justify-center items-start lg:items-center'>
      <div
        className={`font-pretender text-4xl font-normal ${
          isDark ? 'text-white' : 'text-gray-40'
        } uppercase lg:text-center sm:text-[26px]`}
      >
        {title}
      </div>
      <div
        className={`mt-[22px] w-[117px] h-[5px] sm:mt-[14px] sm:w-[69px] sm:h-[2px] ${
          isDark ? 'bg-[#FFFFFF87]' : 'bg-[#00000087]'
        }`}
      ></div>
    </div>
  );
};

export default MainSectionTitle;
