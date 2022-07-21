import Image from 'next/image';

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className='absolute -top-16 right-6 text-2xl text-[#00000087]'
      onClick={onClick}
    >
      <div className='relative w-[24px] h-[23px]'>
        <Image layout='fill' src='/ico_left.png' alt='right' />
      </div>
    </button>
  );
};

export default PrevArrow;
