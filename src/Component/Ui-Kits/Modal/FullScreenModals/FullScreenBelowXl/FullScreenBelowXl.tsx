import { useState } from 'react'
import CommonFullScreenData from '../Common/CommonFullScreenData';
import { FullScreenBelowXL } from '../../../../../utils/Constant';

const FullScreenBelowXl = () => {
    const [fullScreenXl, setFullScreenXl] = useState<boolean>(false);
    const fullScreenXlToggle = () => setFullScreenXl(!fullScreenXl);
  
    return <CommonFullScreenData color="primary-2x" onClick={fullScreenXlToggle} title={FullScreenBelowXL} fullscreen="xl" isOpen={fullScreenXl} toggle={fullScreenXlToggle} />;
}

export default FullScreenBelowXl