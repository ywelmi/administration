import { useState } from "react";
import NavCustomizer from "./NavCustomizer/NavCustomizer";
import TabCustomizer from "./TabCustomizer/TabCustomizer";
import { useThemeStore } from "../../store/theme";

const ThemeCustomizer = () => {
  const [selected, setSelected] = useState("sidebar-type");
  const { openCus, setOpenCus } = useThemeStore();

  const callbackNav = (select: string, open: boolean) => {
    setSelected(select);
    setOpenCus(open);
  };
  return (
    <>
      <div className={`customizer-links ${openCus ? "open" : ""}`}>
        <NavCustomizer callbackNav={callbackNav} selected={selected} />
      </div>
      <div className={`customizer-contain ${openCus ? "open" : ""}`}>
        <TabCustomizer selected={selected} callbackNav={callbackNav} />
      </div>
    </>
  );
};

export default ThemeCustomizer;

