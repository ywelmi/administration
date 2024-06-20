import ComingSoonSimple from "../Pages/OtherPages/ComingSoon/ComingSoonSimple/ComingSoonSimple";
import ComingSoonWithBgImage from "../Pages/OtherPages/ComingSoon/ComingSoonWithBgImage/ComingSoonWithBgImage";
import ComingWithBgVideo from "../Pages/OtherPages/ComingSoon/ComingWithBgVideo/ComingWithBgVideo";
import ForgetPassword from "../Pages/OtherPages/Authentication/ForgetPassword/ForgetPassword";
import LoginWithBackGroundImage from "../Pages/OtherPages/Authentication/LoginWithBackGroundImage/LoginWithBackGroundImage";
import LoginWithImageTwo from "../Pages/OtherPages/Authentication/LoginWithImageTwo/LoginWithImageTwo";
import LoginWithSweetAlert from "../Pages/OtherPages/Authentication/LoginWithSweetAlert/LoginWithSweetAlert";
import LoginWithTooltip from "../Pages/OtherPages/Authentication/LoginWithTooltip/LoginWithTooltip";
import LoginWithValidation from "../Pages/OtherPages/Authentication/LoginWithValidation/LoginWithValidation";
import Maintenance from "../Pages/OtherPages/Authentication/Maintenance/Maintenance";
import RegisterSimple from "../Pages/OtherPages/Authentication/RegisterSimple/RegisterSimple";
import RegisterWithBgImage from "../Pages/OtherPages/Authentication/RegisterWithBgImage/RegisterWithBgImage";
import RegisterWithImageTwo from "../Pages/OtherPages/Authentication/RegisterWithImageTwo/RegisterWithImageTwo";
import RegisterWizard from "../Pages/OtherPages/Authentication/RegisterWizard/RegisterWizard";
import ResetPassword from "../Pages/OtherPages/Authentication/ResetPassword/ResetPassword";
import UnlockUser from "../Pages/OtherPages/Authentication/UnlockUser/UnlockUser";
import Error400 from "../Pages/OtherPages/Error/Error400/Error400";
import Error401 from "../Pages/OtherPages/Error/Error401/Error401";
import Error403 from "../Pages/OtherPages/Error/Error403/Error403";
import Error404 from "../Pages/OtherPages/Error/Error404/Error404";
import Error500 from "../Pages/OtherPages/Error/Error500/Error500";
import Error503 from "../Pages/OtherPages/Error/Error503/Error503";
import LoginSimple from "../Pages/OtherPages/Authentication/LoginSimple/LoginSimple";


export const authRoutes = [
    //Error
    { path: `${process.env.PUBLIC_URL}/errors/error400`, Component: <Error400/> },
    { path: `${process.env.PUBLIC_URL}/errors/error401`, Component: <Error401/> },
    { path: `${process.env.PUBLIC_URL}/errors/error403`, Component: <Error403/> },
    { path: `${process.env.PUBLIC_URL}/errors/error404`, Component: <Error404/> },
    { path: `${process.env.PUBLIC_URL}/errors/error500`, Component: <Error500/> },
    { path: `${process.env.PUBLIC_URL}/errors/error503`, Component: <Error503/> },
    
    // Auth Pages
    { path: `${process.env.PUBLIC_URL}/authentication/loginsimple`, Component: <LoginSimple /> },
    { path: `${process.env.PUBLIC_URL}/authentication/loginbgimage`, Component: <LoginWithBackGroundImage /> },
    { path: `${process.env.PUBLIC_URL}/authentication/loginwithimagetwo`, Component: <LoginWithImageTwo /> },
    { path: `${process.env.PUBLIC_URL}/authentication/loginvalidation`, Component: <LoginWithValidation /> },
    { path: `${process.env.PUBLIC_URL}/authentication/logintooltip`, Component: <LoginWithTooltip /> },
    { path: `${process.env.PUBLIC_URL}/authentication/loginsweetalert`, Component: <LoginWithSweetAlert /> },
    { path: `${process.env.PUBLIC_URL}/authentication/registersimple`, Component: <RegisterSimple /> },
    { path: `${process.env.PUBLIC_URL}/authentication/registerbgimage`, Component: <RegisterWithBgImage /> },
    { path: `${process.env.PUBLIC_URL}/authentication/registerwithimagetwo`, Component: <RegisterWithImageTwo /> },
    { path: `${process.env.PUBLIC_URL}/authentication/registerwizard`, Component: <RegisterWizard /> },
    { path: `${process.env.PUBLIC_URL}/authentication/unlockuser`, Component:<UnlockUser />},
    { path: `${process.env.PUBLIC_URL}/authentication/forgetpassword`, Component:<ForgetPassword />},
    { path: `${process.env.PUBLIC_URL}/authentication/resetpassword`, Component: <ResetPassword />},
    { path: `${process.env.PUBLIC_URL}/authentication/maintenance`, Component: <Maintenance />},

     //  ComingSoon
     { path: `${process.env.PUBLIC_URL}/comingsoon/comingsoonsimple`, Component: <ComingSoonSimple/> },
     { path: `${process.env.PUBLIC_URL}/comingsoon/comingbgvideo`, Component: <ComingWithBgVideo/> },
     { path: `${process.env.PUBLIC_URL}/comingsoon/comingbgimg`, Component: <ComingSoonWithBgImage/> }
   ];
