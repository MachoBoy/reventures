import Image from 'next/image';
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
    <div className='flex flex-col'>
      <div className='text-3xl text-[#DBDBDB] font-medium'>{title}</div>
      <div className='mt-7 flex flex-col text-base text-[#DBDBDB]'>
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
