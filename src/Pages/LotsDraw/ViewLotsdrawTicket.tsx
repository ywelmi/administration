import { Col, Input, Row } from "reactstrap";
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
            <div className="d-flex justify-content-between">
                <div className="rounded-[50%] p-1" onClick={() => onCancel()}>
                    <i className="icon-close " />
                </div>
            </div>
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
        </div>
    );
};

const useViewLotsDrawScheduleModal = ({ sportId, content_id, numberPerRound, numberOfTeam }: any) => {
    const [data, setData] = useState<TLotsDraw[]>([]);

    const [opened, setOpened] = useState(false);
    const handleToggle = () => {
        setOpened((s) => !s);
    };

    // const handleSubmit = (lotsdraw: TLotsDraw[]) => {
    //     lotsdrawUpdate(sportId, lotsdraw)
    //         .then((res) => {
    //             const { data, status } = res;
    //             if (status === 200) {
    //                 console.log({ success: data });
    //                 toast.success(N["success"]);
    //             }
    //         })
    //         .catch((err) => {
    //             console.log({ err });
    //             toast.error(N["failed"]);
    //         });
    //     setOpened(false);
    // };

    // useEffect(() => {
    //     if (sportId) {
    //         lotsdrawsGet(sportId)
    //             .then((res) => {
    //                 const { data, status } = res;
    //                 console.log({ data });
    //                 if (status === 200) setData(data);
    //             })
    //             .catch((err) => console.log({ err }));
    //     }
    // }, [sportId]);

    const ViewLotsDrawScheduleModal = () => (
        <CommonModal modalBodyClassName=" text-start" isOpen={opened} toggle={handleToggle}>
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                <H3 className="modal-header justify-content-center border-0">Lịch thi đấu</H3>
                <LotsDrawSchedule
                    numberPerRound={numberPerRound}
                    numberOfTeam={numberOfTeam}
                    sport_id={sportId}
                    content_id={content_id}
                    onCancel={() => setOpened(false)}
                />
            </div>
        </CommonModal>
    );

    return { ViewLotsDrawScheduleModal, handleToggle };
};

export { LotsDrawSchedule, useViewLotsDrawScheduleModal };
