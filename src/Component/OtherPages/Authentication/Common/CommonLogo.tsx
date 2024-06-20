import { Link } from "react-router-dom";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { CommonFormPropsType } from "../../../../Types/OtherPages/OtherPages";

const CommonLogo = ({ alignLogo }: CommonFormPropsType) => {
  return (
    <Link
      className={`logo ${alignLogo ? alignLogo : ""}`}
      to={`${import.meta.env.VITE_PUBLIC_URL}/dashboard`}
    >
      <Image
        className="img-fluid for-dark"
        src={dynamicImage("logo/logo.png")}
        alt="loginpage"
      />
      <Image
        className="img-fluid for-light"
        src={dynamicImage("logo/logo_dark.png")}
        alt="loginpage"
      />
    </Link>
  );
};

export default CommonLogo;

