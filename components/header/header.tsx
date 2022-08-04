import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from 'framer-motion';
import HamburgerMenu from '../hamburger-menu/hamburget-menu';
import MobileNav from '../mobile-nav/mobile-nav';
import { navData } from '../../data/nav-data';

interface Props {
  mobileNavOpen: boolean;
  openMobileNav: Function;
  closeMobileNav: Function;
}

// Insight 메뉴 추가되면 max-w-[699px]
const Header = ({ mobileNavOpen, openMobileNav, closeMobileNav }: Props) => {
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollPosition(latest);
      //console.log('Page scroll: ', current);
    });
  }, [scrollY]);

  return (
    <div
      className={`header w-full fixed top-0 left-0 m-auto flex justify-center items-center z-50 transition-[height] px-6 ${
        scrollPosition > 0 ? 'bg-black h-[60px]' : 'bg-transparent h-[80px]'
      } `}
    >
      <div className='w-full max-w-[1140px] m-auto flex justify-between items-center'>
        <div className='header-logo z-10'>
          <Link href='/'>
            <a className='mt-1 block' onClick={() => closeMobileNav()}>
              <Image
                layout='fixed'
                width={70}
                height={38}
                src='/logo_nav.png'
                alt='logo'
              />
            </a>
          </Link>
        </div>
        <nav className='menu-container flex w-full max-w-[470px] lg:hidden'>
          <ul className='menu w-full flex justify-between items-center'>
            {navData.map(({ title, link, children }, index) => {
              return (
                <li
                  key={index}
                  className='relative flex flex-col justify-center items-center'
                >
                  <Link href={link}>
                    <a
                      className={`text-lg font-semibold ${
                        link === router.pathname
                          ? 'text-white'
                          : 'text-[#959699]'
                      } hover:text-white`}
                    >
                      {title}
                    </a>
                  </Link>
                  <div
                    className={`absolute mt-10 w-[53px] h-[3px] ${
                      link === router.pathname
                        ? 'bg-[#707070]'
                        : 'bg-transparent'
                    }`}
                  ></div>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className='w-8 h-8 justify-center items-center hidden xl:hidden lg:flex z-10'>
          <HamburgerMenu
            open={mobileNavOpen}
            openMobileNav={openMobileNav}
            closeMobileNav={closeMobileNav}
          />
        </div>
      </div>
      <div
        className={`bg-black fixed top-0 w-1/3 md:w-2/3 sm:w-full h-screen px-6 pb-6 pt-20 ${
          mobileNavOpen ? 'right-0' : '-right-[999px] delay-500'
        } transition-[right] ease-in-out duration-200`}
      >
        <MobileNav closeMobileNav={closeMobileNav} />
      </div>
    </div>
  );
};

export default Header;
