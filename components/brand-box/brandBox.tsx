import Image from 'next/image';

interface Props {
  logo: string;
}

const BrandBox = ({ logo }: Props) => {
  return (
    <div className='w-[190px] h-[190px] bg-white border-[1px] border-solid border-[#0000001A] flex justify-center items-center'>
      <div className='w-3/4 h-1/2 relative mx-auto'>
        <Image layout='fill' objectFit='contain' src={logo} alt='logo' />
      </div>
    </div>
  );
};

export default BrandBox;
