import Image from 'next/image';
import { LogoType } from '../../data/portfolio-data';

interface Props {
  logo: LogoType | null;
  companyName: string | null;
}

const BrandBox = ({ logo, companyName }: Props) => {
  return (
    <div className='mb-6 w-[190px] h-[190px] bg-white border-[1px] border-solid border-[#0000001A] flex justify-center items-center'>
      {logo !== null ? (
        <div className='w-3/4 h-1/2 relative mx-auto'>
          <Image
            layout='fill'
            objectFit='contain'
            src={logo?.sourceUrl}
            alt='logo'
          />
        </div>
      ) : (
        <div className='mt-7 w-3/4 h-1/6 relative mx-auto text-5xl text-center'>
          {companyName}
        </div>
      )}
    </div>
  );
};

export default BrandBox;
