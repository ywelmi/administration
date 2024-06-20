import { Btn, FeatherIcons, LI, UL } from "../../../../AbstractElements";
import { Link, useNavigate } from "react-router-dom";
import { profilesMessage } from "../../../../Data/Layout/Header";
import { LogOut } from "../../../../utils/Constant";

const ProfileBox = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    localStorage.removeItem("login")
    navigate(`${process.env.PUBLIC_URL}/login`)
  }
  return (
    <UL className="profile-dropdown onhover-show-div">
      {profilesMessage.map((data,index) => (
        <LI key={index}>
          <Link to={data.link}>
            <FeatherIcons iconName={data.icon} />
            <span>{data.name} </span>
          </Link>
        </LI>
      ))}
      <LI>
        <Btn size="sm" outline color="primary" className="btn-pill" onClick={(handleClick)}>{LogOut}</Btn>
      </LI>
    </UL> 
  );
};

export default ProfileBox;
