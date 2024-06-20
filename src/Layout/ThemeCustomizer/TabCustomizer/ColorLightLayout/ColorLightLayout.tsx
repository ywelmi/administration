import { H5, LI, UL } from "../../../../AbstractElements";
import { lightColorData } from "../../../../Data/Layout/ThemeCustomizerData";
import { setDarkMode } from "../../../../ReduxToolkit/Reducer/LayoutSlice";
import { LightLayout } from "../../../../utils/Constant";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { PropsLightColor } from "../../../../Types/Layout/ThemeCustomizerTypes";

const ColorLightLayout = () => {
  const dispatch = useAppDispatch()
  const handleColor = (data:PropsLightColor) => {
    dispatch(setDarkMode(false));
    document.documentElement.style.setProperty('--theme-default', data.primary);
    document.documentElement.style.setProperty('--theme-secondary', data.secondary);
  }
  return (
    <>
      <H5>{LightLayout}</H5>
      <UL className="layout-grid customizer-color flex-row">
        {lightColorData.map((data,i)=>(
          <LI className="color-layout" data-attr={`color-${i+1}`} data-primary={data.primary} onClick={()=>handleColor(data)} key={i}>
            <div></div>
          </LI>
        ))}
      </UL>
    </>
  );
};

export default ColorLightLayout;
