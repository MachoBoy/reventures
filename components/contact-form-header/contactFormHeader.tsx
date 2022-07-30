interface Props {
  title: string;
  subtitle: string;
}

const ContactFormHeader = ({ title, subtitle }: Props) => {
  return (
    <div className='w-full'>
      <div className='flex flex-row items-end md:flex-col md:items-start'>
        <div className='text-3xl text-[#333333] font-semibold lg:text-2xl md:text-xl'>
          {title}
        </div>
        <div className='ml-4 text-[14px] text-[#666666] md:ml-0'>
          {subtitle}
        </div>
      </div>
      <div className='mt-3 w-full h-[1px] bg-[#0000001A]'></div>
    </div>
  );
};

export default ContactFormHeader;
