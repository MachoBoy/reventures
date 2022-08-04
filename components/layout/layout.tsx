import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import PageTransition from '../page-transition/pageTransition';

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openMobileNav = () => {
    //console.log('open nav');
    setMobileNavOpen(true);
  };

  const closeMobileNav = () => {
    //console.log('close nav');
    setMobileNavOpen(false);
  };

  if (!mounted) return null;
  return (
    mounted && (
      <PageTransition>
        <>
          <Header
            mobileNavOpen={mobileNavOpen}
            openMobileNav={openMobileNav}
            closeMobileNav={closeMobileNav}
          />
          <main
            onClick={() => (mobileNavOpen ? closeMobileNav() : null)}
            className={`w-full max-w-[1920px] mx-auto overflow-hidden ${
              mobileNavOpen ? 'blur-[2px]' : 'blur-none'
            }`}
          >
            {children}
          </main>
          <Footer />
        </>
      </PageTransition>
    )
  );
};

export default Layout;
