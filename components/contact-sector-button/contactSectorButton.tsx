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
      <div className='inline-block align-middle mt-3 px-8 py-3 h-11 mr-4 bg-[#0000001A] text-[#666666D9] peer-checked:bg-black peer-checked:text-white cursor-pointer'>
        <span className='text-center block padding-y-[3px]'>{name}</span>
      </div>
    </label>
  );
};

export default ContactSectorButton;
