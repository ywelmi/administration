import { Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import { TLotsDraw } from "../../type/lotsdraw";
import { Btn, H3, H5 } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useEffect, useRef, useState } from "react";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import { lotsdrawScheduleGet, lotsdrawsGet, lotsdrawUpdate } from "../../Service/lotsdraw";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";

const LotsDrawSchedule = ({ numberPerRound, numberOfTeam, sport_id, content_id, onCancel }: any) => {
    const [schedule, setSchedule] = useState<any>([]);

    const fetch_data = async () => {
        await lotsdrawScheduleGet(numberPerRound, sport_id, content_id).then((res) => {
            console.log(res.data);
            setSchedule(res.data);
        });
    };
    useEffect(() => {
        fetch_data();
        //
    }, []);
    const handleInputChange = (roundIndex: number, matchIndex: number, value: string) => {
        // Create a copy of the current schedule
        const newSchedule = [...schedule];
        // Update the specific match ticket
        newSchedule[roundIndex][matchIndex] = { ...newSchedule[roundIndex][matchIndex], ticket: value };
        // Update the state with the new schedule
        setSchedule(newSchedule);
    };
    const numberWay = ["I", "II", "III", "IV", "V", "VI"].slice(0, numberPerRound);
    return (
        <div>
            <Row className="d-flex">
                <Row className="d-flex align-items-center">
                    <Col md={2}>
                        <h4 className="text-center m-10">Đợt/ đường</h4>
                    </Col>

                    <Col md={10} className="d-flex justify-content-between  ">
                        {numberWay.map((way) => (
                            <Input className="text-center font-weight-bold border-0" readOnly value={way} />
                        ))}
                    </Col>
                </Row>

                {schedule.map((round: any, roundIndex: any) =>
                    round.length > 0 ? (
                        <Row className="d-flex align-items-center">
                            <Col md={2}>
                                <h4 className="text-center">Đợt {roundIndex + 1}</h4>
                            </Col>
                            <Col md={10} className=" d-flex justify-content-between align-items-center">
                                {round.map((match: any, matchIndex: any) => (
                                    <Input
                                        key={match + roundIndex + matchIndex}
                                        className="text-center "
                                        value={match.ticket}
                                        onChange={(e) => {
                                            handleInputChange(roundIndex, matchIndex, e.target.value);
                                        }}
                                    />

                                    // <div>
                                    //     {match[0].map((data: any, index: any) => (
                                    //         <p>{data}</p>
                                    //     ))}
                                    // </div>
                                ))}
                            </Col>
                        </Row>
                    ) : (
                        <></>
                    )
                )}
            </Row>
            <Col xs="12" className="gap-2 d-flex justify-content-center m-t-10">
                <Btn color="primary" type="button" onClick={() => {}}>
                    Xác nhận
                </Btn>
                {onCancel ? (
                    <Btn color="primary" type="button" onClick={onCancel}>
                        Đóng
                    </Btn>
                ) : null}
            </Col>
        </div>
    );
};

const InputGroupCell = ({ onConfirm }: any) => {
    const [numberRow, setNumberRow] = useState(0);
    const [numberColumn, setNumberColumn] = useState(0);

    return (
        <>
            <Row>
                <Col md={3} className="d-flex"></Col>
                <Col md={3} className="d-flex">
                    <InputGroup className="relative">
                        <InputGroupText>Số VĐV thi đấu 1 lượt</InputGroupText>
                        <Input
                            type="number"
                            className="text-center "
                            value={numberRow}
                            onChange={(e) => {
                                setNumberRow(parseInt(e.target.value));
                            }}
                        />
                    </InputGroup>
                </Col>
                <Col md={3} className="d-flex">
                    <InputGroup className="relative">
                        <InputGroupText>Số đợt thi đấu</InputGroupText>
                        <Input
                            type="number"
                            className="text-center "
                            value={numberColumn}
                            onChange={(e) => {
                                setNumberColumn(parseInt(e.target.value));
                            }}
                        />
                    </InputGroup>
                </Col>
                <Col md={3} className="d-flex"></Col>
            </Row>
            <div className="d-flex justify-content-center m-20">
                <Btn className={`bg-primary`} onClick={() => onConfirm()}>
                    Tạo lịch khóa thăm &nbsp;
                    <i className="fa fa-plus" />
                </Btn>
            </div>
        </>
    );
};

const useLotsDrawScheduleModal = ({ sportId, content_id, numberPerRound, numberOfTeam }: any) => {
    const [showInput, setShowInput] = useState(false);
    const [opened, setOpened] = useState(false);
    const handleToggle = () => {
        setOpened((s) => !s);
    };

    const LotsDrawScheduleModal = () => (
        <CommonModal modalBodyClassName=" text-start" isOpen={opened} toggle={handleToggle}>
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                {!showInput && <InputGroupCell onConfirm={() => setShowInput(true)} />}
                {showInput && (
                    <>
                        <H3 className="modal-header justify-content-center border-0">Lịch thi đấu</H3>
                        <LotsDrawSchedule
                            numberPerRound={numberPerRound}
                            numberOfTeam={numberOfTeam}
                            sport_id={sportId}
                            content_id={content_id}
                            onCancel={() => {
                                setShowInput(false);
                                setOpened(false);
                            }}
                        />
                    </>
                )}
            </div>
        </CommonModal>
    );

    return { LotsDrawScheduleModal, handleToggle };
};

export { LotsDrawSchedule, useLotsDrawScheduleModal };
