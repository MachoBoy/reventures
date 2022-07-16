interface Props {
  title: string;
}

const ContactFormTextarea = ({ title }: Props) => {
  return (
    <div className='w-full'>
      <div className='text-base text-[#333333] font-semibold'>{title}</div>
      <textarea
        className='mt-5 w-full h-[257px] border-[1px] border-[#0000001A] p-4'
        placeholder='내용을 입력해주세요'
      ></textarea>
    </div>
  );
};

export default ContactFormTextarea;
