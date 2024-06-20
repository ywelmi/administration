import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { Apply, UnlimitedColor } from '../../../../utils/Constant';
import { Btn, H5, UL } from '../../../../AbstractElements';
import { Input } from 'reactstrap';
import ConfigDB from '../../../../Config/ThemeConfig';
import { setColorBackground1, setColorBackground2, setOpenCus } from '../../../../ReduxToolkit/Reducer/ThemeCustomizerSlice';

const ColorComponent = () => {
    const {colorBackground1,colorBackground2} = useAppSelector((state)=>state.themeCustomizer)
    const dispatch = useAppDispatch()
  
    useEffect(() => {
      document.documentElement.style.setProperty("--theme-default", colorBackground1);
      document.documentElement.style.setProperty("--theme-secondary", colorBackground2);
      ConfigDB.data.color.primary_color = colorBackground1;
      ConfigDB.data.color.secondary_color = colorBackground2;
    }, []);
  
    const addColor = (default_color: string, secondary_color: string) => {
      ConfigDB.data.color.primary_color = default_color;
      ConfigDB.data.color.secondary_color = secondary_color;
    };
  
    const handleUnlimitedColor1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      dispatch(setColorBackground1(value));
    };
  
    const handleUnlimitedColor2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      dispatch(setColorBackground2(value));
    };
  
    const OnUnlimitedColorClick = () => {
      addColor(colorBackground1, colorBackground2);
      document.documentElement.style.setProperty("--theme-default", colorBackground1);
      document.documentElement.style.setProperty("--theme-secondary", colorBackground2);
      dispatch(setOpenCus(false))
    };
    return (
      <>
        <H5>{UnlimitedColor}</H5>
        <UL className="simple-list flex-row layout-grid unlimited-color-layout">
          <Input className="p-0" type="color" name="Color-Background1" value={colorBackground1} onChange={(e) => handleUnlimitedColor1Change(e)}/>
          <Input className="p-0" type="color" name="Color-Background2" value={colorBackground2} onChange={(e) => handleUnlimitedColor2Change(e)}/>
          <Btn color="primary" className="color-apply-btn color-apply-btn" onClick={OnUnlimitedColorClick}>
            {Apply}
          </Btn>
        </UL>
      </>
    );
}

export default ColorComponent