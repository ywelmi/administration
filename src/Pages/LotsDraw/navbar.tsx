import { useEffect, useState } from "react";
import {
    Card,
    CardBody,
    Col,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    Row,
} from "reactstrap";

import NavBarItem from "./navbar_item";
import { H5 } from "../../AbstractElements";

const NavBar = () => {
    const [basicTab, setBasicTab] = useState<string>("1");
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => setOpen(!open);
    return (
        <Card className="height-equal">
            <CardBody>
                <Nav pills className="m-10 justify-content-center nav-primary">
                    <NavLink className={basicTab === "1" ? "active" : ""} onClick={() => setBasicTab("1")}>
                        Cập nhật kết quả bốc thăm
                    </NavLink>
                    <NavLink className={basicTab === "2" ? "active" : ""} onClick={() => setBasicTab("2")}>
                        Nhập khóa thăm
                    </NavLink>
                    <NavLink className={basicTab === "3" ? "active" : ""} onClick={() => setBasicTab("3")}>
                        Nhập vận động viên
                    </NavLink>
                    <NavLink className={basicTab === "4" ? "active" : ""} onClick={() => setBasicTab("4")}>
                        Xuất biên bản thi đấu
                    </NavLink>
                    <NavLink className={basicTab === "5" ? "active" : ""} onClick={() => setBasicTab("5")}>
                        Nhập thành tích
                    </NavLink>
                </Nav>

                <NavBarItem basicTab={basicTab} />
            </CardBody>
        </Card>
    );
};

export default NavBar;
