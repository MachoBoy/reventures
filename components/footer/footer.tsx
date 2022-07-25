import Image from 'next/image';
import Link from 'next/link';
import FooterInfo from '../footer-info/footerInfo';
import AllRightsReserve from '../all-rights-reserve/allRightsReserve';
import { footerData } from '../../data/footer-data';

const Footer = () => {
  return (
    <div className='w-full max-w-[1920px] overflow-hidden mx-auto'>
      <div className='w-full max-w-[1920px] mx-auto flex flex-col bg-[#222222] bg-footer-building bg-bottom bg-no-repeat pb-32 sm:bg-none sm:pb-10'>
        <div className='relative w-full max-w-[1093px] py-12 px-6 sm:py-9 sm:text-center'>
          <Image
            layout='fixed'
            src='/logo_sm.png'
            width={194}
            height={21}
            alt='logo'
          />
        </div>
        <div className='w-full h-[1px] bg-[#4B4B4B]'></div>
        <div className='mt-10 w-full max-w-[1093px] mx-auto grid grid-cols-3 px-6 sm:grid-cols-1'>
          {footerData.map(
            ({ title, desc1, desc2, desc3, desc4, desc5 }, index) => {
              return (
                <FooterInfo
                  key={index}
                  title={title}
                  desc1={desc1}
                  desc2={desc2}
                  desc3={desc3}
                  desc4={desc4}
                  desc5={desc5}
                />
              );
            }
          )}
        </div>
      </div>
      <div className='w-full max-w-[1920px] py-6 bg-black flex justify-center mx-auto px-6 sm:py-4'>
        <div className='w-full max-w-[1142px] text-base text-[#6D7278] flex justify-between sm:flex-col sm:justify-center sm:items-center sm:text-[14px]'>
          <div className='sm:mb-2'>
            Connect with us&nbsp;
            <Link href='mailto: reventuresad@reventures.co.kr'>
              <a className='underline'>Email</a>
            </Link>
          </div>
          <AllRightsReserve />
        </div>
      </div>
    </div>
  );
};

export default Footer;
