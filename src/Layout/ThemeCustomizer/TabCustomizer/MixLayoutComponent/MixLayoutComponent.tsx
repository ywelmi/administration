import { useAppDispatch } from '../../../../ReduxToolkit/Hooks';
import { H5, UL } from '../../../../AbstractElements';
import { Mix_Layout } from '../../../../utils/Constant';
import BgLight from './BgLight';
import BgDark from './BgDark';
import ConfigDB from '../../../../Config/ThemeConfig';
import { setMixBackgroundLayout } from '../../../../ReduxToolkit/Reducer/ThemeCustomizerSlice';
import LightOnly from './LightOnly';

const MixLayoutComponent = () => {
    const dispatch = useAppDispatch();
    const mixLayout = ConfigDB.data.color.mix_background_layout;
  
    const addMixBackgroundLayout = (mix_background_layout: string) => {
      ConfigDB.data.color.mix_background_layout = mix_background_layout;
      dispatch(setMixBackgroundLayout(mix_background_layout));
    };
  
    const handleCustomizerMix_Background = (value: string) => {
      addMixBackgroundLayout(value);
      if (value === "dark-sidebar") {
        document.body.classList.add("dark-sidebar");
        document.body.classList.remove("dark-only");
        document.body.classList.remove("light-only");
      } else if (value === "dark-only") {
        document.body.classList.remove("dark-sidebar");
        document.body.classList.add("dark-only");
        document.body.classList.remove("light-only");
      } else if( value === "light-only"){
        document.body.classList.remove("dark-only");
        document.body.classList.remove("dark-sidebar");
        document.body.classList.add("light-only");
      }
    };
    return (
      <>
        <H5>{Mix_Layout}</H5>
        <UL className="layout-grid customizer-mix flex-row simple-list">
          <LightOnly mixLayout={mixLayout} handleCustomizerMix_Background={handleCustomizerMix_Background} />
          <BgLight mixLayout={mixLayout} handleCustomizerMix_Background={handleCustomizerMix_Background}/>
          <BgDark mixLayout={mixLayout} handleCustomizerMix_Background={handleCustomizerMix_Background}/>
        </UL>
      </>
    );
}

export default MixLayoutComponent