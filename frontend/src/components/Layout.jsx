import Nav from "./Nav";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import SmoothScroll from "./SmoothScroll";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [pathname]);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-navy-dark text-white grain">
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </div>
    </SmoothScroll>
  );
}
