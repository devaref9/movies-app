import ScrollToTop from "@/components/ScrollToTop";
import Footer from "../(layout)/Footer";
import Navbar from "../(layout)/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
