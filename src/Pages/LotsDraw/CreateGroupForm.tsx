import { ColumnDef } from "@tanstack/react-table";
import { useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Label, Row } from "reactstrap";
import { Btn, H3, H5 } from "../../AbstractElements";
import { InputSelect } from "../../Component/InputSelect";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { N } from "../../name-conversion";
import { getFilterByValue } from "../../Service/_getParams";
import { teamsGetByOrg } from "../../Service/team";
import { teammembersGet } from "../../Service/teammember";
import { useOrgStore } from "../../store/org";
import { useSportStore } from "../../store/sport";
import { DGender, DRank } from "../../type/enum";
import { TGroup, TTeam } from "../../type/team";
import { TTeammember } from "../../type/teammember";
import { convertToDate } from "../../utils/date";
import { ListTeammember } from "../Teammember/ListTeammember";

interface IGroupForm {
  team?: TGroup;
  sportId: string;
  content_id: string;
  onSubmit: (team: TGroup) => void;
  onCancel?: () => void;
}

interface ITeamModal extends IGroupForm {}

const tableTeammemberColumns: ColumnDef<TTeammember>[] = [
  {
    accessorKey: "name",
    footer: (props) => props.column.id,
    header: N["name"],
    cell: (props) => props.getValue() as string,
  },
  {
    accessorKey: "rank",
    footer: (props) => props.column.id,
    header: N["rank"],
    cell: (props) =>
      DRank.filter((e) => e.code == props.getValue()).length > 0
        ? DRank.filter((e) => e.code == props.getValue())[0].name
        : "Đang xử lý",
  },
  {
    accessorKey: "gender",
    footer: (props) => props.column.id,
    header: N["gender"],
    cell: (props) => DGender[props.getValue() as number],
    meta: { custom: { gender: true } },
    filterFn: "weakEquals",
  },
  {
    accessorKey: "created",
    footer: (props) => props.column.id,
    header: N["created"],
    cell: (props) => convertToDate(props.getValue() as string),
  },
  {
    accessorKey: "dob",
    footer: (props) => props.column.id,
    header: N["dob"],
    cell: (props) => convertToDate(props.getValue() as string),
    meta: { custom: { date: true } },
  },
  {
    accessorKey: "date_join_army",
    footer: (props) => props.column.id,
    header: N["date_join_army"],
    cell: (props) => convertToDate(props.getValue() as string),
  },
  {
    accessorKey: "org_name",
    footer: (props) => props.column.id,
    header: N["org_name"],
    cell: (props) => props.getValue() as string,
  },
  {
    accessorKey: "weights",
    footer: (props) => props.column.id,
    header: N["weights"],
    cell: (props) => props.getValue() as string,
  },
  {
    accessorKey: "competition_name",
    footer: (props) => props.column.id,
    header: N["competition_name"],
    cell: (props) => props.getValue() as string,
  },
];

