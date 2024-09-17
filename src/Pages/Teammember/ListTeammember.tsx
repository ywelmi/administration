import { ColumnDef, Row as TanRow } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { LI, UL } from "../../AbstractElements";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { confirmModal } from "../../Component/confirmModal";
import { TanTable } from "../../Component/Tables/TanTable/TanTble";
import { N } from "../../name-conversion";
import {
  getTeammemberPhoto,
  teammemberCreate,
  teammemberDelete,
  teammemberUpdate,
} from "../../Service/teammember";
import { useConfigStore } from "../../store/config";
import { useSportStore } from "../../store/sport";
import { useTeammemberStore } from "../../store/teammember";
import { DGender, DRank } from "../../type/enum";
import { TTeammember } from "../../type/teammember";
import { convertToDate } from "../../utils/date";
import { useTeammemberModal } from "./TeammemberForm";

interface IListTeammember {
  showAction?: boolean;
  selectableRows?: boolean;
  data?: TTeammember[];
  onRowSelect?: (
    row: TTeammember,
    e: React.MouseEvent<Element, MouseEvent>
  ) => void;
  onSelectedRowsChange?: (v: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: TTeammember[];
  }) => void;
  columns?: ColumnDef<TTeammember>[];
  selectableRowSelected?: (row: TTeammember) => boolean;
  enableRowSelection?: (row: TanRow<TTeammember>) => boolean;
}

const tableColumns: ColumnDef<TTeammember>[] = [
  {
    accessorKey: "photo",
    footer: (props) => props.column.id,
    header: N["photo"],
    cell: function Cell(props): React.ReactElement | null {
      const [src, setSrc] = useState("#");
      useEffect(() => {
        const photoId = props.getValue() as string;
        if (!photoId) return;
        getTeammemberPhoto(photoId).then((imSrc) => {
          setSrc(imSrc.url);
        });
      }, [props]);
      return src ? <img src={src}></img> : null;
    },
  },
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
  // {
  //   accessorKey: "created",
  //   footer: (props) => props.column.id,
  //   header: N["created"],
  //   cell: (props) => convertToDate(props.getValue() as string),
  //   filterFn: "dateFilter",
  //   meta: { custom: { date: true } },
  // },
  {
    accessorKey: "dob",
    footer: (props) => props.column.id,
    header: N["dob"],
    cell: (props) => convertToDate(props.getValue() as string),
    filterFn: "dateFilter",
    meta: { custom: { date: true } },
  },

  // {
  //   accessorKey: "date_join_army",
  //   footer: (props) => props.column.id,
  //   header: N["date_join_army"],
  //   cell: (props) => convertToDate(props.getValue() as string),
  //   filterFn: "dateFilter",
  //   meta: { custom: { date: true } },
  // },
  {
    accessorKey: "org_name",
    footer: (props) => props.column.id,
    header: N["org_name"],
    cell: (props) => props.getValue() as string,
  },
  // TODO: filter this
  // {
  //   accessorKey: "has_army",
  //   footer: (props) => props.column.id,
  //   header: N["has_army"],
  //   cell: (props) => convertToDate(props.getValue() as string),
  // },
  // {
  //   accessorKey: "has_militia",
  //   footer: (props) => props.column.id,
  //   header: N["has_militia"],
  //   cell: (props) => convertToDate(props.getValue() as string),
  // },
  // {
  //   accessorKey: "id_number",
  //   footer: (props) => props.column.id,
  //   header: N["id_number"],
  //   cell: (props) => props.getValue() as string,
  // },
  // {
  //   accessorKey: "date_of_issue",
  //   footer: (props) => props.column.id,
  //   header: N["date_of_issue"],
  //   cell: (props) => convertToDate((props.getValue() as string) || new Date()),
  //   filterFn: "dateFilter",
  //   meta: { custom: { date: true } },
  // },
  // {
  //   accessorKey: "issuing_authority",
  //   footer: (props) => props.column.id,
  //   header: N["issuing_authority"],
  //   cell: (props) => props.getValue() as string,
  // },
  // {
  //   accessorKey: "weights",
  //   footer: (props) => props.column.id,
  //   header: N["weights"],
  //   cell: (props) => props.getValue() as string,
  // },
  // {
  //   accessorKey: "competition_name",
  //   footer: (props) => props.column.id,
  //   header: N["competition_name"],
  //   cell: (props) => props.getValue() as string,
  // },
  {
    accessorKey: "sport_id",
    footer: (props) => props.column.id,
    header: N["sport_id"],
    cell: function Sport(props) {
      const { sportSelector } = useConfigStore();
      const { sports } = useSportStore(sportSelector());
      const sport_id = props.getValue() as string;
      const sport = sports.find((s) => s.id === sport_id);
      if (!sport?.name) return "Chưa có môn thi";
      return sport.name;
    },
  },
];

