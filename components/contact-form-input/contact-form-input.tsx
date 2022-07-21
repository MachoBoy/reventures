import { useFormContext } from 'react-hook-form';

interface Props {
  label: string;
  placeholder: string;
  isShort: boolean;
  type: string;
  name: string;
  error: {} | undefined;
}

const ContactFormInput = ({
  label,
  placeholder,
  isShort,
  type,
  name,
  error,
}: Props) => {
  const { register } = useFormContext();
  return (
    <div className='flex flex-col'>
      <div
        className={`flex flex-row justify-between items-center ${
          isShort ? 'w-[400px]' : 'w-[708px]'
        }`}
      >
        <label className='text-base text-[#333333] font-semibold before:content-["*"] before:text-red-500'>
          {label}
        </label>
        <input
          {...register(`${name}`, {
            required: true,
          })}
          className={`${
            isShort ? 'w-[320px]' : 'w-[635px]'
          }  h-[46px] border-[1px] ${
            !error ? 'border-[#0000001A]' : 'border-red-500'
          }  pl-4`}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default ContactFormInput;
