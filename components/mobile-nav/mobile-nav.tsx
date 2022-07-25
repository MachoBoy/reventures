import Link from 'next/link';
import { useRouter } from 'next/router';
import { navData } from '../../data/nav-data';

interface Props {
  handleMobileNav: Function;
}

const MobileNav = ({ handleMobileNav }: Props) => {
  const router = useRouter();
  //console.log(router);
  return (
    <aside>
      <ul>
        {navData.map(({ title, link, children }, index) => {
          return (
            <li className='mt-4' key={index}>
              <Link href={link}>
                <a
                  onClick={() => handleMobileNav()}
                  className={`text-lg lg:text-xl ${
                    router.pathname === link ? 'text-white' : 'text-[#FFFFFF80]'
                  } font-semibold`}
                >
                  {title}
                </a>
              </Link>
              <div className='mt-4 h-[1px] w-full bg-[#FFFFFF80]'></div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default MobileNav;