const action: ColumnDef<TTeammember> = {
  id: "actions",
  header: "#",
  cell: function Action(props) {
    const {
      row: { original: teammember },
    } = props;

    const { updateTeammember, deleteTeammember } = useTeammemberStore();
    const handleUpdateTeammember = (teammember: TTeammember) => {
      console.log({ handleUpdateTeammember: teammember });
      teammemberUpdate(teammember)
        .then((res) => {
          const { status, data } = res;
          if (status === 200) {
            updateTeammember(data as TTeammember);
            toast.success(N["success"]);
            return;
          }

          return Promise.reject(status);
        })
        .catch((err) => {
          toast.error(N["error"]);
          console.log({ err });
        });
    };

    const {
      handleToggle: handleToggleUpdateModal,
      TeammemberModal: TeammemberUpdateModal,
    } = useTeammemberModal({
      onSubmit: handleUpdateTeammember,
      teammember,
    });

    const handleConfirmDel = async () => {
      const { confirm } = await confirmModal();
      console.log({ confirm });
      if (confirm) {
        teammemberDelete(teammember.id)
          .then((res) => {
            const { status, data } = res;
            console.log({ status, data });
            if (status === 200) {
              toast.success(N["success"]);
              deleteTeammember(teammember.id);
              return;
            }
            return Promise.reject(status);
          })
          .catch((err) => {
            const {
              response: { data },
            } = err;
            if (data) toast.error(data);
            else {
              toast.error(N["error"]);
            }
            console.log({ err });
          });
      }
      return;
    };

    return (
      <UL className="action simple-list flex-row" id={teammember.id}>
        <LI className="edit btn">
          <i className="icon-pencil-alt" onClick={handleToggleUpdateModal} />
          <TeammemberUpdateModal />
        </LI>
        <LI className="delete btn" onClick={handleConfirmDel}>
          <i className="icon-trash cursor-pointer" />
        </LI>
      </UL>
    );
  },
};

const ListTeammember = ({
  data = [],
  showAction,
  onRowSelect,
  onSelectedRowsChange,
  columns = [...tableColumns],
  selectableRowSelected,
  enableRowSelection,
}: IListTeammember) => {
  let displayColumns = [...columns];

  if (showAction) {
    displayColumns = [...displayColumns, action];
  }

  return (
    <div className="table-responsive">
      <TanTable
        data={data}
        columns={displayColumns}
        onSelectedRowsChange={onSelectedRowsChange}
        selectableRowSelected={selectableRowSelected}
        enableRowSelection={enableRowSelection}
        getRowId={(r) => r.id}
        // resizeableColumns
      />
    </div>
  );
};

const PageTeammember = () => {
  const { t } = useTranslation();
  const { addTeammember } = useTeammemberStore();
  const { teammembers } = useTeammemberStore();

  const handleAddTeammember = (teammember: TTeammember) => {
    console.log({ handleAddTeammember: teammember });
    const { id, ...rests } = teammember;
    teammemberCreate(rests)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          console.log({ addmember: data });
          addTeammember(data as TTeammember);
          toast.info(t("success"));
          return;
        }
        return Promise.reject(status);
      })
      .catch((err) => {
        toast.error(err?.data || t("error"));
        console.log({ err });
      });
  };
  const {
    handleToggle: handleToggleAddModal,
    TeammemberModal: TeammemberAddModal,
  } = useTeammemberModal({
    onSubmit: handleAddTeammember,
  });

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={"Danh sách vận động viên"} parent={"HTTQ2024"} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 card-no-border">
                <div className="btn btn-primary" onClick={handleToggleAddModal}>
                  <i className="fa fa-plus" />
                  {"Thêm mới"}
                </div>
                <TeammemberAddModal />
              </CardHeader>
              <CardBody>
                <ListTeammember data={teammembers} showAction />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { ListTeammember, PageTeammember };
