import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Col, Input, Label, Row } from "reactstrap";
import { Btn, Popovers } from "../../AbstractElements";
import { NAME_CONVERSION } from "../../name-conversion";
import DataTable from "react-data-table-component";
import { useState } from "react";

type TSetReport = {
  "team1_point": number;
  "team2_point": number;
  "note"?: string;
};

interface IListSetReport {
  items?: TSetReport[];
}

const ListSetReport = ({ items = [] }: IListSetReport) => {
  const columns = ([
    "stt",
    "team1_point",
    "team2_point",
    "note",
  ] as (keyof TSetReport)[]).map((c) => ({
    name: NAME_CONVERSION[c],
    sortable: true,
    sortable: true,
    selector: (row: TSetReport) => {
      return (row?.[c] ? row?.[c] : "") as string;
    },
  }));

  const renderData = items.map((item, i) => ({ stt: i, ...item }));
  // columns.push({name: NAME_CONVERSION['stt'], sortable: true, sortable: true, selector: (row) => row.id})
  return (
    <div className="table-responsive">
      <DataTable
        columns={columns}
        data={renderData}
        pagination
        subHeader
        // subHeaderComponent={subHeaderComponentMemo}
        highlightOnHover
        striped
        persistTableHead
        selectableRowsHighlight
        // onRowClicked={onRowSelect}
        // onSelectedRowsChange={onSelectedRowsChange}
        // selectableRows={!!onRowSelect || !!onSelectedRowsChange}
        // progressPending={loading}
      />
    </div>
  );
};

interface ISetReport {
  setReport?: TSetReport;
  onSubmit: (v: TSetReport) => void;
  onCancel?: () => void;
}

interface ISetReportPopover extends ISetReport {}

const SetReportForm = (
  { setReport: initSetReport, onSubmit, onCancel }: ISetReport,
) => {
  const setReport: TSetReport = initSetReport ? initSetReport : {
    "team1_point": 0,
    "team2_point": 0,
    "note": "",
  };

  const { t } = useTranslation();

  const formik = useFormik<TSetReport>({
    initialValues: { ...setReport },
    onSubmit: (v) => {
      onSubmit(v);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        <Col md="12" className="form-check checkbox-primary">
          <Label for="team1_point" check>{t("team1_point")}</Label>
          <Input
            id="indexs"
            type="number"
            name="team1_point"
            defaultChecked
            value={formik.values.team1_point}
            onChange={formik.handleChange}
          />
        </Col>
        <Col md="12" className="form-check checkbox-primary">
          <Label for="team2_point" check>{t("team2_point")}</Label>
          <Input
            id="indexs"
            name="team2_point"
            type="number"
            defaultChecked
            value={formik.values.team2_point}
            onChange={formik.handleChange}
          />
        </Col>
        <Col md="12" className="form-check checkbox-primary">
          <Label for="note" check>{t("note")}</Label>
          <Input
            id="indexs"
            type="text"
            name="note"
            defaultChecked
            value={formik.values.note}
            onChange={formik.handleChange}
          />
        </Col>
        <Col xs="12" className="gap-2" style={{ display: "flex" }}>
          <Btn color="primary" type="submit">
            Xác nhận
          </Btn>
          {onCancel
            ? <Btn color="primary" type="button" onClick={onCancel}>Hủy</Btn>
            : null}
        </Col>
      </Row>
    </form>
  );
};

const useSetReportPopover = ({ onSubmit, ...rest }: ISetReportPopover) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (teammember: TSetReport) => {
    onSubmit(teammember);
    setOpened(false);
  };

  const SetReportPopover = (
    { children, target }: React.PropsWithChildren<{ target: string }>,
  ) => (
    <div>
      {children}
      <Popovers
        isOpen={opened}
        placement="right-end"
        target={target}
        trigger="click"
      >
        <SetReportForm
          onSubmit={handleSubmit}
          {...rest}
          onCancel={() => setOpened(false)}
        />
      </Popovers>
    </div>
  );

  return { SetReportPopover, handleToggle };
};

export { ListSetReport, useSetReportPopover };
