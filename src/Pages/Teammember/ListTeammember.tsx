import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Label,
  Row,
} from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import {
  BasicDataTables,
  DataTables,
  SearchTableButton,
} from "../../utils/Constant";
import { LI, UL } from "../../AbstractElements";
import DataTable, { TableColumn } from "react-data-table-component";
import { useTranslation } from "react-i18next";
import { TTeammember } from "../../type/teammember";
import { useTeammemberStore } from "../../store/teammember";
import { useMemo, useState } from "react";
import { useTeammemberModal } from "./TeammemberForm";
import {
  teammemberCreate,
  teammemberDelete,
  teammemberUpdate,
} from "../../Service/teammember";
import { toast } from "react-toastify";
import { useConfirmModal } from "../../Component/confirmModal";
import { DGender, DRank } from "../../type/enum";
import { NAME_CONVERSION } from "../../name-conversion";

type TTeammemberColumn = TTeammember;

interface IListTeammember {
  showAction?: boolean;
  selectableRows?: boolean;
  onRowSelect?: (
    row: TTeammember,
    e: React.MouseEvent<Element, MouseEvent>,
  ) => void;
  onSelectedRowsChange?: (
    v: {
      allSelected: boolean;
      selectedCount: number;
      selectedRows: TTeammember[];
    },
  ) => void;
  columns?: TableColumn<TTeammemberColumn>[];
}

const tableColumns = ([
  "name",
  "gender",
  "rank",
  "team_name",
] as (keyof TTeammemberColumn)[]).map((c) => ({
  "name": NAME_CONVERSION[c],
  selector: (row: TTeammemberColumn) => {
    if (c == "gender") {
      const i = row[c as keyof TTeammemberColumn];
      return DGender[parseInt(i as string)];
    }
    if (c == "rank") {
      const i = row[c as keyof TTeammemberColumn];
      return DRank[parseInt(i as string)];
    }
    return row[c as keyof TTeammemberColumn];
  },
}));
const TeammemberTableAction = (
  { teammember }: { teammember: TTeammemberColumn },
) => {
  const { updateTeammember, deleteTeammember } = useTeammemberStore();
  const { t } = useTranslation();
  const handleUpdateTeammember = (teammember: TTeammember) => {
    console.log({ handleUpdateTeammember: teammember });
    teammemberUpdate(teammember).then(
      (res) => {
        const { status, data } = res;
        if (status === 200) {
          updateTeammember(data as TTeammember);
          toast.success(t("success"));
          return;
        }

        return Promise.reject(status);
      },
    ).catch((err) => {
      toast.error(t("error"));
      console.log({ err });
    });
  };
  const {
    handleToggle: handleToggleUpdateModal,
    TeammemberModal: TeammemberUpdateModal,
  } = useTeammemberModal({ onSubmit: handleUpdateTeammember, teammember });

  const handleConfirmDel = () => {
    const { confirm } = useConfirmModal();
    if (confirm) {
      teammemberDelete(teammember.id).then((res) => {
        const { status, data } = res;
        console.log({ status, data });
        if (status === 200) {
          toast.success(t("success"));
          deleteTeammember(teammember.id);
          return;
        }
        return Promise.reject(status);
      })
        .catch((err) => {
          toast.error(t("error"));
          console.log({ err });
        });
    }
    return;
  };

  return (
    <UL className="action simple-list flex-row" id={teammember.id}>
      <LI className="edit btn">
        <i
          className="icon-pencil-alt"
          onClick={handleToggleUpdateModal}
        />
        <TeammemberUpdateModal />
      </LI>
      <LI className="delete btn">
        <i className="icon-trash cursor-pointer" onClick={handleConfirmDel} />
      </LI>
    </UL>
  );
};

const ListTeammember = (
  {
    showAction,
    onRowSelect,
    onSelectedRowsChange,
    columns = [...tableColumns],
  }: IListTeammember,
) => {
  const [filterText, setFilterText] = useState("");
  const { teammembers } = useTeammemberStore();
  const filteredItems = teammembers.filter((item) =>
    item.name &&
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  if (columns.length > 0 && showAction) {
    columns.push(
      {
        name: "#",
        cell: (row: TTeammemberColumn) => (
          <TeammemberTableAction teammember={row} />
        ),
        sortable: true,
      },
    );
  }

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div
        id="basic-1_filter"
        className="dataTables_filter d-flex align-items-center"
      >
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilterText(e.target.value)}
          type="search"
          value={filterText}
        />
      </div>
    );
  }, [filterText]);

  return (
    <div className="table-responsive">
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        highlightOnHover
        striped
        persistTableHead
        selectableRowsHighlight
        onRowClicked={onRowSelect}
        onSelectedRowsChange={onSelectedRowsChange}
        selectableRows={!!onRowSelect || !!onSelectedRowsChange}
      />
    </div>
  );
};

const PageTeammember = () => {
  const { t } = useTranslation();
  const { addTeammember } = useTeammemberStore();
  const handleAddTeammember = (teammember: TTeammember) => {
    console.log({ handleAddTeammember: teammember });
    const { id, ...rests } = teammember;
    teammemberCreate(rests).then((res) => {
      const { status, data } = res;
      if (status === 200) {
        console.log({ addmember: data });
        addTeammember(data as TTeammember);
        toast.info(t("success"));
        return;
      }
      return Promise.reject(status);
    }).catch((err) => {
      toast.error(t("error"));
      console.log({ err });
    });
  };
  const {
    handleToggle: handleToggleAddModal,
    TeammemberModal: TeammemberAddModal,
  } = useTeammemberModal({ onSubmit: handleAddTeammember });
  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={BasicDataTables} parent={DataTables} />
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
                <ListTeammember />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { ListTeammember, PageTeammember };
