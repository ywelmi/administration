import { Btn, LI, UL } from "../../../../AbstractElements";
import { clearUser } from "../../../../shared/localStorage/user";

const ProfileBox = () => {
  // const navigate = useNavigate();
  const handleClick = () => {
    clearUser();
    // navigate("/sign-in");
    setTimeout(() => (window.location.href = "/sign-in"), 1000);
  };
  return (
    <UL className="profile-dropdown onhover-show-div">
      <LI>
        <Btn
          size="sm"
          outline
          color="primary"
          className="btn-pill"
          onClick={handleClick}
        >
          Đăng xuất
        </Btn>
      </LI>
    </UL>
  );
};

export default ProfileBox;