const GroupForm = ({
  team: initTeam,
  onSubmit,
  onCancel,
  sportId,
  content_id,
}: IGroupForm) => {
  const team: Partial<TGroup> = initTeam
    ? initTeam
    : {
        id: "",

        org_id: "",

        // has_army: false,

        org_name: "",
        list_team_member: [], // list of teammembers' ids
      };

  const { orgs } = useOrgStore();
  const { sports } = useSportStore();
  // const { teammembers } = useTeammemberStore();

  const { t } = useTranslation();
  const formik = useFormik<Partial<TGroup>>({
    initialValues: { ...team },
    onSubmit: (value) => {
      console.log({ submitAddTeamValue: value });
      let submitValue = {
        ...value,
      } as TGroup;
      if (submitValue) onSubmit(submitValue);
    },
  });

  const [listTeam, setListTeam] = useState<TTeam[]>([]);
  const [teamId, setTeamId] = useState<any>("");
  const [orgName, setOrgName] = useState<any>("");
  const [numberAtheleSelected, setNumberAtheleSelected] = useState(2);
  const [orgMembers, setOrgMembers] = useState<TTeammember[]>([]);
  const [queue, setQueue] = useState<any>([]);

  // Effect to monitor changes in the list and update the queue
  useEffect(() => {
    (async () => {
      const memberFilter = getFilterByValue({
        f: "sport_id",
        o: "=",
        v: sportId,
      });
      // const members = await teammembersGet({ filter: memberFilter }).then((res) => {
      //     const {
      //         data: { data },
      //     } = res;
      //     return data;
      // });
      // setOrgMembers(members);
      const team = await teamsGetByOrg({ filter: memberFilter }).then((res) => {
        const {
          data: { data },
        } = res;

        return data;
      });
      setListTeam(team);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { team_id: f_team_id } = formik.values;
      if (f_team_id) {
        const memberFilter1 = getFilterByValue({
          f: "team_id",
          o: "=",
          v: f_team_id,
        });
        const members = await teammembersGet({ filter: memberFilter1 }).then(
          (res) => {
            const {
              data: { data },
            } = res;
            return data;
          }
        );
        if (members.length > 0) {
          setOrgMembers(members);
        } else {
          alert("Đơn vị chưa có thành viên đăng ký môn này");
          setOrgMembers([]);
        }

        //setTeamId(team_id);
        //setOrgName(org_name);
      }
    })();
  }, [formik.values.team_id]);
  const updateQueue = (listAthele: TTeammember[]) => {
    // Create a map to track current indices of items
    const indexMap = new Map(listAthele.map((item, index) => [item, index]));

    // Update queue based on the current list
    const newQueue = () => {
      const filteredQueue = queue.filter((item: any) => indexMap.has(item));

      // Add any new items that are in the current list but not in the queue
      const newItems = listAthele.filter((item) => !queue.includes(item));

      return [...filteredQueue, ...newItems];
    };
    return newQueue;
  };
  const displayedListTeammember = useMemo(() => {
    const availMembers: TTeammember[] = [];
    if (!orgMembers?.length) {
      // availMembers.push(...teammembers);
    } else {
      availMembers.push(...orgMembers);
    }
    return [
      // ...newListMember,
      ...availMembers,
    ];
  }, [
    // teammembers,
    // newListMember,
    orgMembers,
  ]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        {listTeam?.length ? (
          <Col md="6">
            <InputSelect
              title={"Đội - " + t("org_id")}
              data={listTeam}
              k="org_name"
              name="team_id"
              v="id"
              handleChange={(e) => {
                formik.handleChange(e);
                setOrgName(
                  listTeam.filter((ele) => ele.id == e.target.value)[0].org_name
                );
              }}
              value={formik.values.team_id}
            />
          </Col>
        ) : null}
        <Col md="6">
          <InputSelect
            title={t("sport_id")}
            data={sports.filter((e) => e.id == sportId)}
            k="name"
            name="sport_id"
            v="id"
            handleChange={(e) => {
              formik.setFieldValue("sport_id", sportId);
            }}
            value={sportId}
          />
        </Col>
        <H3 className="text-center">Thứ tự thi đấu</H3>
        <div className="m-t-20 text-center ">
          {queue.map((e: TTeammember, index: number) => {
            return (
              <H5>
                <strong>Đợt {index + 1}</strong> : {e.name}
              </H5>
            );
          })}
        </div>
        {orgMembers.length > 0 ? (
          <Col md="12" className="form-check checkbox-primary">
            <Label for="list_team_member" check>
              {t("teammember")}
            </Label>

            <ListTeammember
              data={displayedListTeammember}
              columns={tableTeammemberColumns}
              onSelectedRowsChange={({ selectedRows }) => {
                if (
                  selectedRows.length ===
                    formik.values.list_team_member?.length ||
                  selectedRows.length === formik.values.lst_member?.length
                ) {
                  return;
                }

                // Add new
                // formik.setFieldValue(
                //     "list_team_member",
                //     selectedRows.map((row) => row.id)
                // );
                // // Update
                formik.setFieldValue(
                  "lst_member",
                  selectedRows.map((row) => row.id)
                );
                const indexMap = new Map(
                  selectedRows.map((item, index) => [item, index])
                );

                // Update queue based on the current list
                const newQueue = () => {
                  const filteredQueue = queue.filter((item: any) =>
                    indexMap.has(item)
                  );

                  // Add any new items that are in the current list but not in the queue
                  const newItems = selectedRows.filter(
                    (item) => !queue.includes(item)
                  );

                  return [...filteredQueue, ...newItems];
                };
                setQueue(newQueue);
                setNumberAtheleSelected(selectedRows.length);
              }}
              selectableRowSelected={(r) => {
                return (
                  !!team.lst_member?.includes(r.id) ||
                  !!team.list_team_member?.includes(r.id)
                );
              }}
            />
          </Col>
        ) : (
          <H3 className="text-center text-danger">Chọn đội của đơn vị </H3>
        )}

        {/* <TeammemberPopover target="PopoverAddUser"> */}
        {/*   <Btn */}
        {/*     type="button" */}
        {/*     color="secondary" */}
        {/*     id="PopoverAddUser" */}
        {/*     onClick={handleToggle} */}
        {/*   > */}
        {/*     Bật/Tắt thêm vận động viên */}
        {/*   </Btn> */}
        {/* </TeammemberPopover> */}

        <Col xs="12" className="gap-2" style={{ display: "flex" }}>
          <Btn
            color="primary"
            type="button"
            onClick={() => {
              formik.setFieldValue(
                "lst_member",
                queue.map((e: TTeammember, index: number) => {
                  return {
                    memberid: e.id,
                    indexs: index,
                  };
                })
              );
              formik.setFieldValue("name", orgName + " - Tiếp sức");

              formik.setFieldValue("content_id", content_id);
              formik.setFieldValue("sport_id", sportId);
              formik.submitForm();
            }}
          >
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

const useTeamAtheleModal = ({ sportId, onSubmit, ...rest }: ITeamModal) => {
  const sport_Id = sportId;
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (team: TGroup) => {
    onSubmit(team);
    setOpened(false);
  };
  const TeamModal = () => (
    <CommonModal
      modalBodyClassName=" text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
        <H3 className="modal-header justify-content-center border-0">
          Tạo đội thi đấu
        </H3>
        <GroupForm
          sportId={sport_Id}
          onSubmit={handleSubmit}
          {...rest}
          onCancel={() => setOpened(false)}
        />
      </div>
    </CommonModal>
  );

  return { TeamModal, handleToggle };
};

export { GroupForm, useTeamAtheleModal };
