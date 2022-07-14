import Image from 'next/image';
import Link from 'next/link';

interface Nav {
  title: string;
  link: string;
  children?: NavChildren[] | undefined;
}

interface NavChildren {
  title: string;
  link: string;
}

const navData: Nav[] = [
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'TIPS',
    link: '/tips',
  },
  {
    title: 'Team',
    link: '/team',
  },
  {
    title: 'Portfolio',
    link: '/portfolio',
  },
  {
    title: 'Insight',
    link: '/insight',
  },
  {
    title: 'Contact Us',
    link: '/contact',
    children: [
      { title: 'Apply', link: '/apply' },
      { title: 'Partnership', link: '/partnership' },
      { title: 'FAQ', link: '/faq' },
    ],
  },
];

const Header = () => {
  return (
    <div className='header w-full h-[115px] bg-black fixed top-0 left-0 m-auto flex justify-center items-center'>
      <div className='w-auto min-w-[1000px] m-auto'>
        <div className='header-logo'></div>
        <nav className='menu-container flex w-full min-w-[699px]'>
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
