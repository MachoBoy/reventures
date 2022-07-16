interface Props {
  label: string;
  placeholder: string;
  isShort: boolean;
}

const ContactFormInput = ({ label, placeholder, isShort }: Props) => {
  return (
    <div
      className={`flex flex-row justify-between items-center ${
        isShort ? 'w-[400px]' : 'w-[708px]'
      }`}
    >
      <label className='text-base text-[#333333] font-semibold'>{label}</label>
      <input
        className={`${
          isShort ? 'w-[320px]' : 'w-[635px]'
        }  h-[46px] border-[1px] border-[#0000001A] pl-4`}
        // className='w-full h-[46px] border-[1px] border-[#0000001A] pl-4'
        type='text'
        placeholder={placeholder}
      />
    </div>
  );
};

export default ContactFormInput;
