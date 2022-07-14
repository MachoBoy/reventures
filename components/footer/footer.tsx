import Image from 'next/image';
import Link from 'next/link';
import FooterInfo from '../footer-info/footerInfo';
import { footerData } from './footer-data';

const Footer = () => {
  const year = new Date().getFullYear();
  // console.log(year);
  return (
    <div>
      <div className='w-full flex flex-col bg-[#222222] pb-32'>
        <div className='w-full py-12'></div>
        <div className='w-full h-[1px] bg-[#4B4B4B]'></div>
        <div className='mt-10 w-full max-w-[1093px] flex flex-row justify-between mx-auto'>
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
      <div className='w-full py-6 bg-black flex justify-center'>
        <div className='w-full max-w-[1142px] text-[#6D7278] flex justify-between'>
          <div className=''>
            Connect with us&nbsp;
            <Link href='ddd'>
              <a className='underline'>Email</a>
            </Link>
          </div>
          <div>© {year} Reventures Co.Ltd, All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
