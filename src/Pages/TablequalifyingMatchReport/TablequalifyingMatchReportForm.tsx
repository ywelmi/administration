import { Col, Input, Label, Row } from "reactstrap";
import { useFormik } from "formik";
import { Btn, Popovers } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { TTablequalifyingMatchReport } from "../../type/tablequalifyingMatch";
import { NAME_CONVERSION } from "../../name-conversion";
import { ListSetReport, useSetReportPopover } from "./SetReport";

export interface ITablequalifyingMatchReportForm {
  tablequalifyingMatchReport?: Partial<TTablequalifyingMatchReport>;
  onSubmit: (tablequalifyingMatchReport: TTablequalifyingMatchReport) => void;
  onCancel?: () => void;
}

export interface ITablequalifyingMatchReportModal
  extends ITablequalifyingMatchReportForm {
}

interface ITablequalifyingMatchReportPopover
  extends ITablequalifyingMatchReportForm {}

const TablequalifyingMatchReportForm = (
  {
    tablequalifyingMatchReport: initTablequalifyingMatchReport,
    onSubmit,
    onCancel,
  }: ITablequalifyingMatchReportForm,
) => {
  const tablequalifyingMatchReport: Partial<TTablequalifyingMatchReport> =
    initTablequalifyingMatchReport ? initTablequalifyingMatchReport : {
      "id": "",
      "team1_point": 0,
      "team2_point": 0,
      "sets": [],
    };

  const { t } = useTranslation();
  const formik = useFormik<Partial<TTablequalifyingMatchReport>>({
    initialValues: { ...tablequalifyingMatchReport },
    onSubmit: (value) => {
      // console.log({ submitAddTablequalifyingMatchReportValue: value });
      let submitValue = {
        ...value,
      } as TTablequalifyingMatchReport;
      if (submitValue) onSubmit(submitValue);
    },
  });

  const { SetReportPopover, handleToggle: handleToggleAddSetReport } =
    useSetReportPopover({
      onSubmit: (v) => {
        const sets = formik.values.sets ?? [];
        formik.setFieldValue("sets", [...sets, v]);
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
            type="number"
            name="team2_point"
            defaultChecked
            value={formik.values.team2_point}
            onChange={formik.handleChange}
          />
        </Col>
        <SetReportPopover target="PopoversSetReport">
          <Btn
            color="secondary"
            type="button"
            id="PopoversSetReport"
            onClick={handleToggleAddSetReport}
          >
            Thêm mới séc
          </Btn>
        </SetReportPopover>
        <Col md="12" className="form-check checkbox-primary">
          <Label for="sets" check>{t("sets")}</Label>
          <ListSetReport items={formik.values.sets} />
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
const useTablequalifyingMatchReportModal = (
  { onSubmit, ...rest }: ITablequalifyingMatchReportModal,
) => {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (
    tablequalifyingMatchReport: TTablequalifyingMatchReport,
  ) => {
    onSubmit(tablequalifyingMatchReport);
    setOpened(false);
  };

  const TablequalifyingMatchReportModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <TablequalifyingMatchReportForm
        onSubmit={handleSubmit}
        {...rest}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { TablequalifyingMatchReportModal, handleToggle };
};

const useTablequalifyingMatchReportPopover = (
  { onSubmit, ...rest }: ITablequalifyingMatchReportPopover,
) => {
  const [opened, setOpened] = useState(false);

  const handleToggle = useCallback(() => {
    setOpened((s) => !s);
  }, []);

  const handleSubmit = (teammember: TTablequalifyingMatchReport) => {
    onSubmit(teammember);
    setOpened(false);
  };

  const TablequalifyingMatchReportPopover = (
    { children, target }: React.PropsWithChildren<{ target: string }>,
  ) => (
    <div>
      {children}
      <Popovers
        isOpen={opened}
        placement="auto"
        target={target}
        trigger="click"
      >
        <TablequalifyingMatchReportForm
          onSubmit={handleSubmit}
          {...rest}
          onCancel={() => setOpened(false)}
        />
      </Popovers>
    </div>
  );

  return { TablequalifyingMatchReportPopover, handleToggle };
};

export {
  TablequalifyingMatchReportForm,
  useTablequalifyingMatchReportModal,
  useTablequalifyingMatchReportPopover,
};
