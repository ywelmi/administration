import { Col, Row } from "reactstrap";
import { TLotsDraw } from "../../type/lotsdraw";
import { Btn, H3 } from "../../AbstractElements";
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
            setSchedule(res.data);
        });
    };
    useEffect(() => {
        fetch_data();
        //
    }, []);
    console.log(schedule);
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="rounded-[50%] p-1" onClick={() => onCancel()}>
                    <i className="icon-close " />
                </div>
            </div>
            <Row className="d-flex w-100">
                {schedule.map((round: any, index: any) =>
                    round.length > 0 ? (
                        <Col md={4} className="border border-2">
                            <h4 className="text-center m-10">Đợt {index + 1}</h4>
                            <div>
                                {round.map((match: any, index: any) => (
                                    <p>
                                        Làn {index + 1} : {match.team_name + " - " + match.ticket}
                                    </p>

                                    // <div>
                                    //     {match[0].map((data: any, index: any) => (
                                    //         <p>{data}</p>
                                    //     ))}
                                    // </div>
                                ))}
                            </div>
                        </Col>
                    ) : (
                        <></>
                    )
                )}
            </Row>
        </div>
    );
};

const useLotsDrawScheduleModal = ({ sportId, content_id, numberPerRound, numberOfTeam }: any) => {
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

    const LotsDrawScheduleModal = () => (
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

    return { LotsDrawScheduleModal, handleToggle };
};

export { LotsDrawSchedule, useLotsDrawScheduleModal };
