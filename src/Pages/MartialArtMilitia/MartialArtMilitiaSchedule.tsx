import { Col } from "reactstrap";
import { TLotsDraw } from "../../type/lotsdraw";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useEffect, useRef, useState } from "react";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import { lotsdrawsGet, lotsdrawUpdate } from "../../Service/lotsdraw";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";

const generatePlayers = (totalTeams: any, perRound: any) => {
    const players: string[] = [];
    const positions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M"].slice(0, totalTeams.length);
    positions.forEach((position) => {
        for (let i = 0; i <= perRound; i++) {
            players.push(`${totalTeams[i]}${position}`);
        }
    });
    return players;
};

const createSchedule = (players: any, playersPerRound: any) => {
    const numRounds = Math.ceil(players.length / playersPerRound);
    const schedule = [];
    let round = 0;
    let playerTicket = 0;
    while (round < numRounds) {
        const roundPlayers = [];

        // Select players for the current round without repeating any
        while (roundPlayers.length < playersPerRound && players.length > 0) {
            const player = players[playerTicket];
            roundPlayers.push(player);
            playerTicket++;
        }

        // Ensure each round is a valid match-up
        //roundPlayers =18
        // playersPerRound =6
        const roundMatches = [];
        if (roundPlayers.length < playersPerRound) {
            roundMatches.push(roundPlayers);
        } else {
            for (let i = 0; i < roundPlayers.length; i += playersPerRound) {
                if (i + playersPerRound <= roundPlayers.length) {
                    roundMatches.push(roundPlayers.slice(i, i + playersPerRound));
                }
            }
        }

        if (roundMatches.length > 0) {
            schedule.push(roundMatches);
            round++;
        }
    }

    return schedule;
};

const LotsDrawSchedule = ({ numberPerRound, numberOfTeam, onCancel }: any) => {
    const [schedule, setSchedule] = useState<any>([]);

    const playersPerRound = numberPerRound;
    const totalTeam = numberOfTeam.map((item: TLotsDraw) => item.team_name + " - Thăm " + item.ticket_index);
    useEffect(() => {
        console.log("số đội" + numberOfTeam);
        const players = generatePlayers(totalTeam, 3);
        console.log("số VĐV 1 lượt" + playersPerRound);
        console.log("Tổng số VĐV" + players);
        setSchedule(createSchedule(players, playersPerRound));
    }, []);
    console.log(schedule);
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>Lịch thi đấu</h1>
                <div className="rounded-[50%] p-1" onClick={() => onCancel()}>
                    <i className="icon-close " />
                </div>
            </div>
            <div className="d-flex">
                {schedule.map((round: any, index: any) => (
                    <div key={index} className="m-l-50">
                        <h4>Lượt {index + 1}</h4>
                        <div>
                            {round[0].map((match: any, index: any) => (
                                <p>{match}</p>

                                // <div>
                                //     {match[0].map((data: any, index: any) => (
                                //         <p>{data}</p>
                                //     ))}
                                // </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const useLotsDrawScheduleModal = ({ sportId, numberPerRound, numberOfTeam }: any) => {
    const [data, setData] = useState<TLotsDraw[]>([]);
    console.log("! lượt:" + numberPerRound);
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
        <CommonModal
            backdrop="static"
            size="xl"
            modalBodyClassName="social-profile text-start"
            isOpen={opened}
            toggle={handleToggle}
        >
            <LotsDrawSchedule
                numberPerRound={numberPerRound}
                numberOfTeam={numberOfTeam}
                onCancel={() => setOpened(false)}
            />
        </CommonModal>
    );

    return { LotsDrawScheduleModal, handleToggle };
};

export { LotsDrawSchedule, useLotsDrawScheduleModal };
