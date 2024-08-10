import { Col } from "reactstrap";
import { TMartialArtMilitiaArmyGroupGet, TMartialArtMilitiaArmyGroupCreate } from "../../type/martialArtMilitia";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useCallback, useEffect, useRef, useState } from "react";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import {
    martialArtMilitiaArmyGroupGetAll,
    martialArtMilitiaArmyGroupGetInsertPoint,
    martialArtMilitiaArmyGroupGetLotsdraw,
    martialArtMilitiaArmyGroupGetUpdate,
} from "../../Service/martialArtMilitia";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { da } from "date-fns/locale";
import { TLotsDraw } from "../../type/lotsdraw";

interface IMartialArtMilitiaFormResult {
    MartialArtMilitia: TMartialArtMilitiaArmyGroupGet[];
    onCancel?: () => void;
    sportId: string;
    onSubmit: (MartialArtMilitia: TMartialArtMilitiaArmyGroupGet[]) => void;
}

interface IMartialArtMilitiaModal extends Omit<IMartialArtMilitiaFormResult, "MartialArtMilitia" | "onSubmit"> {
    MartialArtMilitia?: TMartialArtMilitiaArmyGroupGet[];
}

const getMartialArtMilitiaId = (d: TMartialArtMilitiaArmyGroupGet) => d.id;
const MartialArtMilitiaFormResult = ({ MartialArtMilitia, onCancel, onSubmit }: IMartialArtMilitiaFormResult) => {
    const columns: ColumnDef<TMartialArtMilitiaArmyGroupGet>[] = [
        {
            accessorKey: "name",
            footer: (props) => props.column.id,
            header: N["team_name"],
            cell(props) {
                return <div className="form-control">{props.getValue() as string}</div>;
            },
        },
        {
            accessorKey: "point",
            footer: (props) => props.column.id,
            header: "Điểm thi đấu",
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

const useMartialArtMilitiaResultModal = ({ sportId, org_id, onSubmit, ...rest }: any) => {
    const [data, setData] = useState<TMartialArtMilitiaArmyGroupGet[]>([]);

    const [opened, setOpened] = useState(false);
    const handleToggle = () => {
        setOpened((s) => !s);
    };
    const fetch_data = useCallback(() => {
        (async () => {
            const contents = await martialArtMilitiaArmyGroupGetInsertPoint(org_id, sportId).then((res) => {
                return res.data.data;
            });
            console.log(contents);
            setData(contents);
        })();
    }, []);

    useEffect(() => {
        fetch_data();
    }, []);
    const handleSubmit = (MartialArtMilitia: TLotsDraw[]) => {
        martialArtMilitiaArmyGroupGetUpdate(MartialArtMilitia)
            .then((res) => {
                const { data, status } = res;
                if (status === 200) {
                    console.log({ data });

                    onSubmit();
                    toast.success(N["success"]);
                }
            })
            .catch((err) => {
                console.log({ err });
                toast.error(err.data);
            });
        setOpened(false);
    };

    const MartialArtMilitiaModal = () => (
        <CommonModal
            backdrop="static"
            modalBodyClassName="social-profile text-start"
            isOpen={opened}
            toggle={handleToggle}
        >
            <MartialArtMilitiaFormResult
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

export { MartialArtMilitiaFormResult, useMartialArtMilitiaResultModal };
