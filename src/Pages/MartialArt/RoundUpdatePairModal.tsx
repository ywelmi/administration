import { Col } from "reactstrap";
import { TTablequalifyingKnockout } from "../../type/tablequalifyingKnockout";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useRef, useState } from "react";
import { InputSelect } from "../../Component/InputSelect";
import ReactDatePicker from "react-datepicker";
import { DTime } from "../../type/enum";
import { N } from "../../name-conversion";
import {
  ITanTableRef,
  TanTable,
} from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";

interface IRoundUpdatePairForm {
  knockoutRoundPairs?: TTablequalifyingKnockout[];
  onSubmit: (tablequalifyingKnockouts: TTablequalifyingKnockout[]) => void;
  onCancel?: () => void;
}

interface IRoundUpdateModal extends IRoundUpdatePairForm {}

const getLotDrawId = (d: TTablequalifyingKnockout) => d.id;

const RoundUpdatePairForm = ({
  knockoutRoundPairs,
  onSubmit,
  onCancel,
}: IRoundUpdatePairForm) => {
  console.log({ knockoutRoundPairs });
  const columns: ColumnDef<TTablequalifyingKnockout>[] = [
    {
      accessorKey: "indexs",
      footer: (props) => props.column.id,
      header: "Trận",
      cell(props) {
        return props.getValue();
      },
    },
    {
      accessorKey: "member1_name",
      footer: (props) => props.column.id,
      header: N["member1_name"],
      cell(props) {
        return props.getValue();
      },
    },
    {
      accessorKey: "member2_name",
      footer: (props) => props.column.id,
      header: N["member2_name"],
      cell(props) {
        return props.getValue();
      },
    },
    {
      accessorKey: "match_day",
      footer: (props) => props.column.id,
      header: N["match_day"],
      cell({ getValue, row: { index }, column: { id }, table }) {
        const v = getValue() as string;
        return (
          <ReactDatePicker
            className="form-control"
            name="match_day"
            selected={v ? new Date(v) : undefined}
            // value={convertToDate(v ? new Date(v) : new Date())}
            onChange={(date) =>
              table.options.meta?.updateData(index, id, date?.toISOString())
            }
            locale={"vi"}
            dateFormat={"dd/MM/yyyy"}
          />
        );
      },
    },
    {
      accessorKey: "match_hour",
      footer: (props) => props.column.id,
      header: N["match_hour"],
      cell({ row: { index, original }, column: { id }, table }) {
        return (
          <ReactDatePicker
            className="form-control"
            name="match_hour"
            // selected={new Date(original.match_date as string || new Date())}
            value={original.match_hour}
            onChange={(date) =>
              table.options.meta?.updateData(
                index,
                id,
                `${date?.getHours()}:${date?.getMinutes()}`
              )
            }
            showTimeSelect
            showTimeSelectOnly
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Giờ"
            locale={"vi"}
          />
        );
      },
    },
    {
      accessorKey: "match_location",
      footer: (props) => props.column.id,
      header: "Địa điểm",
    },
    {
      accessorKey: "match_time",
      footer: (props) => props.column.id,
      header: N["match_time"],
      cell({ row: { index, original }, column: { id }, table }) {
        return (
          <InputSelect
            name="match_time"
            data={DTime}
            value={original.match_time}
            k="k"
            v="v"
            handleChange={(e) => {
              table.options.meta?.updateData(index, id, e.target.value);
            }}
          />
        );
      },
    },
  ];
  const ref = useRef<ITanTableRef<TTablequalifyingKnockout>>(null);
  return (
    <div>
      <TanTable
        ref={ref}
        data={knockoutRoundPairs}
        getRowId={getLotDrawId}
        columns={columns}
      />
      <Col xs="12" className="gap-2" style={{ display: "flex" }}>
        <Btn
          color="primary"
          type="button"
          onClick={() => {
            const data = ref.current?.getData();
            // console.log({data})
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

const useRoundUpdateModal = ({ onSubmit, ...rest }: IRoundUpdateModal) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (knockoutPairs: TTablequalifyingKnockout[]) => {
    console.log({ knockoutPairs });
    onSubmit(knockoutPairs);
    setOpened(false);
  };

  const RoundKnockoutModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <RoundUpdatePairForm
        onSubmit={handleSubmit}
        {...rest}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { RoundKnockoutModal, handleToggle };
};

export { useRoundUpdateModal };
