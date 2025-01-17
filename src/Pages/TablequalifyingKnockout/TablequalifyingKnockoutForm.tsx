import { useFormik } from "formik";
import { forwardRef, useImperativeHandle, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Input, Label, Media, Row } from "reactstrap";
import { Btn } from "../../AbstractElements";
import { InputSelect } from "../../Component/InputSelect";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { IKnockoutCreate } from "../../type/tablequalifyingKnockout";

interface ItablequalifyingKnockoutForm {
  tablequalifyingKnockout?: IKnockoutCreate;
  onSubmit: (tablequalifyingKnockout: IKnockoutCreate) => void;
  onCancel?: () => void;
}

interface ItablequalifyingKnockoutModal extends ItablequalifyingKnockoutForm {}

const TablequalifyingKnockoutForm = ({
  tablequalifyingKnockout: initTablequalifyingKnockout,
  onSubmit,
  onCancel,
}: ItablequalifyingKnockoutForm) => {
  const tablequalifyingKnockout = initTablequalifyingKnockout
    ? initTablequalifyingKnockout
    : {
        number_team: 0,
        has_grade_3rd: false,
        sport_id: "",
      };

  // console.log({ tablequalifyingKnockout });
  const { knockoutSports: sports } = useKnockoutContext();
  const { t } = useTranslation();
  const formik = useFormik<IKnockoutCreate>({
    initialValues: { ...tablequalifyingKnockout },
    onSubmit: (submitValue) => {
      console.log({
        submitAddtablequalifyingKnockoutKnockoutValue: submitValue,
      });
      if (submitValue) onSubmit(submitValue);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        <Col md="12" className="form-check checkbox-primary">
          <Label for="number_team" check>
            {t("number_team")}
          </Label>
          <Input
            id="number_team"
            type="text"
            defaultChecked
            value={formik.values.number_team}
            onChange={formik.handleChange}
          />
        </Col>
        <Col md="12" className="form-check">
          <Media className="switch-outline align-items-center gap-3">
            <Label for="has_grade_3rd">Có giải 3</Label>
            <Label className="switch mb-0">
              <Input
                name="has_grade_3rd"
                type="checkbox"
                defaultChecked={false}
                onChange={() => {
                  const checked = formik.values.has_grade_3rd;
                  formik.setFieldValue("has_grade_3rd", !checked);
                }}
              />
              <span className={`switch-state bg-success`}></span>
            </Label>
          </Media>
        </Col>

        <Col md="12" className="form-check checkbox-primary">
          <Label for="sport" check>
            {t("sport")}
          </Label>
          {/* <ListSport data={sports} /> */}
          <InputSelect
            title="Cuộc thi"
            data={sports}
            k="name"
            name="sport_id"
            v="id"
            handleChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.sport_id}
          />
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

const useTablequalifyingKnockout = ({
  onSubmit,
  ...rest
}: ItablequalifyingKnockoutModal) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (tablequalifyingKnockout: IKnockoutCreate) => {
    onSubmit(tablequalifyingKnockout);
    setOpened(false);
  };
  const TablequalifyingKnockoutModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <TablequalifyingKnockoutForm
        onSubmit={handleSubmit}
        {...rest}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { TablequalifyingKnockoutModal, handleToggle };
};

import { TTablequalifyingMatchReport } from "../../type/tablequalifyingMatch";
import { useMatchTurnModal } from "../MatchTurn/hook";
import {
  ListSetReport,
  useSetReportPopover,
} from "../TableQualifyingMatchReport/SetReport";
import { useKnockoutContext } from "./context";

export interface ITablequalifyingKnockoutMatchReportForm {
  tablequalifyingKnockoutMatchReport?: Partial<TTablequalifyingMatchReport>;
  onSubmit: (tablequalifyingMatchReport: TTablequalifyingMatchReport) => void;
  onCancel?: () => void;
}

export interface ITablequalifyingMatchReportModal
  extends ITablequalifyingKnockoutMatchReportForm {}

const TablequalifyingKnockoutMatchReportForm = ({
  tablequalifyingKnockoutMatchReport: initTablequalifyingMatchReport,
  onSubmit,
  onCancel,
}: ITablequalifyingKnockoutMatchReportForm) => {
  const tablequalifyingMatchReport: Partial<TTablequalifyingMatchReport> =
    initTablequalifyingMatchReport
      ? initTablequalifyingMatchReport
      : {
          id: "",
          sets: [],
        };

  const { t } = useTranslation();
  const formik = useFormik<Partial<TTablequalifyingMatchReport>>({
    initialValues: { ...tablequalifyingMatchReport },
    onSubmit: (value) => {
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

const useTablequalifyingKnockoutMatchReportModal = ({
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

  const TablequalifyingKnockoutMatchReportModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <TablequalifyingKnockoutMatchReportForm
        onSubmit={handleSubmit}
        {...rest}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { TablequalifyingKnockoutMatchReportModal, handleToggle };
};

export const TablequalifyingKnockoutMatchReportModal = forwardRef(
  ({ onClose }: { onClose?: () => void }, ref) => {
    const [opened, setOpened] = useState(false);

    const handleToggle = () => {
      setOpened((s) => !s);
      onClose?.();
    };

    useImperativeHandle(ref, () => ({ handleToggle }));

    // const handleSubmit = (
    //   tablequalifyingMatchReport: TTablequalifyingMatchReport
    // ) => {
    //   onSubmit(tablequalifyingMatchReport);
    //   setOpened(false);
    // };

    // const { increaseCounter } = useTablequalifyingMatchStore();
    const { open: openModal, ListMatchTurn } = useMatchTurnModal({ onClose });

    return (
      <div>
        <button
          color="primary"
          type="button"
          className="cnf-btn"
          style={{ fontSize: "10" }}
          // onClick={() => setOpened(true)}
          onClick={openModal}
        >
          {/* <i className="icon-info-alt" /> */}
          Cập nhật kết quả
        </button>
        <ListMatchTurn />
      </div>
    );
  }
);

export {
  TablequalifyingKnockoutForm,
  TablequalifyingKnockoutMatchReportForm,
  useTablequalifyingKnockout,
  useTablequalifyingKnockoutMatchReportModal,
};
