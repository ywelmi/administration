import { Col, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { TSport } from "../../type/sport";
import { Field, Form as form, Formik, useFormik } from "formik";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";
import { hasOwnProperty } from "react-bootstrap-typeahead/types/utils";
import { useCompetitionStore } from "../../store/competition";
import { InputSelect } from "../../Component/InputSelect";

interface ISportForm {
  sport?: TSport;
  onSubmit: (sport: TSport) => void;
}

interface ISportModal extends ISportForm {
}

const SportForm = ({ sport: initSport, onSubmit }: ISportForm) => {
  const { competitions } = useCompetitionStore();
  const sport = initSport
    ? initSport
    : { name: "", competition_id: competitions?.[0].id ?? "" };
  // console.log({ competitions });
  const formik = useFormik({
    initialValues: { ...sport },
    onSubmit: (value) => {
      console.log({ submitValue: value });

      let submitValue = { ...value } as TSport;
      if (hasOwnProperty(value, "id")) {
        submitValue["id"] = value.id as string;
      }

      if (submitValue) onSubmit(submitValue);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        <Col md="12">
          <Label>Môn thi</Label>
          <Input
            type="text"
            className="form-control"
            name="name"
            placeholder={sport.name}
            onChange={(e) => {
              console.log({ inputE: e });
              formik.handleChange(e);
            }}
          />
        </Col>
        {(competitions?.length)
          ? (
            <Col md="12">
              <InputSelect
                title="Cuộc thi"
                data={competitions}
                k="name"
                name="competition_id"
                v="id"
                handleChange={(e) => {
                  console.log({ selelctE: e });
                  formik.handleChange(e);
                }}
                value={formik.values.competition_id}
              />
            </Col>
          )
          : null}

        <Col xs="12">
          <Btn color="primary" type="submit">
            Xác nhận
          </Btn>
        </Col>
      </Row>
    </form>
  );
};

const useSportModal = ({ onSubmit, ...rest }: ISportModal) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (sport: TSport) => {
    onSubmit(sport);
    setOpened(false);
  };
  const SportModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <SportForm onSubmit={handleSubmit} {...rest} />
    </CommonModal>
  );

  return { SportModal, handleToggle };
};

export { SportForm, useSportModal };
