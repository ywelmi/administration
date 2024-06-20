import { Row } from "reactstrap";
import SearchInput from "./SearchInput/SearchInput";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import LeftHeader from "./LeftHeader/LeftHeader";
import RightHeader from "./RightHeader/RightHeader";
import { useAppSelector } from "../../ReduxToolkit/Hooks";

const Header = () => {
  const { toggleSidebar,scroll } = useAppSelector((state) => state.layout);
  return (
    <div className={`page-header ${toggleSidebar ? "close_icon" : ""}`} id="pageheaders" style={{display: scroll ? "none" : ""}}>
      <Row className="header-wrapper m-0">
        <SearchInput />
        <HeaderLogo />
        <LeftHeader />
        <RightHeader />
      </Row>
    </div>
  );
};

export default Header;
