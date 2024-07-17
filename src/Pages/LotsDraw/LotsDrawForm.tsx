import { Col } from "reactstrap";
import { TLotsDraw } from "../../type/lotsdraw";
import { Btn, Popovers } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useEffect, useRef, useState } from "react";
import {
  ITanTableRef,
  TanTable,
} from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import { lotsdrawsGet, lotsdrawUpdate } from "../../Service/lotsdraw";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";

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
const LotsDrawForm = (
  { lotsdraw, onCancel, onSubmit }: ILotsDrawForm,
) => {
  const columns: ColumnDef<TLotsDraw>[] = [
    {
      accessorKey: "team_name",
      footer: (props) => props.column.id,
      header: N["team_name"],
      cell(props) {
        return props.getValue();
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
      <TanTable
        ref={ref}
        data={lotsdraw}
        getRowId={getLotDrawId}
        columns={columns}
      />
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
        {onCancel
          ? (
            <Btn color="primary" type="button" onClick={onCancel}>
              Hủy
            </Btn>
          )
          : null}
      </Col>
    </div>
  );
};

const useLotsDrawModal = (
  { sportId, ...rest }: ILotsDrawModal,
) => {
  const [data, setData] = useState<TLotsDraw[]>([]);

  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (lotsdraw: TLotsDraw[]) => {
    lotsdrawUpdate(sportId, lotsdraw).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        console.log({ success: data });
        toast.success(N["success"]);
      }
    }).catch((err) => {
      console.log({ err });
      toast.error(N["failed"]);
    });
    setOpened(false);
  };

  useEffect(() => {
    if (sportId) {
      lotsdrawsGet(sportId).then((res) => {
        const { data, status } = res;
        console.log({ data });
        if (status === 200) setData(data);
      }).catch((err) => console.log({ err }));
    }
  }, [sportId]);

  const LotsDrawModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <LotsDrawForm
        lotsdraw={data}
        sportId={sportId}
        onSubmit={handleSubmit}
        {...rest}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { LotsDrawModal, handleToggle };
};

export { LotsDrawForm, useLotsDrawModal };
