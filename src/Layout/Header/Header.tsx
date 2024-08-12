import { Col, Row } from "reactstrap";
import { useLayoutStore } from "../../store/layout";
import RightHeader from "./RightHeader/RightHeader";

const Header = () => {
  const { toggleSidebar, scroll } = useLayoutStore();
  return (
    <div
      className={`page-header ${toggleSidebar ? "close_icon" : ""}`}
      id="pageheaders"
      style={{ display: scroll ? "none" : "" }}
    >
      <Row className="header-wrapper m-0 d-flex mb-2">
        {/* <HeaderLogo /> */}
        {/* <LeftHeader /> */}
        {/* <h3 style={{ width: "fit-content" }}>
                    Phần mềm hỗ trợ tổng hợp, xử lý, tính toán kết quả <br />
                    phục vụ Hội thao Thể thao Quốc phòng năm 2024
                </h3> */}
        <Col md={9}>
          <h3 style={{ width: "fit-content", color: "#066" }}>
            {/* PHẦN MỀM HỖ TRỢ TỔNG HỢP, XỬ LÝ, TÍNH TOÁN KẾT QUẢ PHỤC VỤ HỘI THAO{" "}
            <br />
            THỂ THAO QUỐC PHÒNG NĂM 2024 */}
            PHẦN MỀM HỖ TRỢ HỘI THAO QUỐC PHÒNG NĂM 2024
          </h3>
        </Col>
        <RightHeader />
      </Row>
    </div>
  );
};

export default Header;
