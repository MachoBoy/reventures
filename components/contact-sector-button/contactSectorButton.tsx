import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
}

const ContactSectorButton = ({ name }: Props) => {
  const { register } = useFormContext();

  return (
    <label>
      <input
        {...register(`${name}`)}
        className='absolute w-full overflow-hidden hidden peer'
        type='checkbox'
      />
      <div className='inline-flex align-middle mt-3 px-8 py-3 h-11 text-base justify-center items-center mr-4 bg-[#0000001A] text-[#666666D9] peer-checked:bg-black peer-checked:text-white cursor-pointer sm:px-5 sm:py-[10px] sm:h-[30px] sm:text-[10px] sm:mr-[10px] sm:mt-2'>
        <span className='text-center block padding-y-[3px]'>{name}</span>
      </div>
    </label>
  );
};

export default ContactSectorButton;
