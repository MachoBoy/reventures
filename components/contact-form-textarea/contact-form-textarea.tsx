import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  title?: string;
  name: string;
}

const ContactFormTextarea = ({ title, name }: Props) => {
  const { register } = useFormContext();
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='text-base text-[#333333] font-semibold'>{title}</div>
      <textarea
        {...register(`${name}`, {
          maxLength: 500,
        })}
        className='mt-5 w-full h-[257px] border-[1px] border-[#0000001A] p-4'
        placeholder='내용을 입력해주세요'
        onChange={(e) => setCount(e.target.value.length)}
      ></textarea>
      <div className='w-full text-right text-[#333333] text-sm'>
        {count} / 500
      </div>
    </>
  );
};

export default ContactFormTextarea;
