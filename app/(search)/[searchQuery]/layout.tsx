import Footer from "@/app/(layout)/Footer";
import Navbar from "@/app/(layout)/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
