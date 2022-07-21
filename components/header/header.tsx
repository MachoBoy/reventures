import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from 'framer-motion';
import { navData } from '../../data/nav-data';

// Insight 메뉴 추가되면 max-w-[699px]
const Header = () => {
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollPosition(latest);
      //console.log('Page scroll: ', current);
    });
  }, [scrollY]);

  //console.log(router);
  return (
    <div
      className={`header w-full fixed top-0 left-0 m-auto flex justify-center items-center z-50 ${
        scrollPosition > 0 ? 'bg-black  h-[60px]' : 'bg-transparent h-[80px]'
      } transition-[height]`}
    >
      <div className='w-auto min-w-[1140px] m-auto flex justify-between'>
        <div className='header-logo'>
          <Link href='/'>
            <a className='mt-1 block'>
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
        <nav className='menu-container flex w-full max-w-[600px]'>
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
      </div>
    </div>
  );
};

export default Header;
