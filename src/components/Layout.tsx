import Footer from './Footer';
import Navbar, { SideBarMenu } from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <SideBarMenu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
