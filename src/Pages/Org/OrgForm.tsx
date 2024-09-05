import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Input, Label, Row } from "reactstrap";
import { Btn } from "../../AbstractElements";
import { InputSelect } from "../../Component/InputSelect";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useGroupStore } from "../../store/group";
import { TOrg } from "../../type/org";

interface IOrgForm {
  org?: TOrg;
  onSubmit: (org: TOrg) => void;
  onCancel?: () => void;
}

interface IOrgModal extends IOrgForm {}

const OrgForm = ({ org: initOrg, onSubmit, onCancel }: IOrgForm) => {
  const org = initOrg ? initOrg : { name: "", group_id: null };
  const { groups } = useGroupStore();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: { ...org },
    onSubmit: (value) => {
      console.log({ submitValue: value });

      const submitValue = { ...value } as TOrg;

      if (submitValue) onSubmit(submitValue);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        <Col md="12">
          <Label>Tên đơn vị</Label>
          <Input
            id="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Col>
        {groups?.length ? (
          <Col md="12">
            <InputSelect
              title={t("group_id")}
              data={groups}
              k="name"
              name="group_id"
              v="id"
              handleChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.group_id}
            />
          </Col>
        ) : null}

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

const useOrgModal = ({ onSubmit, ...rest }: IOrgModal) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (org: TOrg) => {
    onSubmit(org);
    setOpened(false);
  };
  const OrgModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <OrgForm
        onSubmit={handleSubmit}
        {...rest}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { OrgModal, handleToggle };
};

export { OrgForm, useOrgModal };
