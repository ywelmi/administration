import { FeatherIcons, LI } from "../../../../AbstractElements";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setDarkMode } from "../../../../ReduxToolkit/Reducer/LayoutSlice";

const DarkMode = () => {
  const { darkMode } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const handleDarkMode = () => {
    dispatch(setDarkMode(!darkMode));
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
