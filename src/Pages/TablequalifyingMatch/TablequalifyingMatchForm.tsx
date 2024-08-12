import { useFormik } from "formik";
import { parseInt } from "lodash";
import { useCallback, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import { Col, Input, Label, Row } from "reactstrap";
import { Btn, Popovers } from "../../AbstractElements";
import { InputSelect } from "../../Component/InputSelect";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { N } from "../../name-conversion";
import { tablequalifyingMatchMembersGet } from "../../Service/tablequalifyingMatch";
import { useConfigStore } from "../../store/config";
import { useSportStore } from "../../store/sport";
import { DTime } from "../../type/enum";
import {
  TTablequalifyingMatch,
  TTableQualifyingMember,
} from "../../type/tablequalifyingMatch";
import { convertHoursToDate } from "../../utils/date";

export interface ITablequalifyingMatchForm {
  tablequalifyingMatch?: Partial<TTablequalifyingMatch>;
  onSubmit: (tablequalifyingMatch: TTablequalifyingMatch) => void;
  onCancel?: () => void;
}

export interface ITablequalifyingMatchModal extends ITablequalifyingMatchForm {}

interface ITablequalifyingMatchPopover extends ITablequalifyingMatchForm {}

const TablequalifyingMatchForm = ({
  tablequalifyingMatch: initTablequalifyingMatch,
  onSubmit,
  onCancel,
}: ITablequalifyingMatchForm) => {
  const tablequalifyingMatch: Partial<TTablequalifyingMatch> =
    initTablequalifyingMatch
      ? initTablequalifyingMatch
      : {
          table_id: "",
          team1_id: "",
          team2_id: "",
          indexs: 0,
          match_day: new Date().toISOString(),
          match_hour: "",
          match_time: DTime[0].k,
          match_location_chid: "",
          // team1_name: "",
          // team2_name: "",
        };

  const { sportSelector } = useConfigStore();
  const { sports, selectedSportId } = useSportStore(sportSelector());
  const selectedSport = sports.find(({ id }) => id === selectedSportId);

  // const { teams } = useTeamStore(); // take teams from same table
  const [teams, setTeams] = useState<TTableQualifyingMember[]>([]);

  const { t } = useTranslation();
  const formik = useFormik<Partial<TTablequalifyingMatch>>({
    initialValues: { ...tablequalifyingMatch },
    onSubmit: (value) => {
      console.log({ submitAddTablequalifyingMatchValue: value });
      const submitValue = {
        ...value,
        indexs:
          typeof value.indexs === "string"
            ? parseInt(value.indexs)
            : value.indexs,
      } as TTablequalifyingMatch;
      if (submitValue) onSubmit(submitValue);
    },
  });

  useEffect(() => {
    const tableId = formik.values.table_id;
    if (tableId) {
      tablequalifyingMatchMembersGet(tableId)
        .then((res) => {
          const { data, status } = res;
          if (status === 200) {
            setTeams(data);
          }
        })
        .catch((err) => console.log({ err }));
    }
  }, [formik.values.table_id]);

  // const selectableTeams = teams.filter(({ id }) =>
  //   formik.values.team1_id !== id && formik.values.team2_id !== id
  // );

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        <Col md="12" className="form-check checkbox-primary">
          <Label for="indexs" check>
            {t("indexs")}
          </Label>
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
            v="member_id"
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
            v="member_id"
            handleChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.team2_id}
          />
        </Col>
        <Col md="12">
          <Label for="indexs" check>
            {N["match_location"]}
          </Label>
          <Input
            name="match_location"
            disabled
            value={selectedSport?.sport_location}
          />
        </Col>
        <Col md="12">
          <Label for="indexs" check>
            {N["match_location_chid"]}
          </Label>
          <Input
            name="match_location_chid"
            value={formik.values.match_location_chid || ""}
            onChange={formik.handleChange}
          />
        </Col>

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
            selected={
              formik.values.match_hour
                ? convertHoursToDate(formik.values.match_hour)
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
            dateFormat="HH:mm"
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

const useTablequalifyingMatchModal = ({
  onSubmit,
  ...rest
}: ITablequalifyingMatchModal) => {
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
      size="md"
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

const useTablequalifyingMatchPopover = ({
  onSubmit,
  ...rest
}: ITablequalifyingMatchPopover) => {
  const [opened, setOpened] = useState(false);

  const handleToggle = useCallback(() => {
    setOpened((s) => !s);
  }, []);

  const handleSubmit = (teammember: TTablequalifyingMatch) => {
    onSubmit(teammember);
    setOpened(false);
  };

  const TablequalifyingMatchPopover = ({
    children,
    target,
  }: React.PropsWithChildren<{ target: string }>) => (
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
