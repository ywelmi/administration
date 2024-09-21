import { Card, CardBody, CardHeader, Col, Container, Input, Label, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";

import { useEffect, useState } from "react";
import { useSportStore } from "../../store/sport";
import { Btn, H5, H6 } from "../../AbstractElements";
import { getNumberTeam, sportExportListAtheleBySport, sportXuatXepHang, updateNumberTeam } from "../../Service/result";
import { toast } from "react-toastify";
import { exportResultAll } from "../../Service/result";
import { useConfigStore } from "../../store/config";
import { sportsGet } from "../../Service/sport";

const ListComboBox = () => {
    const { sports, sportsMain, sportsSub } = useSportStore();
    const [listSport, setListSport] = useState(sports);
    const [filterText, setFilterText] = useState("all");
    const [block, setBlock] = useState("");
    const [typeExport, setTypeExport] = useState("all");
    const [numberTeam, setNumberTeam] = useState(0);
    const handleChangeValue = (value: any) => {
        setFilterText(value);
    };
    useEffect(() => {
        sportsGet().then((res) => {
            const { data, status } = res;
            if (!data.data) return;
            const {
                data: sports1,
                sumData: { total },
            } = data;
            setListSport(
                sports1.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                })
            );
        });
    }, []);
    const handleDownloadClick = () => {
        sportExportListAtheleBySport(filterText);
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="m-10">
                    <H6 className="text-primary text-center m-10">Chọn môn thi đấu</H6>
                    <Input
                        type="select"
                        className="btn-square form-select"
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}
                        onChange={(value) => handleChangeValue(value.currentTarget.value)}
                    >
                        <option
                            style={{
                                fontFamily: "Montserrat",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}
                            value="all"
                            defaultChecked
                        >
                            Môn thi đấu
                        </option>
                        {listSport.map((data: any) => (
                            <option
                                style={{
                                    fontFamily: "Montserrat",
                                    fontSize: 15,
                                    fontWeight: "bold",
                                }}
                                value={data.id}
                            >
                                {data.name}
                            </option>
                        ))}
                    </Input>
                </div>
            </div>
            <div className="d-flex justify-content-center m-30">
                <Btn color="success" type="button" onClick={handleDownloadClick}>
                    Xuất trang tính
                </Btn>
            </div>
        </>
    );
};

const PageExportAtheleType3 = () => {
    return (
        <div className="page-body">
            <Breadcrumbs mainTitle={"Xuất danh sách VĐV theo môn thi - Mẫu 1"} parent={"HTTQ2024"} />
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

export { PageExportAtheleType3 };
