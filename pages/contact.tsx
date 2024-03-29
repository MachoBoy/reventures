import Head from 'next/head';
import { useRef, MouseEvent, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { client } from '../lib/apollo';
import ContactFormHeader from '../components/contact-form-header/contactFormHeader';
import ContactFormInput from '../components/contact-form-input/contact-form-input';
import ContactFormTextarea from '../components/contact-form-textarea/contact-form-textarea';
import ContactSectorButton from '../components/contact-sector-button/contactSectorButton';
import { GET_PORTFOLIO_CATEGORIES } from '../lib/queries/portfolio/get-portfolio-categories';
import { sendMail } from '../lib/mutations/sendMail';

const Contact = ({ categories }: any) => {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [sendEmailLoading, setSendEmailLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const methods = useForm({
    defaultValues: {
      name: '',
      companyName: '',
      phoneNumber: '',
      email: '',
      itemSummary: '',
      issue: '',
      issueHow: '',
      addtionalInfo: '',
      agreement: false,
    },
  });

  const handleInput = async (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    /* If file is not selected, then show alert message */
    if (!inputFileRef.current?.files?.length) {
      alert('파일을 선택해주세요');
      return;
    }

    setUploadLoading(true);

    /* Add files to FormData */
    const formData = new FormData();
    Object.values(inputFileRef.current.files).forEach((file) => {
      formData.append('file', file);
    });

    /* Send request to our api route */
    const response = await fetch(
      //'http://cmsreventures.local/wp-json/wp/v2/media',
      `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/media`,
      //'/api/upload',
      {
        method: 'POST',
        headers: {
          Authorization:
            'Basic ' +
            window.btoa(
              `${process.env.NEXT_PUBLIC_WP_USERNAME}:${process.env.NEXT_PUBLIC_WP_PASSWORD}`
            ),
          //'Basic ' + window.btoa('admin:123123'),
        },
        body: formData,
      }
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));

    console.log(response);

    if (response.data === null) {
      setUploadLoading(false);
      return alert('오류');
    }

    if (response.source_url) {
      // console.log('소스유알엘');
      alert('파일 업로드가 완료되었습니다');
      setFileUrl(response.source_url);
    }

    setUploadLoading(false);
    // const body = (await response.json()) as {
    //   status: 'ok' | 'fail';
    //   message: string;
    // };

    // alert(body.message);

    // if (body.status === 'ok') {
    //   inputFileRef.current.value = '';
    //   // Do some stuff on successfully upload
    // } else {
    //   // Do some stuff on error
    // }
  };

  const getSelectedSector = (data: any) => {
    let selectedSector = [];
    for (var category of categories) {
      for (var key in data) {
        if (category.name === key && data[key]) {
          selectedSector.push(key);
        }
      }
    }
    return selectedSector;
  };

  const onSubmit = async (data: any) => {
    setSendEmailLoading(true);
    //console.log('onSubmit', data);
    const selectedSector = getSelectedSector(data);
    //console.log(selectedSector);
    // we'll fill this in in a moment
    // evt.preventDefault();
    const subject = `사업계획서: ${data.companyName}/${data.name}`;

    //console.log(subject);
    const emailContent = `
      <h2><strong>대표자</strong>: ${data.name}</h2>
      <h2><strong>기업명</strong>: ${data.companyName}</h2>
      <h2><strong>전화번호</strong>: ${data.phoneNumber}</h2>
      <h2><strong>이메일</strong>: ${data.email}</h2>
      <br/>
      <strong><h3>1. 아이템 요약</h3></strong><br />
      <p>${data.itemSummary}</p><br /><br />

      <strong><h3>2. 산업기술분야</h3></strong>
      ${selectedSector.toString()}
      <br /><br />

      <strong><h3>3. 세부내용</h3></strong>
      <h4>해결하고 하는 문제에 대해 설명해 주세요.</h4>
      <p>${data.issue}</p>
      <br />
      <h4>그 문제를 해결한 방법에 대해 설명해주세요.</h4>
      <p>${data.issueHow}</p>
      <br /><br />

      <strong><h3>4. 추가정보</h3></strong>
      <p>${data.addtionalInfo}</p>

      <strong><h3>5. 사업계획서 첨부파일</h3></strong>
      <p>${fileUrl}</p>
    `;

    // console.log(emailContent);
    const response = await sendMail(subject, emailContent);

    if (response.sent) {
      // email was sent successfully!
      alert('메일을 성공적으로 보냈습니다. 감사합니다.');
      // router.push('/contact/thanks');
    }
    setSendEmailLoading(false);
  };
  const onError = (errors: any) => {
    console.log(errors);
  };
  return (
    <div className='w-full max-w-[1920px] mx-auto'>
      <Head>
        <title>RE:VENTURES - Contact</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width maximum-scale=1.0, shrink-to-fit=no, user-scalable=0'
        />
      </Head>
      <div className='w-full h-[390px] bg-contact-top flex flex-col justify-center items-center sm:h-[330px] sm:items-start'>
        <div className='w-full text-center text-white text-7xl font-semibold lg:text-6xl md:text-center sm:text-[46px]'>
          Contact
        </div>
        <div className='w-full mt-4 text-center text-white text-4xl lg:text-3xl md:text-center sm:text-[26px]'>
          Apply
        </div>
      </div>
      <div className='w-full max-w-[1190px] mx-auto pt-14 pb-24 px-6 sm:pb-[75px]'>
        <div className='mt-9'></div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
            <ContactFormHeader
              title='기본정보'
              subtitle='기본 정보를 입력해주세요'
            />
            <div className='mt-8 w-full'>
              <div className='w-full flex justify-between flex-row md:flex-col'>
                <div className='w-full max-w-[398px] md:max-w-full'>
                  <ContactFormInput
                    label='이름'
                    placeholder='대표자 성함을 입력해주세요'
                    isShort={true}
                    type='text'
                    name='name'
                    error={methods.formState.errors.name}
                  />
                </div>
                <div className='w-full max-w-[708px] md:max-w-full ml-2 md:ml-0'>
                  <ContactFormInput
                    label='기업명'
                    placeholder='기업명을 입력해주세요'
                    isShort={false}
                    type='text'
                    name='companyName'
                    error={methods.formState.errors.companyName}
                  />
                </div>
              </div>
              <div className='flex justify-between mt-8 flex-row md:flex-col md:flex-co md:mt-0'>
                <div className='w-full max-w-[398px] md:max-w-full'>
                  <ContactFormInput
                    label='전화번호'
                    placeholder='대표자 전화를 입력해주세요'
                    isShort={true}
                    type='text'
                    name='phoneNumber'
                    error={methods.formState.errors.phoneNumber}
                  />
                </div>
                <div className='w-full max-w-[708px] md:max-w-full ml-2 md:ml-0'>
                  <ContactFormInput
                    label='이메일'
                    placeholder='대표자 이메일을 입력해주세요'
                    isShort={false}
                    type='email'
                    name='email'
                    error={methods.formState.errors.email}
                  />
                </div>
              </div>
            </div>
            <div className='mt-11'>
              <ContactFormTextarea
                title='아이템 요약 (500자 이내)'
                name='itemSummary'
              />
            </div>

            <div className='mt-11'>
              <ContactFormHeader title='산업기술 분야' subtitle='' />
            </div>
            <div className='mt-7 mb-2 text-base text-[#333333] font-semibold after:content-["*"] after:text-red-500'>
              산업기술 분야를 선택해주세요
            </div>
            <div className='w-full'>
              {categories.map(({ name }: any, index: number) => (
                <ContactSectorButton key={index} name={name} />
              ))}
            </div>
            <div className='mt-12'>
              <ContactFormHeader
                title='세부 내용'
                subtitle='각 항목에 맞는 세부 내용을 기술해주세요.'
              />
            </div>
            <div className='mt-8'>
              <ContactFormTextarea
                title='해결하고 하는 문제에 대해 설명해주세요. (500자 이내)'
                name='issue'
              />
            </div>
            <div className='mt-8'>
              <ContactFormTextarea
                title='그 문제를 해결한 방법에 대해 설명해주세요. (500자 이내)'
                name='issueHow'
              />
            </div>
            <div className='mt-16'>
              <ContactFormHeader
                title='사업계획서 첨부'
                subtitle='자유양식으로 30MB 미만의 파일을 첨부해주세요.'
              />
            </div>
            <div className='w-full mt-10 flex flex-row sm:flex-col'>
              <input
                type='file'
                className='w-full max-w-[602px] px-4 py-3 border-[1px] border-[#0000001A]'
                placeholder='파일을 업로드 해주세요'
                ref={inputFileRef}
              />
              {!uploadLoading ? (
                <input
                  type='submit'
                  onClick={handleInput}
                  value='파일업로드'
                  className='ml-3 inline-block h-[56px] px-7 py-3 text-white cursor-pointer bg-black hover:bg-[#6D7278] transition-colors sm:ml-0 sm:mt-4'
                />
              ) : (
                <div className='ml-9 w-[125px] h-[56px] px-7 py-3 bg-[#000000] text-white flex justify-center items-center sm:w-full sm:ml-0 sm:mt-4'>
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='90px'
                      height='90px'
                      viewBox='0 0 100 100'
                    >
                      <path
                        d='M 50,50 L 33,60.5 a 20 20 -210 1 1 34,0 z'
                        fill='#fff'
                      >
                        <animateTransform
                          attributeName='transform'
                          type='rotate'
                          from='0 50 50'
                          to='360 50 50'
                          dur='1.2s'
                          repeatCount='indefinite'
                        />
                      </path>
                      <circle cx='50' cy='50' r='16' fill='#000'></circle>
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className='mt-14'>
              <ContactFormHeader
                title='추가정보'
                subtitle='추가 정보가 있다면 기재해주세요, (500자 이내)'
              />
              <ContactFormTextarea name='addtionalInfo' />
            </div>
            <div className='mt-6 flex flex-row items-center'>
              <input
                {...methods.register('agreement', { required: true })}
                className='w-4 h-4 border-[#00000040]'
                type='checkbox'
              />
              <label className='ml-2 text-[#666666] text-sm before:content-["*"] before:text-red-500'>
                개인정보 수집 및 이메일 수신에 동의합니다.
              </label>
            </div>

            {!sendEmailLoading ? (
              <input
                type='submit'
                className='mx-auto mt-16 w-[362px] h-[77px] flex justify-center items-center text-white text-2xl cursor-pointer bg-black hover:bg-[#6D7278] transition-colors sm:w-full'
                value='제출하기'
              />
            ) : (
              <div className='mx-auto mt-16 w-[362px] h-[77px] flex justify-center items-center bg-black sm:w-full sm:mt-16'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='90px'
                    height='90px'
                    viewBox='0 0 100 100'
                  >
                    <path
                      d='M 50,50 L 33,60.5 a 20 20 -210 1 1 34,0 z'
                      fill='#fff'
                    >
                      <animateTransform
                        attributeName='transform'
                        type='rotate'
                        from='0 50 50'
                        to='360 50 50'
                        dur='1.2s'
                        repeatCount='indefinite'
                      />
                    </path>
                    <circle cx='50' cy='50' r='16' fill='#000'></circle>
                  </svg>
                </div>
              </div>
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Contact;

export async function getStaticProps() {
  const categoriesResponse = await client.query({
    query: GET_PORTFOLIO_CATEGORIES,
  });

  const categories = categoriesResponse?.data?.categories?.nodes
    .filter((category: any) => category.name !== 'portfolio')
    .sort((a: any, b: any) => a.categoryId - b.categoryId);

  return {
    props: {
      categories,
    },
  };
}
