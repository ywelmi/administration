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
import { getContentSport, getNumberAthele, lotsdrawScheduleUpdate } from "../../Service/lotsdraw";

import { useConfigStore } from "../../store/config";
import { useSportStore } from "../../store/sport";
import { TLotsDraw } from "../../type/lotsdraw";

import TestLotsDrawSubmitAllModal from "../LotsDrawSubmit/LotsDrawSubmitResultAtheleModal";
import { LotsDrawSubmitResultMartialModal } from "./MartialArtMilitiaFormResult";

//Component render page lots draw
const PageUpdateResultMartial = () => {
    const { sportSelector, unitType } = useConfigStore();
    const { sports, sportsMain, sportsSub } = useSportStore(sportSelector());
    const [sportId, setSportId] = useState("");
    const [listSport, setListSport] = useState(sports);

    // số VĐV thi đấu trong 1 lượt
    const [contentType, setContentType] = useState<any>("");
    // số VĐV thi đấu trong 1 lượt
    const [selectedContentSport, setSelectedContentSport] = useState<string>("");
    const sportMartialArtMilitia = sports.find((s) => s.point_unit === 2);

    const { selectSport } = useSportStore();

    const updateSportId = useCallback(
        (v: string) => {
            selectSport(v);
            setSportId(v);

            setSelectedContentSport("");
        },
        [selectSport]
    );

    useEffect(() => {
        if (sportMartialArtMilitia) {
            updateSportId(sportMartialArtMilitia!.id);
        }
    }, []);
    //danh sách các nội dung thi đấu của môn
    const [contentSport, setContent] = useState<any>([]);

    const numberAthele = useRef<any>();

    useEffect(() => {
        if (sportId) {
            fetchData(sportId);
        }
    }, [sportId]);

    const handleSelectContent = (id: any) => {
        getNumberAthele(id)
            .then((res) => {
                const { data, status } = res;
                console.log({ data });
                if (status === 200) numberAthele.current = data;
            })
            .catch((err) => console.log({ err }));
        lotsdrawScheduleUpdate(1, 1000, sportId, id);
        setSelectedContentSport(id);
    };
    const fetchData = useCallback((sportId: string) => {
        getContentSport(sportId)
            .then((res) => {
                const { data, status } = res;
                console.log({ data });
                if (status === 200) setContent(data);
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
                            <>
                                <>
                                    <div className="m-b-10">
                                        {contentSport.length > 0 && (
                                            <InputSelect
                                                title={"Chọn nội dung thi đấu"}
                                                data={contentSport.sort((a: any, b: any) => a.indexs - b.indexs)}
                                                k="name"
                                                v="id"
                                                name="sport"
                                                value={selectedContentSport}
                                                handleChange={(e) => {
                                                    setSelectedContentSport(e.target.value);
                                                    setContentType(
                                                        contentSport.filter((el: any) => el.id == e.target.value)[0]
                                                            .content_type
                                                    );
                                                    handleSelectContent(e.target.value);
                                                }}
                                            />
                                        )}
                                    </div>
                                    {selectedContentSport != "" && contentType == 1 ? (
                                        <div className="d-flex justify-content-center">
                                            {" "}
                                            <LotsDrawSubmitResultMartialModal
                                                sportId={sportId}
                                                content_id={selectedContentSport}
                                            />
                                        </div>
                                    ) : (
                                        selectedContentSport != "" && (
                                            <div className="d-flex justify-content-center">
                                                <LotsDrawSubmitResultMartialModal
                                                    sportId={sportId}
                                                    content_id={selectedContentSport}
                                                />
                                            </div>
                                        )
                                    )}
                                </>
                            </>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export { PageUpdateResultMartial };
