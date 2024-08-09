import { Row } from "reactstrap";
import RightHeader from "./RightHeader/RightHeader";
import { useLayoutStore } from "../../store/layout";

const Header = () => {
  const { toggleSidebar, scroll } = useLayoutStore();
  return (
    <div
      className={`page-header ${toggleSidebar ? "close_icon" : ""}`}
      id="pageheaders"
      style={{ display: scroll ? "none" : "" }}
    >
      <Row className="header-wrapper m-0">
        {/* <HeaderLogo /> */}
        {/* <LeftHeader /> */}
        <h3 style={{ width: "fit-content" }}>
          Phần mềm hỗ trợ tổng hợp, xử lý, tính toán kết quả <br />
          phục vụ Hội thao Thể thao Quốc phòng năm 2024
        </h3>
        <RightHeader />
      </Row>
    </div>
  );
};

export default Header;
