import { Col } from "reactstrap";
import { TContentSport, TLotsDraw } from "../../type/lotsdraw";
import { Btn, H3 } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useEffect, useRef, useState } from "react";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import { getContentSport, lotsdrawsGet, lotsdrawsGetNotContentId, lotsdrawUpdate } from "../../Service/lotsdraw";
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
const UpdateLotsDrawForm = ({ sportId, contentId, onCancel, onSubmit }: any) => {
    const [data, setData] = useState<TLotsDraw[]>([]);
    useEffect(() => {
        if (sportId && contentId) {
            lotsdrawsGet(sportId, contentId)
                .then((res) => {
                    const { data, status } = res;
                    console.log({ data });
                    if (status === 200) setData(data);
                })
                .catch((err) => console.log({ err }));
        }
    }, []);
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
        <div className="justify-content-center">
            <TanTable ref={ref} data={data} getRowId={getLotDrawId} columns={columns} />
            <Col xs="12" className="gap-2 justify-content-center" style={{ display: "flex" }}>
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

const useUpdateLotsDrawModal = ({ sportId, content_id, onSubmit }: any) => {
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
                    toast.success("Chỉnh sửa bốc thăm đơn vị thành công");
                    onSubmit();
                } else {
                    toast.error(res.data);
                }
            })
            .catch((err) => {
                console.log({ err });
                toast.error(N["failed"] + "khi cập nhật bốc thăm" + err);
            });
        console.log("here");

        setOpened(false);
    };

    const UpdateLotsDrawModal = () => (
        <CommonModal modalBodyClassName=" text-start" isOpen={opened} toggle={handleToggle}>
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                <H3 className="modal-header justify-content-center border-0">Chỉnh sửa kết quả bốc thăm đơn vị </H3>
                <UpdateLotsDrawForm
                    sportId={sportId}
                    contentId={content_id}
                    onSubmit={handleSubmit}
                    onCancel={() => setOpened(false)}
                />
            </div>
        </CommonModal>
    );

    return { UpdateLotsDrawModal, handleToggle, handleSubmit };
};

export { UpdateLotsDrawForm, useUpdateLotsDrawModal };
