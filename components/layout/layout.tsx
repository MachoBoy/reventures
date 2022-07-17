import { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    mounted && (
      <>
        <Header />
        <main className='w-full min-w-[1560px] max-w-[1920px] overflow-hidden'>
          {children}
        </main>
        <Footer />
      </>
    )
  );
};

export default Layout;
