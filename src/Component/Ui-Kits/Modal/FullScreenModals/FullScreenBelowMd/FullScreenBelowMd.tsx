import { useState } from 'react'
import CommonFullScreenData from '../Common/CommonFullScreenData';
import { FullScreenBelowMD } from '../../../../../utils/Constant';

const FullScreenBelowMd = () => {
    const [fullScreenMd, setFullScreenMd] = useState<boolean>(false);
    const fullScreenMdToggle = () => setFullScreenMd(!fullScreenMd);
    
    return <CommonFullScreenData color="success-2x" onClick={fullScreenMdToggle} title={FullScreenBelowMD} fullscreen="md" isOpen={fullScreenMd} toggle={fullScreenMdToggle} />;
}

export default FullScreenBelowMd