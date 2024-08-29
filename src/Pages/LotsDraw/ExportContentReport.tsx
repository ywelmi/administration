import { ColumnDef } from "@tanstack/react-table";
import { Ref, useCallback, useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Col, Container, Input, InputGroupText, Row } from "reactstrap";
import { Btn, H1, H2, H3 } from "../../AbstractElements";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { InputSelect } from "../../Component/InputSelect";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { N } from "../../name-conversion";
import { getMoreFilterByValue } from "../../Service/_getParams";
import {
    getContentSport,
    getNumberAthele,
    lotsdrawResultTableGet,
    lotsdrawScheduleGet,
    lotsdrawsGet,
    // lotsdrawCreate,
    // lotsdrawDelete,
    lotsdrawUpdate,
} from "../../Service/lotsdraw";
import { martialArtArmyGroupDelete } from "../../Service/martialArt";
import { groupGetAll, martialArtMilitiaArmyGroupCreate } from "../../Service/martialArtMilitia";
import { useConfigStore } from "../../store/config";
import { useSportStore } from "../../store/sport";
import { TLotsDraw } from "../../type/lotsdraw";
import { convertToDate } from "../../utils/date";
import {
    useLotsDrawSubmitGroupModal,
    useLotsDrawSubmitModal,
    useLotsDrawUpdateAtheleModal,
} from "../LotsDrawSubmit/LotsDrawSubmitForm";
import { useTeamAtheleModal } from "./CreateGroupForm";
import { useLotsDrawModal } from "./LotsDrawForm";
import { useLotsDrawScheduleModal } from "./LotsDrawSchedule";
import LotsdrawTabs from "./navbar_item";
import NavBar from "./navbar";
import { sportXuatXepHang } from "../../Service/sport";

const PageExportContentReport = () => {
    const { sportSelector, unitType } = useConfigStore();
    const { sports, sportsMain, sportsSub } = useSportStore(sportSelector());
    const [sportId, setSportId] = useState("");
    const [listSport, setListSport] = useState(sports);
    const { sport_id: paramSportId } = useParams();
    // số VĐV thi đấu trong 1 lượt
    const [numberPlayedPerRound, setNumberPlayedPerRound] = useState<number>(3);
    // số VĐV thi đấu trong 1 lượt
    const [selectedContentSport, setSelectedContentSport] = useState<string>("");
    const [contentType, setContentType] = useState<any>("");
    useEffect(() => {
        unitType == "LLTT"
            ? setListSport(sportsMain.filter((e) => e.point_unit == 1))
            : setListSport(sportsSub.filter((e) => e.point_unit == 1));
    }, []);
    const { selectSport } = useSportStore();

    const updateSportId = useCallback(
        (v: string) => {
            selectSport(v);
            setSportId(v);
        },
        [selectSport]
    );

    useEffect(() => {
        if (paramSportId) {
            updateSportId(paramSportId);
        }
    }, [paramSportId, updateSportId]);
    //danh sách các nội dung thi đấu của môn

    // kiểm tra đã cập nhật thăm đơn vị chưa
    const [gender, setGender] = useState(0);
    // dữ liệu bảng thăm theo đơn vị
    const [dataUnit, setDataUnit] = useState<TLotsDraw[]>([]);

    useEffect(() => {
        if (sportId) {
            fetchData(sportId);
        }
    }, [sportId]);

    const fetchData = useCallback((sportId: string) => {
        lotsdrawsGet(sportId, "")
            .then((res) => {
                const { data, status } = res;
                console.log({ data });
                if (status === 200) {
                    setDataUnit(data);
                }
            })
            .catch((err) => console.log({ err }));
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardHeader className="pb-0 card-no-border"></CardHeader>
                        <CardBody>
                            {sportId && sports.filter((e) => e.id == sportId).length > 0 && (
                                <div className="d-flex justify-content-center">
                                    <div className="flex  ">
                                        <div
                                            className="btn btn-info"
                                            onClick={() => {
                                                if (sportId) {
                                                    sportXuatXepHang(sportId);

                                                    // setTimeout(() => fetchData(sportId), 2000);
                                                } else {
                                                    toast.warn("Mời chọn môn thi");
                                                }
                                            }}
                                        >
                                            <i className="fa fa-download" /> &nbsp;
                                            {"Tải xuống biên bản thi đấu"}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export { PageExportContentReport };
