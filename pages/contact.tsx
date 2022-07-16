import ContactFormHeader from '../components/contact-form-header/contactFormHeader';
import ContactFormInput from '../components/contact-form-input/contact-form-input';
import ContactFormTextarea from '../components/contact-form-textarea/contact-form-textarea';
import ContactFormCategory from '../components/contact-form-category/ContactFormCategory';
import { contactCategory } from './data/contact-data';

const Contact = () => {
  return (
    <div className='w-full max-w-[1920px] mx-auto'>
      <div className='w-full h-[390px] bg-contact-top flex flex-col justify-center items-center'>
        <div className='text-white text-7xl font-semibold'>Contact</div>
        <div className='mt-4 text-white text-4xl'>Apply</div>
      </div>
      <div className='w-full max-w-[1142px] mx-auto pt-14 pb-24'>
        <div className='text-center font-medium text-[32px]'>
          리벤처스와 함께 새로운 룰을 만들어갈 스타트업을 찾습니다!
        </div>
        <div className='mt-9'></div>
        <ContactFormHeader
          title='기본정보'
          subtitle='기본 정보를 입력해주세요'
        />
        <div className='mt-8 w-full'>
          <div className='flex justify-between'>
            <ContactFormInput
              label='이름'
              placeholder='대표자 성함을 입력해주세요'
              isShort={true}
            />

            <ContactFormInput
              label='기업명'
              placeholder='기업명을 입력해주세요'
              isShort={false}
            />
          </div>
          <div className='flex justify-between mt-8'>
            <ContactFormInput
              label='전화번호'
              placeholder='대표자 전화를 입력해주세요'
              isShort={true}
            />

            <ContactFormInput
              label='이메일'
              placeholder='대표자 이메일을 입력해주세요'
              isShort={false}
            />
          </div>
        </div>
        <div className='mt-11'>
          <ContactFormTextarea title='아이템 요약 (500자 이내)' />
        </div>
        <div className='mt-11'>
          <ContactFormHeader title='산업기술 분야' subtitle='' />
        </div>
        <div className='mt-7 mb-2 text-base text-[#333333] font-semibold'>
          산업기술 분야를 선택해주세요
        </div>
        <div className='w-full'>
          {contactCategory.map((category, index) => {
            return <ContactFormCategory key={index} name={category} />;
          })}
        </div>
        <div className='mt-12'>
          <ContactFormHeader
            title='세부 내용'
            subtitle='각 항목에 맞는 세부 내용을 기술해주세요.'
          />
        </div>
        <div className='mt-8'>
          <ContactFormTextarea title='해결하고 하는 문제에 대해 설명해주세요. (500자 이내)' />
        </div>
        <div className='mt-8'>
          <ContactFormTextarea title='그 문제를 해결한 방법에 대해 설명해주세요. (500자 이내)' />
        </div>
        <div className='mt-16'>
          <ContactFormHeader
            title='사업계획서 첨부'
            subtitle='자유양식으로 30MB 미만의 파일을 첨부해주세요.'
          />
        </div>
        <div className='mt-10'>
          <input
            className='w-full max-w-[602px] px-4 py-3 border-[1px] border-[#0000001A]'
            placeholder='파일을 업로드 해주세요'
          />
          <button className='ml-10 inline-block px-7 py-3 bg-[#000000] h-[46px] text-white'>
            파일 업로드
          </button>
        </div>
        <div className='mt-14'>
          <ContactFormHeader
            title='추가정보'
            subtitle='추가 정보가 있다면 기재해주세요, (500자 이내)'
          />
          <ContactFormTextarea title='' />
        </div>
        <div className='mt-6 flex flex-row items-center'>
          <input className='w-4 h-4 border-[#00000040]' type='checkbox' />
          <label className='ml-2 text-[#666666] text-sm'>
            개인정보 수집 및 이메일 수신에 동의합니다.
          </label>
        </div>

        <button className='mx-auto mt-16 w-[362px] h-[77px] flex justify-center items-center bg-black text-white text-2xl'>
          제출하기
        </button>
      </div>
    </div>
  );
};

export default Contact;
