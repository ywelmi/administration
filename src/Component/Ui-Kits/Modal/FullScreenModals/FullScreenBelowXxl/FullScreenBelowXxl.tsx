import { useState } from 'react'
import CommonFullScreenData from '../Common/CommonFullScreenData';
import { FullScreenBelowXXL } from '../../../../../utils/Constant';

const FullScreenBelowXxl = () => {
    const [fullScreenXxl, setFullScreenXxl] = useState<boolean>(false);
    const fullScreenXxlToggle = () => setFullScreenXxl(!fullScreenXxl);
  
    return <CommonFullScreenData color="danger-2x" onClick={fullScreenXxlToggle} title={FullScreenBelowXXL} fullscreen="xxl" isOpen={fullScreenXxl} toggle={fullScreenXxlToggle} />;
}

export default FullScreenBelowXxl