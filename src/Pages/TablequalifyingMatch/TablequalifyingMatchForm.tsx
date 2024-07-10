import { Col, Input, Label, Row } from "reactstrap";
import { useFormik } from "formik";
import { Btn, Popovers } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { InputSelect } from "../../Component/InputSelect";
import {
  TTablequalifyingMatch,
  TTableQualifyingMember,
} from "../../type/tablequalifyingMatch";
import { parseInt } from "lodash";
import { useTeamStore } from "../../store/team";
import ReactDatePicker from "react-datepicker";
import { TTeam } from "../../type/team";
import { tablequalifyingMatchMembersGet } from "../../Service/tablequalifyingMatch";

export interface ITablequalifyingMatchForm {
  tablequalifyingMatch?: Partial<TTablequalifyingMatch>;
  onSubmit: (tablequalifyingMatch: TTablequalifyingMatch) => void;
  onCancel?: () => void;
}

export interface ITablequalifyingMatchModal extends ITablequalifyingMatchForm {
}

interface ITablequalifyingMatchPopover extends ITablequalifyingMatchForm {}

const TablequalifyingMatchForm = (
  { tablequalifyingMatch: initTablequalifyingMatch, onSubmit, onCancel }:
    ITablequalifyingMatchForm,
) => {
  const tablequalifyingMatch: Partial<TTablequalifyingMatch> =
    initTablequalifyingMatch ? initTablequalifyingMatch : {
      table_id: "",
      team1_id: "",
      team2_id: "",
      indexs: 0,
      match_day: new Date().toISOString(),
      match_hour: "",
      // team1_name: "",
      // team2_name: "",
    };

  // const { teams } = useTeamStore(); // take teams from same table
  const [teams, setTeams] = useState<TTableQualifyingMember[]>([]);

  const { t } = useTranslation();
  const formik = useFormik<Partial<TTablequalifyingMatch>>({
    initialValues: { ...tablequalifyingMatch },
    onSubmit: (value) => {
      console.log({ submitAddTablequalifyingMatchValue: value });
      let submitValue = {
        ...value,
        indexs: typeof value.indexs === "string"
          ? parseInt(value.indexs)
          : value.indexs,
      } as TTablequalifyingMatch;
      if (submitValue) onSubmit(submitValue);
    },
  });

  useEffect(() => {
    const tableId = formik.values.table_id;
    if (tableId) {
      tablequalifyingMatchMembersGet(tableId).then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setTeams(data);
        }
      }).catch((err) => console.log({ err }));
    }
  }, [formik.values.table_id]);

  // const selectableTeams = teams.filter(({ id }) =>
  //   formik.values.team1_id !== id && formik.values.team2_id !== id
  // );

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        <Col md="12" className="form-check checkbox-primary">
          <Label for="indexs" check>{t("indexs")}</Label>
          <Input
            id="indexs"
            type="number"
            defaultChecked
            value={formik.values.indexs}
            onChange={formik.handleChange}
          />
        </Col>
        <Col md="12">
          <InputSelect
            title={t("team1_name")}
            data={teams || []}
            k="team_name"
            name="team1_id"
            v="team_id"
            handleChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.team1_id}
          />
        </Col>
        <Col md="12">
          <InputSelect
            title={t("team2_name")}
            data={teams || []}
            k="team_name"
            name="team2_id"
            v="team_id"
            handleChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.team2_id}
          />
        </Col>
        <Col md="12">
          <Row className="gap-2" style={{ display: "flex" }}>
            <Col>
              <Label for="match_day" check>{t("match_day")}</Label>
              <ReactDatePicker
                className="form-control"
                name="match_day"
                selected={new Date(formik.values.match_day || new Date())}
                // value={formik.values.match_day}
                onChange={(date) =>
                  formik.setFieldValue("match_day", date?.toISOString())}
                locale={"vi"}
                dateFormat={"dd/MM/yyyy"}
              />
            </Col>
            <Col>
              <Label for="match_hour" check>{t("match_hour")}</Label>
              <ReactDatePicker
                className="form-control"
                name="match_hour"
                selected={new Date(formik.values.match_day || new Date())}
                // value={formik.values.match_day}
                value={formik.values.match_hour}
                onChange={(date) =>
                  formik.setFieldValue(
                    "match_hour",
                    `${date?.getHours()}:${date?.getMinutes()}`,
                  )}
                showTimeSelect
                showTimeSelectOnly
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Giờ"
                locale={"vi"}
              />
            </Col>
          </Row>
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

const useTablequalifyingMatchModal = (
  { onSubmit, ...rest }: ITablequalifyingMatchModal,
) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (tablequalifyingMatch: TTablequalifyingMatch) => {
    onSubmit(tablequalifyingMatch);
    setOpened(false);
  };

  const TablequalifyingMatchModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <TablequalifyingMatchForm
        onSubmit={handleSubmit}
        {...rest}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { TablequalifyingMatchModal, handleToggle };
};

const useTablequalifyingMatchPopover = (
  { onSubmit, ...rest }: ITablequalifyingMatchPopover,
) => {
  const [opened, setOpened] = useState(false);

  const handleToggle = useCallback(() => {
    setOpened((s) => !s);
  }, []);

  const handleSubmit = (teammember: TTablequalifyingMatch) => {
    onSubmit(teammember);
    setOpened(false);
  };

  const TablequalifyingMatchPopover = (
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
        <TablequalifyingMatchForm
          onSubmit={handleSubmit}
          {...rest}
          onCancel={() => setOpened(false)}
        />
      </Popovers>
    </div>
  );

  return { TablequalifyingMatchPopover, handleToggle: setOpened };
};
export {
  TablequalifyingMatchForm,
  useTablequalifyingMatchModal,
  useTablequalifyingMatchPopover,
};
