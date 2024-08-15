import { Col } from "reactstrap";
import { TLotsDraw } from "../../type/lotsdraw";
import { Btn, H3 } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useEffect, useRef, useState } from "react";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import { lotsdrawsGet, lotsdrawsGetNotContentId, lotsdrawUpdate } from "../../Service/lotsdraw";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { da } from "date-fns/locale";

interface ILotsDrawForm {
    lotsdraw: TLotsDraw[];
    onCancel?: () => void;
    sportId: string;
    onSubmit: (lotsdraw: TLotsDraw[]) => void;
}

interface ILotsDrawModal extends Omit<ILotsDrawForm, "lotsdraw" | "onSubmit"> {
    lotsdraw?: TLotsDraw[];
}

const getLotDrawId = (d: TLotsDraw) => d.id;
const LotsDrawForm = ({ lotsdraw, onCancel, onSubmit }: ILotsDrawForm) => {
    const columns: ColumnDef<TLotsDraw>[] = [
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
    const ref = useRef<ITanTableRef<TLotsDraw>>(null);
    return (
        <div>
            <TanTable ref={ref} data={lotsdraw} getRowId={getLotDrawId} columns={columns} />
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

const useLotsDrawModal = ({ sportId, content_id, onSubmit, ...rest }: any) => {
    const [data, setData] = useState<TLotsDraw[]>([]);

    const [opened, setOpened] = useState(false);
    const handleToggle = () => {
        setOpened((s) => !s);
    };

    const handleSubmit = (lotsdraw: TLotsDraw[]) => {
        const dataSubmit = lotsdraw.map((e: TLotsDraw) => {
            return {
                id: e.id,
                sport_id: e.sport_id,
                content_id: content_id,
                team_id: e.team_id,
                ticket_index: e.ticket_index,
                has_ranking: true,
            };
        });
        lotsdrawUpdate(sportId, content_id, dataSubmit)
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
        console.log(sportId + content_id);
        if (sportId) {
            lotsdrawsGetNotContentId(sportId)
                .then((res) => {
                    const { data, status } = res;
                    console.log({ data });
                    if (status === 200) setData(data);
                })
                .catch((err) => console.log({ err }));
        }
    }, [sportId, content_id]);

    const LotsDrawModal = () => (
        <CommonModal modalBodyClassName=" text-start" isOpen={opened} toggle={handleToggle}>
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                <H3 className="modal-header justify-content-center border-0">Cập nhật kết quả bốc thăm đơn vị</H3>
                <LotsDrawForm
                    lotsdraw={data}
                    sportId={sportId}
                    onSubmit={handleSubmit}
                    {...rest}
                    onCancel={() => setOpened(false)}
                />
            </div>
        </CommonModal>
    );

    return { LotsDrawModal, handleToggle, handleSubmit };
};

export { LotsDrawForm, useLotsDrawModal };
