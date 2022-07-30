interface Props {
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  desc5: string;
}
const FooterInfo = ({ title, desc1, desc2, desc3, desc4, desc5 }: Props) => {
  return (
    <div className='flex flex-col mx-3 first:ml-0 last:mr-0 sm:mx-0 sm:mt-7'>
      <div className='text-3xl text-[#DBDBDB] font-medium md:text-2xl sm:text-sm sm:font-semibold'>
        {title}
      </div>
      <div className='mt-7 flex flex-col justify-center text-base text-[#DBDBDB] lg:justify-between lg:text-sm sm:mt-4'>
        <span>{desc1}</span>
        <span className='mt-1'>{desc2}</span>
        <span className={`${desc3 ? 'mt-1' : 'mt-7'}`}>{desc3}</span>
        <span className='mt-1'>{desc4}</span>
        <span className='mt-1'>{desc5}</span>
      </div>
    </div>
  );
};

export default FooterInfo;
