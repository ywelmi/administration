import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Loader from "./Loader/Loader";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import TapTop from "./TapTop/TapTop";
import { useEffect } from "react";
import { useThemeStore } from "../store/theme";
import { useLayoutStore } from "../store/layout";
import ThemeCustomizer from "./ThemeCustomizer/ThemeCustomizer";

const Layout = () => {
  const { layout, setLayout } = useThemeStore();
  const { setToggleSidebar } = useLayoutStore();
  const compactSidebar = () => {
    let windowWidth = window.innerWidth;
    if (layout === "compact-wrapper") {
      if (windowWidth < 1200) {
        setToggleSidebar(true);
      } else {
        setToggleSidebar(false);
      }
    } else if (layout === "horizontal-wrapper") {
      if (windowWidth < 992) {
        setToggleSidebar(true);
        setLayout("compact-wrapper");
      } else {
        setToggleSidebar(false);
        const layout = localStorage.getItem("layout");
        if (layout) {
          setLayout(layout);
        }
      }
    }
  };
  useEffect(() => {
    compactSidebar();
    window.addEventListener("resize", () => {
      compactSidebar();
    });
  }, [layout]);
  return (
    <>
      <Loader />
      <TapTop />
      <div className={`page-wrapper ${layout}`}>
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          <Outlet />
          <Footer />
        </div>
      </div>
      {/* <ThemeCustomizer /> */}
    </>
  );
};

export default Layout;
