import { Col } from "reactstrap";
import { UL } from "../../../AbstractElements";
import ResponsiveSearchBar from "./ResponsiveSearchBar/ResponsiveSearchBar";
import SearchBar from "./SearchBar/SearchBar";
import HeaderBookmark from "./HeaderBookmark/HeaderBookmark";
import DarkMode from "./DarkMode/DarkMode";
import NotificationBox from "./NotificationBox/NotificationBox";
import UserProfile from "./UserProfile/UserProfile";
import Language from "./Language/Language";
import ZoomInOut from "./ZoomInOut/ZoomInOut";

const RightHeader = () => { 
  return (
    <Col xl="7"  xs="8" className="nav-right pull-right right-header p-0 ms-auto">
      <UL className="nav-menus simple-list flex-row">
        <ResponsiveSearchBar />
        <SearchBar />
        <Language />
        <ZoomInOut /> 
        <HeaderBookmark /> 
        <DarkMode /> 
        <NotificationBox />
        <UserProfile />
      </UL>
    </Col>
  );
};

export default RightHeader;
