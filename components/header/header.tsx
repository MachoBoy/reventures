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
      className={`header w-full h-[80px] fixed top-0 left-0 m-auto flex justify-center items-center z-50 ${
        scrollPosition > 0 ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div className='w-auto min-w-[1000px] m-auto flex justify-between'>
        <div className='header-logo'>
          <Link href='/'>
            <a>
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
        <nav className='menu-container flex w-full max-w-[670px]'>
          <ul className='menu w-full flex justify-evenly items-center'>
            {navData.map(({ title, link, children }, index) => {
              return (
                <li
                  key={index}
                  className='flex flex-col justify-center items-center'
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
                    className={`mt-3 w-[53px] h-[3px] ${
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
