import { Button, ButtonGroup, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { TGroup, TTeam } from "../../type/team";
import { useFormik } from "formik";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCompetitionStore } from "../../store/competition";
import { useOrgStore } from "../../store/org";
import { useSportStore } from "../../store/sport";
import { InputSelect } from "../../Component/InputSelect";
import { TTeammember } from "../../type/teammember";
import { ListTeammember } from "../Teammember/ListTeammember";
import { DGender, DRank } from "../../type/enum";
import { convertToDate } from "../../utils/date";
import { N } from "../../name-conversion";
import { getFilterByValue } from "../../Service/_getParams";
import { teammembersGet } from "../../Service/teammember";
import { ColumnDef } from "@tanstack/react-table";
import { martialArtMilitiaArmyGroupGetContent } from "../../Service/martialArtMilitia";

interface IGroupForm {
    team?: TGroup;
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
        cell: (props) => DRank[props.getValue() as number],
    },
    {
        accessorKey: "gender",
        footer: (props) => props.column.id,
        header: N["gender"],
        cell: (props) => {
            return DGender[parseInt(props.getValue() as string)];
        },
        meta: { custom: { gender: true } },
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

const GroupForm = ({ team: initTeam, onSubmit, onCancel }: IGroupForm) => {
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
    const listContent = useRef<any>(null);
    const listTypeGroup = [
        { id: 1, name: "Đôi nam 1", number: 2 },
        { id: 2, name: "Đôi nam 2", number: 2 },

        { id: 3, name: "Đôi nữ 1", number: 2 },

        { id: 4, name: "Đôi nữ 2", number: 2 },

        { id: 5, name: "Đồng diễn", number: 100 },
    ];
    const fetch_data_content = () => {
        (async () => {
            const contents = await martialArtMilitiaArmyGroupGetContent().then((res) => {
                return res.data;
            });
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
    const [numberAtheleSelected, setNumberAtheleSelected] = useState(2);
    const [orgMembers, setOrgMembers] = useState<TTeammember[]>([]);
    useEffect(() => {
        fetch_data_content();
    }, []);
    useEffect(() => {
        (async () => {
            const { org_id: f_org_id } = formik.values;
            if (f_org_id) {
                const memberFilter = getFilterByValue("org_id", "=", f_org_id);
                const members = await teammembersGet({ filter: memberFilter }).then((res) => {
                    const {
                        data: { data },
                    } = res;
                    return data;
                });
                setOrgMembers(members);
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
                <Col md="12">
                    <InputSelect
                        title={t("sport_id")}
                        data={sports.filter((e) => e.id == "6e929924-a5d7-4b4b-a261-cbe4e6b9a97b")}
                        k="name"
                        name="sport_id"
                        v="id"
                        handleChange={(e) => {}}
                        value={"6e929924-a5d7-4b4b-a261-cbe4e6b9a97b"}
                    />
                </Col>
                <Row className="m-t-20">
                    {listContent.current?.length ? (
                        <>
                            <Col md="6">
                                <InputSelect
                                    title={"Nội dung thi"}
                                    data={listContent.current}
                                    k="name"
                                    name="content_name"
                                    v="content_id"
                                    handleChange={(e) => {
                                        formik.handleChange(e);
                                    }}
                                    value={formik.values.content_id}
                                />
                            </Col>

                            <Col md="6">
                                <InputSelect
                                    title={"Nội dung VĐV"}
                                    data={listTypeGroup}
                                    k="name"
                                    name="name"
                                    v="number"
                                    handleChange={(e) => {
                                        formik.handleChange(e);
                                        setNumberAthele(parseInt(e.target.value));
                                    }}
                                    value={formik.values.type}
                                />
                            </Col>
                        </>
                    ) : null}
                </Row>

                <Col md="12" className="form-check checkbox-primary">
                    <Label for="list_team_member" check>
                        {t("teammember")}
                    </Label>

                    <ListTeammember
                        data={displayedListTeammember}
                        columns={tableTeammemberColumns}
                        onSelectedRowsChange={({ selectedRows }) => {
                            if (
                                selectedRows.length === formik.values.list_team_member?.length ||
                                selectedRows.length === formik.values.list_member_id?.length
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
                                "list_member_id",
                                selectedRows.map((row) => row.id)
                            );
                            setNumberAtheleSelected(selectedRows.length);
                        }}
                        selectableRowSelected={(r) => {
                            return !!team.list_member_id?.includes(r.id) || !!team.list_team_member?.includes(r.id);
                        }}
                    />
                </Col>

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
                        onClick={() =>
                            numberAthele == numberAtheleSelected && numberAthele != 100
                                ? formik.submitForm()
                                : alert("Chọn đúng số lượng thành viên cần thiết: " + numberAthele)
                        }
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

const useGroupModal = ({ onSubmit, ...rest }: ITeamModal) => {
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
            <GroupForm onSubmit={handleSubmit} {...rest} onCancel={() => setOpened(false)} />
        </CommonModal>
    );

    return { TeamModal, handleToggle };
};

export { GroupForm, useGroupModal };
