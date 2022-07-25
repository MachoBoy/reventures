import Image from 'next/image';
interface Props {
  icon: string;
  title: string;
  desc: string;
}

const MainAboutItem = ({ icon, title, desc }: Props) => {
  return (
    <div className='flex flex-row justify-between items-center max-w-[599px] mt-8 md:flex-col'>
      <div className='circle w-36 h-36 rounded-full md:mx-auto md:w-20 md:h-20 sm:w-14 sm:h-14'>
        <Image
          src={icon}
          layout='responsive'
          width={144}
          height={144}
          alt='icon'
        />
      </div>
      <div className='flex flex-col pl-3 md:pl-0 md:mt-3'>
        <h6 className='text-gray-40 font-semibold text-[26px] uppercase md:text-center sm:text-xl'>
          {title}
        </h6>
        <p className='max-w-[406px] text-gray-2e text-xl mt-[13.5px] leading-tight md:text-center md:mt-2 sm:text-base'>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default MainAboutItem;
