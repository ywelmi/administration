import { Col } from "reactstrap";
import { TMartialArtMilitiaArmyGroupGet, TMartialArtMilitiaArmyGroupCreate } from "../../type/martialArtMilitia";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useEffect, useRef, useState } from "react";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import { martialArtMilitiaArmyGroupGetAll, martialArtMilitiaArmyGroupGetUpdate } from "../../Service/martialArtMilitia";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { da } from "date-fns/locale";
import { TLotsDraw } from "../../type/lotsdraw";

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
            accessorKey: "name",
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

    const handleSubmit = (MartialArtMilitia: TLotsDraw[]) => {
        martialArtMilitiaArmyGroupGetUpdate(MartialArtMilitia)
            .then((res) => {
                const { data, status } = res;
                if (status === 200) {
                    console.log("HHHHHHHHHHHH");
                    console.log({ data });
                    console.log("HHHHHHHHHHHH");
                    onSubmit();
                    toast.success(N["success"]);
                }
            })
            .catch((err) => {
                console.log({ err });
                toast.error(N["failed"]);
            });
        setOpened(false);
    };

    useEffect(() => {
        martialArtMilitiaArmyGroupGetAll()
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => console.log({ err }));
    }, []);

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
