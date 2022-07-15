import Image from 'next/image';

interface Props {
  icon: string;
  title: string;
  desc: string;
}

const TipsApplyHow = ({ icon, title, desc }: Props) => {
  return (
    <div className='flex flex-row items-center last:mt-14'>
      <div className='w-[154px] h-[46px] uppercase bg-black text-white text-base font-semibold flex justify-center items-center'>
        <div className='mr-2'>
          <Image alt='homepage' width={14} height={13} src={icon} />
        </div>
        {title}
      </div>
      <div className='ml-7 text-[22px] text-[##3D3D3D] max-w-[542px] whitespace-pre-wrap indent-1'>
        {desc}
      </div>
    </div>
  );
};
export default TipsApplyHow;