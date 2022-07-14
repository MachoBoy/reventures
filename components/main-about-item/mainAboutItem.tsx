interface Props {
  icon: string;
  title: string;
  desc: string;
}

const MainAboutItem = ({ icon, title, desc }: Props) => {
  return (
    <div className='flex flex-row justify-between items-center max-w-[599px] mt-8'>
      <div className='circle w-36 h-36 rounded-full border-2 border-solid border-black'></div>
      <div className='flex flex-col'>
        <h6 className='text-gray-40 font-bold text-[26px] uppercase'>
          {title}
        </h6>
        <p className='max-w-[406px] text-gray-2e text-[26px] mt-[13.5px] leading-tight'>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default MainAboutItem;
