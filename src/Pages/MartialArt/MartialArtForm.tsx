import { Col, Input, Label, Media, Row } from "reactstrap";
import { IKnockoutCreate } from "../../type/tablequalifyingKnockout";
import { useFormik } from "formik";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { InputSelect } from "../../Component/InputSelect";

interface ItablequalifyingKnockoutForm {
  tablequalifyingKnockout?: IKnockoutCreate;
  onSubmit: (
    tablequalifyingKnockout: IKnockoutCreate,
  ) => void;
  onCancel?: () => void;
}

interface ItablequalifyingKnockoutModal extends ItablequalifyingKnockoutForm {
}

const MartialArtForm = (
  {
    tablequalifyingKnockout: initTablequalifyingKnockout,
    onSubmit,
    onCancel,
  }: ItablequalifyingKnockoutForm,
) => {
  const tablequalifyingKnockout = initTablequalifyingKnockout
    ? initTablequalifyingKnockout
    : {
      "number_team": 0,
      "has_grade_3rd": false,
      "sport_id": "",
      "content_id": "",
    };

  // const { sports } = useSportStore();
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
          <Label for="number_team" check>{t("number_team")}</Label>
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

        {/* <Col md="12" className="form-check checkbox-primary"> */}
        {/*   <Label for="sport" check>{t("sport")}</Label> */}
        {/*   <InputSelect */}
        {/*     title="Cuộc thi" */}
        {/*     data={sports} */}
        {/*     k="name" */}
        {/*     name="sport_id" */}
        {/*     v="id" */}
        {/*     handleChange={(e) => { */}
        {/*       formik.handleChange(e); */}
        {/*     }} */}
        {/*     value={formik.values.sport_id} */}
        {/*   /> */}
        {/* </Col> */}
        <Col xs="12" className="gap-2" style={{ display: "flex" }}>
          <Btn color="primary" type="submit">
            Xác nhận
          </Btn>
          {onCancel
            ? <Btn color="primary" type="button" onClick={onCancel}>Đóng</Btn>
            : null}
        </Col>
      </Row>
    </form>
  );
};

const useGenTreeMartialArt = (
  { onSubmit, ...rest }: ItablequalifyingKnockoutModal,
) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (
    tablequalifyingKnockout: IKnockoutCreate,
  ) => {
    onSubmit(tablequalifyingKnockout);
    setOpened(false);
  };
  const GenTreeMartialArtModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <MartialArtForm
        onSubmit={handleSubmit}
        {...rest}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { GenTreeMartialArtModal, handleToggle };
};

import { TTablequalifyingMatchReport } from "../../type/tablequalifyingMatch";
import {
  ListSetReport,
  useSetReportPopover,
} from "../TablequalifyingMatchReport/SetReport";
import { useKnockoutContext } from "./context";

export interface ITablequalifyingKnockoutMatchReportForm {
  tablequalifyingKnockoutMatchReport?: Partial<TTablequalifyingMatchReport>;
  onSubmit: (tablequalifyingMatchReport: TTablequalifyingMatchReport) => void;
  onCancel?: () => void;
}

export interface ITablequalifyingMatchReportModal
  extends ITablequalifyingKnockoutMatchReportForm {
}

const TablequalifyingKnockoutMatchReportForm = (
  {
    tablequalifyingKnockoutMatchReport: initTablequalifyingMatchReport,
    onSubmit,
    onCancel,
  }: ITablequalifyingKnockoutMatchReportForm,
) => {
  const tablequalifyingMatchReport: Partial<TTablequalifyingMatchReport> =
    initTablequalifyingMatchReport ? initTablequalifyingMatchReport : {
      "id": "",
      "sets": [],
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
          <Label for="sets" check>{t("sets")}</Label>
          <ListSetReport items={formik.values.sets} />
        </Col>

        <Col xs="12" className="gap-2" style={{ display: "flex" }}>
          <Btn color="primary" type="submit">
            Xác nhận
          </Btn>
          {onCancel
            ? <Btn color="primary" type="button" onClick={onCancel}>Đóng</Btn>
            : null}
        </Col>
      </Row>
    </form>
  );
};

const useTablequalifyingKnockoutMatchReportModal = (
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

export const TablequalifyingKnockoutMatchReportModal = forwardRef((
  { onSubmit, ...rest }: ITablequalifyingMatchReportModal,
  ref,
) => {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened((s) => !s);
  };

  useImperativeHandle(ref, () => ({ handleToggle }));

  const handleSubmit = (
    tablequalifyingMatchReport: TTablequalifyingMatchReport,
  ) => {
    onSubmit(tablequalifyingMatchReport);
    setOpened(false);
  };

  return (
    <div>
      <Btn
        color="secondary"
        type="button"
        size="xs"
        style={{ fontSize: "10" }}
        onClick={() => setOpened(true)}
      >
        <i className="icon-info-alt" />
        {/* Cập nhật kết quả */}
      </Btn>
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
    </div>
  );
});

export {
  TablequalifyingKnockoutMatchReportForm,
  useTablequalifyingKnockoutMatchReportModal,
};
export { MartialArtForm, useGenTreeMartialArt };
