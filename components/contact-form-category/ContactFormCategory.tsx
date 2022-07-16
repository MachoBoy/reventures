interface Props {
  name: string;
}

const ContactFormCategory = ({ name }: Props) => {
  return (
    <button className='inline-block mt-3 px-7 py-3 h-11 mr-4 bg-[#0000001A] text-[#666666D9]'>
      {name}
    </button>
  );
};

export default ContactFormCategory;
