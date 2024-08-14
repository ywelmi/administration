import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Input, Label, Row } from "reactstrap";
import * as Yup from "yup";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { TTablequalifyingMatchReport } from "../../type/tablequalifyingMatch";
import { ListSetReport, useSetReportPopover } from "./SetReport";

const Schema = Yup.object({
  id: Yup.string(),
  team1_point: Yup.number().required(),
  team2_point: Yup.number().required(),
  sets: Yup.array(
    Yup.object({
      team1_point: Yup.number(),
      team2_point: Yup.number(),
      note: Yup.string().optional(),
    })
  )
    .min(1)
    .required("Required"),
});

export interface ITablequalifyingMatchReportForm {
  tablequalifyingMatchReport?: Partial<TTablequalifyingMatchReport>;
  onSubmit: (tablequalifyingMatchReport: TTablequalifyingMatchReport) => void;
  onCancel?: () => void;
}

export interface ITablequalifyingMatchReportModal
  extends ITablequalifyingMatchReportForm {}

const TablequalifyingMatchReportForm = ({
  tablequalifyingMatchReport: initTablequalifyingMatchReport,
  onSubmit,
  onCancel,
}: ITablequalifyingMatchReportForm) => {
  const tablequalifyingMatchReport: Partial<TTablequalifyingMatchReport> =
    initTablequalifyingMatchReport
      ? initTablequalifyingMatchReport
      : {
          id: "",
          team1_point: 0,
          team2_point: 0,
          sets: [],
        };

  const { t } = useTranslation();
  const formik = useFormik<Partial<TTablequalifyingMatchReport>>({
    initialValues: { ...tablequalifyingMatchReport },
    onSubmit: (value) => {
      // console.log({ submitAddTablequalifyingMatchReportValue: value });
      const submitValue = {
        id: value.id,
        team1_point: value.team1_point,
        team2_point: value.team2_point,
        sets: value.sets,
      } as TTablequalifyingMatchReport;
      if (submitValue) onSubmit(submitValue);
    },
    validationSchema: Schema,
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
          <Label for="team1_point" check>
            {tablequalifyingMatchReport?.team1_name || t("team1_point")}
          </Label>
          <Input
            id="indexs"
            type="number"
            name="team1_point"
            defaultChecked
            className={`${
              formik.errors.team1_point ? "is-invalid" : "is-valid"
            }`}
            value={formik.values.team1_point}
            onChange={formik.handleChange}
          />
        </Col>
        <Col md="12" className="form-check checkbox-primary">
          <Label for="team2_point" check>
            {tablequalifyingMatchReport?.team2_name || t("team2_point")}
          </Label>
          <Input
            id="indexs"
            type="number"
            name="team2_point"
            defaultChecked
            className={`${
              formik.errors.team1_point ? "is-invalid" : "is-valid"
            }`}
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
        {formik.errors.sets ? (
          <div className="invalid-text">Mời nhập séc</div>
        ) : null}
        <Col md="12" className="form-check checkbox-primary">
          <Label for="sets" check>
            {t("sets")}
          </Label>
          <ListSetReport items={formik.values.sets} />
        </Col>

        <Col xs="12" className="gap-2" style={{ display: "flex" }}>
          <Btn color="primary" type="submit">
            Xác nhận
          </Btn>
          {onCancel ? (
            <Btn color="primary" type="button" onClick={onCancel}>
              Đóng
            </Btn>
          ) : null}
        </Col>
      </Row>
    </form>
  );
};
const useTablequalifyingMatchReportModal = ({
  onSubmit,
  ...rest
}: ITablequalifyingMatchReportModal) => {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (
    tablequalifyingMatchReport: TTablequalifyingMatchReport
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

export { TablequalifyingMatchReportForm, useTablequalifyingMatchReportModal };
