import { Col, Input, Label, Media, Row } from "reactstrap";
import { IKnockoutRound } from "../../type/tablequalifyingKnockout";
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
import ReactDatePicker from "react-datepicker";
import { convertHoursToDate } from "../../utils/date";
import { DTime } from "../../type/enum";
import { N } from "../../name-conversion";

interface IRoundUpdateForm {
  tablequalifyingKnockout?: IKnockoutRound;
  onSubmit: (tablequalifyingKnockout: IKnockoutRound) => void;
  onCancel?: () => void;
}

interface IRoundUpdateModal extends IRoundUpdateForm {}
const RoundUpdateForm = ({
  tablequalifyingKnockout: initTablequalifyingKnockout,
  onSubmit,
  onCancel,
}: IRoundUpdateForm) => {
  const tablequalifyingKnockout = initTablequalifyingKnockout
    ? initTablequalifyingKnockout
    : {
        sport_id: "",
        conent_id: "",
        grade: 99,
        match_day: "",
        match_hour: "",
        match_location: "",
        match_time: 1,
      };

  const { t } = useTranslation();
  const formik = useFormik<IKnockoutRound>({
    initialValues: { ...tablequalifyingKnockout },
    onSubmit: (submitValue) => {
      console.log({
        submitUpdateRound: submitValue,
      });
      if (submitValue) onSubmit(submitValue);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        <Col md="12">
          <Label for="match_day" check>
            {t("match_day")}
          </Label>
          <ReactDatePicker
            className="form-control"
            name="match_day"
            selected={new Date(formik.values.match_day || new Date())}
            // value={formik.values.match_day}
            onChange={(date) =>
              formik.setFieldValue("match_day", date?.toISOString())
            }
            locale={"vi"}
            dateFormat={"dd/MM/yyyy"}
          />
        </Col>
        <Col md="12">
          <Label for="match_hour" check>
            {t("match_hour")}
          </Label>
          <ReactDatePicker
            className="form-control"
            name="match_hour"
            value={
              formik.values.match_hour
                ? convertHoursToDate(formik.values.match_hour).toISOString()
                : undefined
            }
            onChange={(date) =>
              formik.setFieldValue(
                "match_hour",
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
        </Col>
        <Col>
          <Label for="match_time" check>
            {t("match_time")}
          </Label>
          <InputSelect
            data={DTime}
            k="k"
            v="v"
            name="match_time"
            value={formik.values.match_time}
            handleChange={formik.handleChange}
          />
        </Col>

        <Col md="12">
          <Label for="match_location" check>
            {N["match_location"]}
          </Label>
          <Input name="match_location" value={formik.values.match_location} />
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

const useRoundUpdateModal = ({ onSubmit, ...rest }: IRoundUpdateModal) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (tablequalifyingKnockout: IKnockoutRound) => {
    onSubmit(tablequalifyingKnockout);
    setOpened(false);
  };
  const RoundKnockoutModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <RoundUpdateForm
        onSubmit={handleSubmit}
        {...rest}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { RoundKnockoutModal, handleToggle };
};

export { useRoundUpdateModal };
