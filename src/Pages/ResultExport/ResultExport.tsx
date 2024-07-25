import { Card, CardBody, CardHeader, Col, Container, Input, Label, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";

import { useState } from "react";
import { useSportStore } from "../../store/sport";
import { Btn, H6 } from "../../AbstractElements";
import { sportXuatXepHang } from "../../Service/sport";
import { toast } from "react-toastify";

const ListComboBox = () => {
    const { sports, sportsMain, sportsSub } = useSportStore();
    const [listSport, setListSport] = useState(sports);
    const [filterText, setFilterText] = useState("all");
    const [block, setBlock] = useState("");
    const [typeExport, setTypeExport] = useState("all");
    const handleChangeValue = (value: any) => {
        setFilterText(value);
    };
    const handleChangeBlock = (value: any) => {
        setBlock(value);
        if (value != "all") {
            if (value == "Thường trực") {
                setListSport(sportsMain);
            } else {
                setListSport(sportsSub);
            }
        } else {
            setListSport(sports);
        }
    };
    const handleChangeType = (value: any) => {
        setTypeExport(value);
    };
    const handleDownloadClick = () => {
        if (typeExport == "Toàn đoàn" || typeExport == "all") {
            toast.error("Chưa có xếp hạng toàn đoàn");
        } else {
            filterText == "all" ? toast.error("Chưa lựa chọn môn thi") : sportXuatXepHang(filterText);
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="m-10">
                    <H6 className="text-primary text-center m-10">Chọn bảng xếp hạng</H6>
                    <Input
                        type="select"
                        className="btn-square form-select"
                        style={{ fontFamily: "Montserrat", fontSize: 15, fontWeight: "bold" }}
                        onChange={(value) => handleChangeType(value.currentTarget.value)}
                    >
                        <option
                            style={{ fontFamily: "Montserrat", fontSize: 15, fontWeight: "bold" }}
                            value="all"
                            defaultChecked
                        >
                            Tất cả
                        </option>
                        <option
                            style={{ fontFamily: "Montserrat", fontSize: 15, fontWeight: "bold" }}
                            value={"Toàn đoàn"}
                        >
                            Toàn đoàn
                        </option>
                        <option
                            style={{ fontFamily: "Montserrat", fontSize: 15, fontWeight: "bold" }}
                            value={"Theo môn"}
                        >
                            Theo môn
                        </option>
                    </Input>
                </div>

                <div className="m-10">
                    <H6 className="text-primary text-center m-10">Chọn khối thi đấu</H6>
                    <Input
                        type="select"
                        className="btn-square form-select"
                        style={{ fontFamily: "Montserrat", fontSize: 15, fontWeight: "bold" }}
                        onChange={(value) => handleChangeBlock(value.currentTarget.value)}
                    >
                        <option
                            style={{ fontFamily: "Montserrat", fontSize: 15, fontWeight: "bold" }}
                            value="all"
                            defaultChecked
                        >
                            Tất cả
                        </option>
                        <option
                            style={{ fontFamily: "Montserrat", fontSize: 15, fontWeight: "bold" }}
                            value={"Thường trực"}
                        >
                            Lực lượng thường trực
                        </option>
                        <option style={{ fontFamily: "Montserrat", fontSize: 15, fontWeight: "bold" }} value={"DQTV"}>
                            Lực lượng Dân quân tự vệ
                        </option>
                    </Input>
                </div>
                {typeExport == "Theo môn" && (
                    <div className="m-10">
                        <H6 className="text-primary text-center m-10">Chọn môn thi đấu</H6>
                        <Input
                            type="select"
                            className="btn-square form-select"
                            style={{ fontFamily: "Montserrat", fontSize: 15, fontWeight: "bold" }}
                            onChange={(value) => handleChangeValue(value.currentTarget.value)}
                        >
                            <option
                                style={{ fontFamily: "Montserrat", fontSize: 15, fontWeight: "bold" }}
                                value="all"
                                defaultChecked
                            >
                                Môn thi đấu
                            </option>
                            {listSport.map((data: any) => (
                                <option
                                    style={{ fontFamily: "Montserrat", fontSize: 15, fontWeight: "bold" }}
                                    value={data.id}
                                >
                                    {data.name}
                                </option>
                            ))}
                        </Input>
                    </div>
                )}
            </div>
            <div className="d-flex justify-content-center m-30">
                <Btn color="success" type="button" onClick={handleDownloadClick}>
                    Xuất bảng xếp hạng
                </Btn>
            </div>
        </>
    );
};

const PageResultExport = () => {
    return (
        <div className="page-body">
            <Breadcrumbs mainTitle={"Kết quả xếp hạng"} parent={"DataTables"} />
            <Container fluid>
                <Row>
                    <Col sm="15">
                        <Card>
                            {/* <CardHeader className="pb-0 card-no-border"> */}
                            {/*   <div className="btn btn-primary" onClick={handleToggleAddModal}> */}
                            {/*     <i className="fa fa-plus" /> */}
                            {/*     {"Thêm mới"} */}
                            {/*   </div> */}
                            {/*   <SportAddModal /> */}
                            {/* </CardHeader> */}
                            <CardBody>
                                <ListComboBox />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export { PageResultExport };
