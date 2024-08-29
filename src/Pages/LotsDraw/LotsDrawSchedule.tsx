import { Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import { TLotsDraw, TLotsDrawMatrix } from "../../type/lotsdraw";
import { Btn, H3, H5 } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useEffect, useRef, useState } from "react";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import {
    lotsdrawScheduleConfirm,
    lotsdrawScheduleGet,
    lotsdrawScheduleUpdate,
    lotsdrawsGet,
    lotsdrawUpdate,
} from "../../Service/lotsdraw";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { forEach } from "lodash";
import { t } from "i18next";

const LotsDrawSchedule = ({ member_count, turn_count, sport_id, content_id, onCancel }: any) => {
    const [schedule, setSchedule] = useState<any>([]);
    const [validConfirm, setValidConfirm] = useState<any>(true);
    const listTicketValid = useRef([]);
    const [matrix, setMatrix] = useState<any>(
        Array.from({ length: turn_count }, () => Array(member_count).fill({ ticket: "", id: undefined }))
    );
    const fetch_data = async () => {
        const listTicket = await lotsdrawScheduleUpdate(member_count, turn_count, sport_id, content_id).then((res) => {
            setSchedule(res.data);
            return res.data;
        });

        listTicket.lst_member_ticket.forEach((ticket: TLotsDrawMatrix) => {
            if (ticket.turn > 0 && ticket.turn_index > 0) {
                updateMatrix(
                    ticket.turn - 1,
                    ticket.turn_index - 1,
                    ticket.ticket_index.toString() + ticket.ticket_code,
                    ticket.id
                );
            }
        });

        listTicketValid.current = listTicket.lst_member_ticket
            .map((e: any) => {
                if (e.ticket_index && e.ticket_code) {
                    return e.ticket_index + e.ticket_code;
                }
            })
            .filter((item: any) => item !== undefined);
    };
    const updateListTicketMatrix = () => {
        var newListTicket: { id: any; content_id: any; turn: any; turn_index: any }[] = [];

        matrix.forEach((round: any, indexRound: any) => {
            round.forEach((match: any, indexMatch: any) => {
                if (match.ticket != "") {
                    var newItem = schedule.lst_member_ticket.filter(
                        (item: TLotsDrawMatrix) => item.ticket_index + item.ticket_code == match.ticket
                    )[0];
                    console.log(
                        schedule.lst_member_ticket.filter(
                            (item: TLotsDrawMatrix) => item.ticket_index + item.ticket_code == match.ticket
                        )
                    );
                    newListTicket.push({
                        id: newItem.id,
                        content_id: newItem.content_id,
                        turn: indexRound + 1,
                        turn_index: indexMatch + 1,
                    });
                }
            });
        });
        lotsdrawScheduleConfirm(newListTicket, content_id).then(async (res) => {
            if (res.status == 200) {
                toast.success("Cập nhật khóa thăm thành công");
                await fetch_data();
            } else {
                toast.error(res.data);
            }
        });
    };
    useEffect(() => {
        fetch_data();
    }, []);
    const updateMatrix = (roundIndex: number, matchIndex: number, ticket: string, id?: string) => {
        // Create a copy of the current schedule
        const newSchedule = [...matrix];
        // Update the specific match ticket
        newSchedule[roundIndex][matchIndex] = {
            ...newSchedule[roundIndex][matchIndex],
            ticket: ticket,
            id: id,
        };
        // Update the state with the new schedule

        setMatrix(newSchedule);
        if (!checkValidTicket(ticket)) {
            setValidConfirm(false);
        } else {
            setValidConfirm(true);
        }
    };
    const checkValidTicket = (ticket: string) => {
        if (listTicketValid.current!.filter((e) => e == ticket.trim()).length == 0) {
            return false;
        } else {
            return true;
        }
    };
    const numberWay = ["I", "II", "III", "IV", "V", "VI"].slice(0, member_count);
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

                {matrix.map((round: any, roundIndex: any) =>
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
                                            updateMatrix(roundIndex, matchIndex, e.target.value);
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
                <Btn
                    color="primary"
                    type="button"
                    onClick={() => {
                        validConfirm ? updateListTicketMatrix() : toast.error("Sai định dạng");
                    }}
                >
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
                <Btn className={`bg-primary`} onClick={() => onConfirm(numberRow, numberColumn)}>
                    Tạo lịch khóa thăm &nbsp;
                    <i className="fa fa-plus" />
                </Btn>
            </div>
        </>
    );
};

const useLotsDrawScheduleModal = ({ sportId, content_id }: any) => {
    const [showInput, setShowInput] = useState(false);
    const [numberRow, setNumberRow] = useState(0);
    const [numberColumn, setNumberColumn] = useState(0);
    const [opened, setOpened] = useState(false);
    const handleToggle = () => {
        setOpened((s) => !s);
    };

    const LotsDrawScheduleModal = () => (
        <CommonModal modalBodyClassName=" text-start" isOpen={opened} toggle={handleToggle}>
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                {!showInput && (
                    <InputGroupCell
                        onConfirm={(row: any, column: any) => {
                            setShowInput(true);
                            setNumberRow(row);
                            setNumberColumn(column);
                        }}
                    />
                )}
                {showInput && (
                    <>
                        <H3 className="modal-header justify-content-center border-0">Lịch thi đấu</H3>
                        <LotsDrawSchedule
                            member_count={numberRow}
                            turn_count={numberColumn}
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
