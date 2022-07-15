import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from 'framer-motion';
import { navData } from '../../pages/data/nav-data';

// Insight 메뉴 추가되면 max-w-[699px]
const Header = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollPosition(latest);
      //console.log('Page scroll: ', current);
    });
  }, [scrollY]);
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
                <li key={index}>
                  <Link href={link}>
                    <a className='text-lg text-[#959699] hover:text-white'>
                      {title}
                    </a>
                  </Link>
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
