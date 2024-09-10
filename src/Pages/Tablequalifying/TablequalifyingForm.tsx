import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Input, Label, Row } from "reactstrap";
import * as yup from "yup";
import { Btn } from "../../AbstractElements";
import { InputSelect } from "../../Component/InputSelect";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { getFilterByValue } from "../../Service/_getParams";
import { tablequalifyingMembersGet } from "../../Service/tablequalifying";
import {
  teamsGet,
  teamsHaveTableGet,
  teamsNoTableGet,
} from "../../Service/team";
import { useConfigStore } from "../../store/config";
import { useSportStore } from "../../store/sport";
import { TTablequalifying } from "../../type/tablequalifying";
import { TTeam } from "../../type/team";
import { ListTeam } from "../Team/ListTeam";

interface ITablequalifyingForm {
  tablequalifying?: Partial<TTablequalifying>;
  onSubmit: (tablequalifying: Partial<TTablequalifying>) => void;
  onCancel?: () => void;
}

interface ITablequalifyingModal extends ITablequalifyingForm {}

const TablequalifyingSchema = yup.object().shape({
  // id: yup.string().optional(),
  // sport_id: yup.string().required(),
  name: yup.string().required("Mời nhập tên bảng"),
  // indexs: yup.number().required(),
  // index: yup.number().required(),
  // created: yup.string().required(),
  // modified: yup.date().required(),
  // sport_name: yup.string().optional(),
  // list_team: yup.string().optional(),
  // listTeams: yup.array(yup.string()).optional(),
});

const TablequalifyingForm = ({
  tablequalifying: initTablequalifying,
  onSubmit,
  onCancel,
}: ITablequalifyingForm) => {
  const tablequalifying: Partial<TTablequalifying> = initTablequalifying
    ? initTablequalifying
    : {
        sport_id: "",
        name: "",
        index: 0,
        listTeams: [],
      };

  // const { teams } = useTeamStore();
  const [teams, setTeams] = useState<TTeam[]>([]);
  const { sportSelector } = useConfigStore();
  const { sports } = useSportStore(sportSelector());
  const { t } = useTranslation();
  const formik = useFormik<Partial<TTablequalifying>>({
    initialValues: { ...tablequalifying },
    onSubmit: (value) => {
      console.log({ submitAddTablequalifyingValue: value });
      const submitValue = {
        ...value,
      } as TTablequalifying;
      if (submitValue) onSubmit(submitValue);
    },
    validationSchema: TablequalifyingSchema,
  });

  useEffect(() => {
    console.log({ id: initTablequalifying?.id });
    if (initTablequalifying?.id) {
      const id = initTablequalifying?.id;
      tablequalifyingMembersGet(id).then((res) => {
        const { data, status } = res;
        console.log({ data });
        if (status === 200) {
          setTimeout(() => {
            formik.setFieldValue(
              "listTeams",
              data.map((m) => m.member_id)
            );
          }, 1000);
        }
      });
    }
  }, [initTablequalifying?.id]);

  useEffect(() => {
    (async () => {
      if (formik.values.sport_id) {
        const { sport_id } = formik.values;
        console.log({ sport_id });
        if (sport_id) {
          const filter = getFilterByValue({
            f: "sport_id",
            o: "=",
            v: sport_id,
          });
          const sportTeams = await teamsGet({ filter }).then((res) => {
            const {
              data: { data },
              status,
            } = res;
            console.log({ sportTeamsdata: data });
            if (status === 200) {
              return [...data];
            }
          });

          // console.log({sportTeams})
          const noTableTeams = await teamsNoTableGet(sport_id).then((res) => {
            const { data, status } = res;
            if (status === 200) return data;
          });

          console.log({ sportTeams, noTableTeams });
          if (sportTeams?.length) {
            //&& noTableTeams?.length) {
            const sportTeamIds = sportTeams.map((t) => t.id);
            const noTableSportTeams =
              noTableTeams?.filter((t) => sportTeamIds.includes(t.id)) || [];
            if (!tablequalifying.list_team?.length && sportTeams) {
              // Case add new
              setTeams(noTableSportTeams);
              return;
            }

            if (tablequalifying.list_team?.length && sportTeams) {
              // Case update
              const haveTableTeams =
                (await teamsHaveTableGet(sport_id).then((res) => {
                  const { data, status } = res;
                  if (status === 200) {
                    return data;
                  }
                })) || [];

              // console.log({ haveTableTeams });
              if (!tablequalifying.id) return;
              const tablequalifyingMembers = await tablequalifyingMembersGet(
                tablequalifying.id
              ).then((res) => {
                const { data, status } = res;
                if (status === 200) return data;
              });
              console.log({ tablequalifyingMembers });
              const tablequalifyingTeamIds = tablequalifyingMembers?.map(
                (t) => t.member_id
              );
              const haveTableSportTeams = haveTableTeams.filter((t) =>
                tablequalifyingTeamIds?.includes(t.id)
              );
              setTeams([...haveTableSportTeams, ...noTableSportTeams]);
              return;
            }
          }
        }
      }
    })();
  }, [formik.values.sport_id]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        <Col md="12" className="form-check checkbox-primary">
          <Label for="name" check>
            {t("name")}
          </Label>
          {formik.errors.name ? (
            <div className="invalid-input">{formik.errors.name}</div>
          ) : null}
          <Input
            id="name"
            type="text"
            defaultChecked
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Col>
        {!initTablequalifying?.sport_id ? (
          <Col md="12" className="form-check checkbox-primary">
            <Label for="sport" check>
              {t("sport")}
            </Label>
            {/* <ListSport data={sports} /> */}
            <InputSelect
              title="Môn thi"
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
        ) : null}
        {teams?.length ? (
          <Col md="12" className="form-check checkbox-primary">
            <Label for="listTeams" check>
              {t("Team")}
            </Label>

            <ListTeam
              data={teams}
              onSelectedRowsChange={({ selectedRows }) => {
                console.log({ selectedRows });
                if (selectedRows.length === formik.values.listTeams?.length) {
                  return;
                }
                formik.setFieldValue(
                  "listTeams",
                  selectedRows.map((row) => row.id)
                );
              }}
              selectableRowSelected={(r) => {
                return (
                  !r?.id ||
                  // !!formik.values.listTeams?.map((id) => id)
                  !!formik.values.listTeams
                    // preSelectedTeams
                    ?.includes(r.id)
                );
              }}
            />
          </Col>
        ) : (
          <div color="warning">Không có đội thi</div>
        )}
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

const useTablequalifyingModal = ({
  onSubmit,
  ...rest
}: ITablequalifyingModal) => {
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
