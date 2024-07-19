import { Col, Input, Label, Row } from "reactstrap";
import { TTablequalifying } from "../../type/tablequalifying";
import { useFormik } from "formik";
import { Btn, Popovers } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTeamStore } from "../../store/team";
// import { useTeamPopover } from "../Team/TeamForm";
import { ListTeam } from "../Team/ListTeam";
import { ListSport } from "../Sport/ListSport";
import { useSportStore } from "../../store/sport";
import { InputSelect } from "../../Component/InputSelect";

interface ITablequalifyingForm {
  tablequalifying?: Partial<TTablequalifying>;
  onSubmit: (tablequalifying: Partial<TTablequalifying>) => void;
  onCancel?: () => void;
}

interface ITablequalifyingModal extends ITablequalifyingForm {
}

const TablequalifyingForm = (
  { tablequalifying: initTablequalifying, onSubmit, onCancel }:
    ITablequalifyingForm,
) => {
  const tablequalifying: Partial<TTablequalifying> = initTablequalifying
    ? initTablequalifying
    : {
      "sport_id": "",
      "name": "",
      "index": 0,
      "listTeams": [],
    };

  const { teams } = useTeamStore();
  const { sports } = useSportStore();
  const { t } = useTranslation();
  const formik = useFormik<Partial<TTablequalifying>>({
    initialValues: { ...tablequalifying },
    onSubmit: (value) => {
      console.log({ submitAddTablequalifyingValue: value });
      let submitValue = {
        ...value,
      } as TTablequalifying;
      if (submitValue) onSubmit(submitValue);
    },
  });

  console.log({ teams, sportId: formik.values.sport_id });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        <Col md="12" className="form-check checkbox-primary">
          <Label for="name" check>{t("name")}</Label>
          <Input
            id="name"
            type="text"
            defaultChecked
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Col>
        {!initTablequalifying?.sport_id
          ? (
            <Col md="12" className="form-check checkbox-primary">
              <Label for="sport" check>{t("sport")}</Label>
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
          )
          : null}
        <Col md="12" className="form-check checkbox-primary">
          <Label for="listTeams" check>{t("Team")}</Label>

          <ListTeam
            data={teams.filter(({ sport_id }) =>
              sport_id === formik.values?.sport_id
            )}
            onSelectedRowsChange={({ selectedRows }) => {
              if (
                selectedRows.length ===
                  formik.values.listTeams?.length
              ) {
                return;
              }
              formik.setFieldValue(
                "listTeams",
                selectedRows.map((row) => row.id),
              );
            }}
            selectableRowSelected={(r) => {
              return !r?.id ||
                !!formik.values.listTeams?.map((id) => id)
                  .includes(
                    r.id,
                  );
            }}
          />
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

const useTablequalifyingModal = (
  { onSubmit, ...rest }: ITablequalifyingModal,
) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (tablequalifying: Partial<TTablequalifying>) => {
    onSubmit(tablequalifying);
    setOpened(false);
  };
  const TablequalifyingModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <TablequalifyingForm
        onSubmit={handleSubmit}
        {...rest}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { TablequalifyingModal, handleToggle };
};

export { TablequalifyingForm, useTablequalifyingModal };
