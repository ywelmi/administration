import { Col } from "reactstrap";
import { TMartialArtMilitiaArmyGroupGet, TMartialArtMilitiaArmyGroupCreate } from "../../type/martialArtMilitia";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useCallback, useEffect, useRef, useState } from "react";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import {
    martialArtMilitiaArmyGroupGetLotsdraw,
    martialArtMilitiaArmyGroupGetUpdate,
} from "../../Service/martialArtMilitia";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { da } from "date-fns/locale";
import { TLotsDraw } from "../../type/lotsdraw";
import { getContentSport, lotsdrawScheduleUpdate } from "../../Service/lotsdraw";

interface IMartialArtMilitiaForm {
    MartialArtMilitia: TMartialArtMilitiaArmyGroupGet[];
    onCancel?: () => void;
    sportId: string;
    onSubmit: (MartialArtMilitia: TMartialArtMilitiaArmyGroupGet[]) => void;
}

interface IMartialArtMilitiaModal extends Omit<IMartialArtMilitiaForm, "MartialArtMilitia" | "onSubmit"> {
    MartialArtMilitia?: TMartialArtMilitiaArmyGroupGet[];
}

const getMartialArtMilitiaId = (d: TMartialArtMilitiaArmyGroupGet) => d.id;
const MartialArtMilitiaForm = ({ MartialArtMilitia, onCancel, onSubmit }: IMartialArtMilitiaForm) => {
    const columns: ColumnDef<TMartialArtMilitiaArmyGroupGet>[] = [
        {
            accessorKey: "team_name",
            footer: (props) => props.column.id,
            header: N["team_name"],
            cell(props) {
                return <div className="form-control">{props.getValue() as string}</div>;
            },
        },
        {
            accessorKey: "ticket_index",
            footer: (props) => props.column.id,
            header: N["ticket_index"],
        },
    ];
    const ref = useRef<ITanTableRef<TMartialArtMilitiaArmyGroupGet>>(null);
    return (
        <div>
            <TanTable ref={ref} data={MartialArtMilitia} getRowId={getMartialArtMilitiaId} columns={columns} />
            <Col xs="12" className="gap-2" style={{ display: "flex" }}>
                <Btn
                    color="primary"
                    type="button"
                    onClick={() => {
                        const data = ref.current?.getData();
                        if (data) {
                            onSubmit(data);
                        }
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

const useMartialArtMilitiaModal = ({ sportId, onSubmit, ...rest }: any) => {
    const [data, setData] = useState<TMartialArtMilitiaArmyGroupGet[]>([]);

    const [opened, setOpened] = useState(false);
    const handleToggle = () => {
        setOpened((s) => !s);
    };
    const fetch_data = () => {
        if (sportId) {
            martialArtMilitiaArmyGroupGetLotsdraw(sportId).then((res) => {
                console.log(res);
                setData(res.data);
            });
        }
    };

    useEffect(() => {
        console.log("come here");
        fetch_data();
    }, [sportId]);
    const handleSubmit = (MartialArtMilitia: TLotsDraw[]) => {
        const dataSubmit = MartialArtMilitia.map((e: TLotsDraw) => {
            return {
                id: e.id,
                sport_id: e.sport_id,

                team_id: e.team_id,
                ticket_index: e.ticket_index,
                has_ranking: true,
            };
        });
        martialArtMilitiaArmyGroupGetUpdate(dataSubmit)
            .then((res) => {
                const { data, status } = res;
                if (status === 200) {
                    console.log({ data });

                    getContentSport(sportId).then((res) => {
                        console.log(res);
                        if (res.status == 200) {
                            res.data.forEach((element: any) => {
                                lotsdrawScheduleUpdate(1, 1000, sportId, element.id);
                            });
                        }
                    });
                    toast.success(N["success"]);
                }
            })
            .catch((err) => {
                console.log({ err });
                toast.error(err.data);
            });
        console.log("hello");
        onSubmit();

        setOpened(false);
    };

    const MartialArtMilitiaModal = () => (
        <CommonModal
            backdrop="static"
            modalBodyClassName="social-profile text-start"
            isOpen={opened}
            toggle={handleToggle}
        >
            <MartialArtMilitiaForm
                MartialArtMilitia={data}
                sportId={sportId}
                onSubmit={handleSubmit}
                {...rest}
                onCancel={() => setOpened(false)}
            />
        </CommonModal>
    );

    return { MartialArtMilitiaModal, handleToggle, handleSubmit };
};

export { MartialArtMilitiaForm, useMartialArtMilitiaModal };
