import Image from 'next/image';

const ScrollIndicator = () => {
  return (
    <>
      <div className='w-[24px] h-[302px]'>
        <Image
          src='/img_scroll.png'
          layout='fill'
          alt='scroll'
          objectFit='contain'
        />
      </div>
      <div className='absolute w-8 h-8 bottom-[68px] -left-1'>
        <Image
          src='/mouse.svg'
          layout='fill'
          alt='scroll'
          objectFit='contain'
        />
      </div>
    </>
  );
};

export default ScrollIndicator;
