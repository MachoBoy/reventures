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
    <>
      <div
        className={`w-full flex flex-row justify-between items-center mt-0 md:mt-4`}
      >
        <label className='w-[85px] block text-base text-[#333333] font-semibold before:content-["*"] before:text-red-500'>
          {label}
        </label>
        <input
          {...register(`${name}`, {
            required: true,
          })}
          className={`w-full ${
            isShort
              ? 'max-w-[320px] md:max-w-full'
              : 'max-w-[635px] md:max-w-full'
          } h-[46px] border-[1px] ${
            !error ? 'border-[#0000001A]' : 'border-red-500'
          }  pl-4`}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default ContactFormInput;
