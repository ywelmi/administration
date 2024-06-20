import { FeatherIcons, LI } from "../../../../AbstractElements";
import { useLayoutStore } from "../../../../store/layout";

const DarkMode = () => {
  const { darkMode, setDarkMode } = useLayoutStore();
  const handleDarkMode = () => {
    setDarkMode();
  };
  return (
    <LI onClick={handleDarkMode}>
      <div className={`mode ${darkMode ? "active" : ""}`}>
        <FeatherIcons className="moon" iconName="Moon" />
      </div>
    </LI>
  );
};

export default DarkMode;
