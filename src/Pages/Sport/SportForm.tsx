import { Col, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { TSport } from "../../type/sport";
import { Field, Form, Formik } from "formik";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";
import { hasOwnProperty } from "react-bootstrap-typeahead/types/utils";
import { useCompetitionStore } from "../../store/competition";

interface ISportForm {
  sport?: TSport;
  onSubmit: (sport: TSport) => void;
}

interface ISportModal extends ISportForm {
}

const SportForm = ({ sport: initSport, onSubmit }: ISportForm) => {
  const sport = initSport ? initSport : { name: "", competition_id: null };
  const { competitions } = useCompetitionStore();
  console.log({ competitions });

  return (
    <Formik
      initialValues={{ ...sport }}
      onSubmit={(value) => {
        console.log({ submitValue: value });

        let submitValue = { ...value } as TSport;
        if (hasOwnProperty(value, "id")) {
          submitValue["id"] = value.id as string;
        }

        if (submitValue) onSubmit(submitValue);
      }}
    >
      {() => (
        <Form>
          <Row className="g-3">
            <Col md="12">
              <Label>Môn thi</Label>
              <Field
                className="form-control"
                name="name"
                type="text"
                placeholder={sport.name}
              />
            </Col>
            {(competitions?.length)
              ? (
                <Col md="12">
                  <InputGroup>
                    <InputGroupText>Cuộc thi</InputGroupText>
                    <Field
                      name="competition_id"
                      as="select"
                    >
                      {competitions.map(({ id, name }) => (
                        <option value={id}>{name}</option>
                      ))}
                    </Field>
                  </InputGroup>
                </Col>
              )
              : null}

            <Col xs="12">
              <Btn color="primary" type="submit">
                Xác nhận
              </Btn>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
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
