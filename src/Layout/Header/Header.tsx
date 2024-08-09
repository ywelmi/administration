import { Col, Row } from "reactstrap";
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
            <Row className="header-wrapper m-0 d-flex">
                {/* <HeaderLogo /> */}
                {/* <LeftHeader /> */}
                {/* <h3 style={{ width: "fit-content" }}>
                    Phần mềm hỗ trợ tổng hợp, xử lý, tính toán kết quả <br />
                    phục vụ Hội thao Thể thao Quốc phòng năm 2024
                </h3> */}
                <Col md={9}>
                    <h3 style={{ width: "fit-content" }}>
                        PHẦN MỀM HỖ TRỢ TỔNG HỢP, XỬ LÝ, TÍNH TOÁN KẾT QUẢ PHỤC VỤ HỘI THAO <br />
                        THỂ THAO QUỐC PHÒNG NĂM 2024
                    </h3>
                </Col>
                <RightHeader />
            </Row>
        </div>
    );
};

export default Header;
