import { ColumnDef } from "@tanstack/react-table";
import { useFormik } from "formik";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Col, Label, Row } from "reactstrap";
import { Btn, H3 } from "../../AbstractElements";
import { InputSelect } from "../../Component/InputSelect";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { N } from "../../name-conversion";
import { getFilterByValue } from "../../Service/_getParams";
import { martialArtMilitiaArmyGroupGetContent } from "../../Service/martialArtMilitia";
import { teamsGetByOrg } from "../../Service/team";
import { teammembersGet } from "../../Service/teammember";
import { useConfigStore } from "../../store/config";
import { useOrgStore } from "../../store/org";
import { useSportStore } from "../../store/sport";
import { DGender, DRank } from "../../type/enum";
import { TGroup } from "../../type/team";
import { TTeammember } from "../../type/teammember";
import { convertToDate } from "../../utils/date";
import { ListTeammember } from "../Teammember/ListTeammember";

interface IGroupForm {
  team?: TGroup;
  sportId: string;
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
}: IGroupForm) => {
  const team: Partial<TGroup> = initTeam
    ? initTeam
    : {
        list_team_member: [], // list of teammembers' ids
      };

  const { orgs } = useOrgStore();
  const { sportSelector } = useConfigStore();
  const { sports } = useSportStore(sportSelector());
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
  const listContent = useRef<any>(null);
  const listTypeGroup = [
    { id: 1, name: "Đôi nam 1", number: 2, gender: 1 },
    { id: 2, name: "Đôi nam 2", number: 2, gender: 1 },

    { id: 3, name: "Đôi nữ 1", number: 2, gender: 2 },

    { id: 4, name: "Đôi nữ 2", number: 2, gender: 2 },

    { id: 5, name: "Thi đấu đồng diễn", number: 100, gender: 0 },
  ];
  const fetch_data_content = () => {
    (async () => {
      const contents = await martialArtMilitiaArmyGroupGetContent(sportId).then(
        (res) => {
          return res.data;
        }
      );
      console.log(contents);
      listContent.current = contents;
    })();

    // (async () => {
    //     const contents = await martialArtMilitiaArmyGroupGetContent().then((res) => {
    //         const {
    //             data: { data },
    //         } = res;
    //         return data;
    //     });
    //     listContent.current = contents;
    // })();
  };
  const [numberAthele, setNumberAthele] = useState<number>(2);
  const [teamId, setTeamId] = useState<any>("");
  const [orgName, setOrgName] = useState<any>("");
  const [numberAtheleSelected, setNumberAtheleSelected] = useState(3);
  const [orgMembers, setOrgMembers] = useState<TTeammember[]>([]);
  useEffect(() => {
    fetch_data_content();
  }, []);
  useEffect(() => {
    (async () => {
      const { org_id: f_org_id } = formik.values;
      if (f_org_id) {
        const memberFilter = getFilterByValue({
          f: "org_id",
          o: "=",
          v: f_org_id,
        });

        const team = await teamsGetByOrg({ filter: memberFilter }).then(
          (res) => {
            const {
              data: { data },
            } = res;

            return data;
          }
        );
        var hasTeam = false;
        var team_id = "";
        var org_name = "";
        team.forEach((e) => {
          if (e.sport_id == sportId) {
            //alert(e.id);
            hasTeam = true;
            team_id = e.id;
            org_name = e.org_name;
          }
        });
        if (hasTeam) {
          const memberFilter1 = getFilterByValue({
            f: "team_id",
            o: "=",
            v: team_id,
          });
          const members = await teammembersGet({ filter: memberFilter1 }).then(
            (res) => {
              const {
                data: { data },
              } = res;
              return data;
            }
          );
          setOrgMembers(members);
          setTeamId(team_id);
          setOrgName(org_name);
        } else {
          toast.error("Đơn vị chưa đăng ký đội tham gia môn võ DQTV");
          setOrgMembers([]);
        }
      }
    })();
  }, [formik.values.org_id]);

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
        {orgs?.length ? (
          <Col md="12">
            <InputSelect
              title={t("org_id")}
              data={orgs}
              k="name"
              name="org_id"
              v="id"
              handleChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.org_id}
            />
          </Col>
        ) : null}
        <Col md="12"></Col>
        <Row className="m-t-20">
          {listContent.current?.length ? (
            <>
              <Col md="6">
                <InputSelect
                  title={"Nội dung thi"}
                  data={listContent.current}
                  k="name"
                  name="content_id"
                  v="id"
                  handleChange={(e) => {
                    if (e.target.value != "") {
                      formik.handleChange(e);
                      formik.setFieldValue("team_id", teamId);
                      formik.setFieldValue("sport_id", sportId);
                      console.log(
                        listContent.current.filter(
                          (element: any) => element.id == e.target.value
                        )[0]
                      );
                      formik.setFieldValue(
                        "content_name",
                        listContent.current.filter(
                          (element: any) => element.id == e.target.value
                        )[0].name
                      );
                    }
                  }}
                  value={formik.values.content_id}
                />
              </Col>

              <Col md="6">
                <InputSelect
                  title={"Nội dung VĐV"}
                  data={listTypeGroup}
                  k="name"
                  name="type"
                  v="name"
                  handleChange={(e) => {
                    formik.handleChange(e);
                    if (e.target.value != "Thi đấu đồng diễn") {
                      setNumberAthele(3);
                    } else {
                      setNumberAthele(3);
                    }

                    formik.setFieldValue(
                      "gender",
                      listTypeGroup.filter(
                        (element: any) => element.name == e.target.value
                      )[0].gender
                    );
                  }}
                  value={formik.values.type}
                />
              </Col>
            </>
          ) : null}
        </Row>
        {displayedListTeammember.length > 0 ? (
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
                formik.setFieldValue(
                  "list_team_member",
                  selectedRows.map((row) => row.id)
                );
                // Update
                formik.setFieldValue(
                  "lst_member",
                  selectedRows.map((row, i) => {
                    return {
                      memberid: row.id,
                      indexs: i,
                    };
                  })
                );
                formik.setFieldValue(
                  "team_member_name",
                  selectedRows.map((row) => row.name).toString()
                );
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
          <H3 className="text-danger text-center">
            Chưa có dữ liệu, chọn đơn vị hoặc kiểm tra lại đăng ký thi
          </H3>
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
                "name",
                orgName + " - " + formik.values.type
              );
              formik.setFieldValue("sport_id", sportId);
              formik.setFieldValue("content_id", formik.values.content_id);
              if (formik.values.type && formik.values.content_id) {
                numberAtheleSelected > 1
                  ? formik.submitForm()
                  : toast.error(
                      "Chọn đúng số lượng thành viên cần thiết: (Tối thiểu " +
                        numberAthele +
                        ")"
                    );
              } else {
                toast.error(
                  "Vui lòng chọn đầy đủ các nội dung của nhóm thi đấu!"
                );
              }
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

const useGroupModal = ({ sportId, onSubmit, ...rest }: ITeamModal) => {
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
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <GroupForm
        sportId={sport_Id}
        onSubmit={handleSubmit}
        {...rest}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { TeamModal, handleToggle };
};

export { GroupForm, useGroupModal };
