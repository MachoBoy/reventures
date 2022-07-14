import Header from '../header/header';
import Footer from '../footer/footer';

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
