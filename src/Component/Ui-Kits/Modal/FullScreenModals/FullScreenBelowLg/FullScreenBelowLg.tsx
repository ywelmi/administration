import { useState } from 'react'
import CommonFullScreenData from '../Common/CommonFullScreenData';
import { FullScreenBelowLG } from '../../../../../utils/Constant';

const FullScreenBelowLg = () => {
    const [fullScreenLg, setFullScreenLg] = useState<boolean>(false);
    const fullScreenLgToggle = () => setFullScreenLg(!fullScreenLg);
  
    return <CommonFullScreenData color="warning-2x" onClick={fullScreenLgToggle} title={FullScreenBelowLG} fullscreen="lg" isOpen={fullScreenLg} toggle={fullScreenLgToggle} />;
}

export default FullScreenBelowLg