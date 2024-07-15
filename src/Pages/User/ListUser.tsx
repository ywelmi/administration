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
import { TUser } from "../../type/user";
import { useUserStore } from "../../store/user";
import { useMemo, useState } from "react";
import { useUserModal } from "./UserForm";
import { userCreate, userDelete, userUpdate } from "../../Service/user";
import { toast } from "react-toastify";
import { useConfirmModal } from "../../Component/confirmModal";
import { N } from "../../name-conversion";

type TUserColumn = TUser;
interface IListUser {
  showAction?: boolean;
  selectableRows?: boolean;
  onRowSelect?: (row: TUser, e: React.MouseEvent<Element, MouseEvent>) => void;
  onSelectedRowsChange?: (
    v: { allSelected: boolean; selectedCount: number; selectedRows: TUser[] },
  ) => void;
  columns?: TableColumn<TUserColumn>[];
  data?: TUserColumn[];
  selectableRowSelected?: (row: TUserColumn) => boolean;
}

const UserTableAction = ({ user }: { user: TUser }) => {
  const { updateUser, deleteUser } = useUserStore();
  const { t } = useTranslation();
  const handleUpdateUser = (user: TUser) => {
    console.log({ handleUpdateUser: user });
    userUpdate(user).then(
      (res) => {
        const { status, data } = res;
        if (status === 200) {
          updateUser(data as TUser);
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

  const { handleToggle: handleToggleUpdateModal, UserModal: UserUpdateModal } =
    useUserModal({ onSubmit: handleUpdateUser, user });

  const handleConfirmDel = () => {
    const { confirm } = useConfirmModal();
    if (confirm) {
      userDelete(user.id).then((res) => {
        const { status, data } = res;
        console.log({ status, data });
        if (status === 200) {
          toast.success(t("success"));
          deleteUser(user.id);
          return;
        }
      })
        .catch((err) => {
          toast.error(t("error"));
          console.log({ err });
        });
    }
    return;
  };

  return (
    <UL className="action simple-list flex-row" id={user.id}>
      <LI className="edit btn" onClick={handleToggleUpdateModal}>
        <i className="icon-pencil-alt" />
        <UserUpdateModal />
      </LI>
      <LI className="delete btn" onClick={handleConfirmDel}>
        <i className="icon-trash cursor-pointer" />
      </LI>
    </UL>
  );
};

const tableColumns = (["username", "fullname"] as (keyof TUserColumn)[])
  .map((c) => ({
    "name": N[c],
    sortable: true,
    selector: (row: TUserColumn) => {
      return row[c as keyof TUserColumn] as (string | number);
    },
  }));

const ListUser = ({
  data = [],
  showAction,
  onRowSelect,
  onSelectedRowsChange,
  columns = [...tableColumns],
  selectableRowSelected,
}: IListUser) => {
  const [filterText, setFilterText] = useState("");
  const filteredItems = data.filter((item) =>
    item.fullname &&
    item.fullname.toLowerCase().includes(filterText.toLowerCase())
  );

  if (columns.length > 0 && showAction) {
    columns = [...columns, {
      name: "#",
      cell: (row: TUser) => <UserTableAction user={row} />,
      sortable: true,
    }];
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
        // progressPending={loading}
        paginationServer
        // paginationTotalRows={total}
        // onChangeRowsPerPage={handlePerRowsChange}
        // onChangePage={handlePageChange}
        selectableRowSelected={selectableRowSelected}
      />
    </div>
  );
};

const PageUser = () => {
  const { t } = useTranslation();
  const { users, addUser } = useUserStore();
  const handleAddUser = (user: TUser) => {
    console.log({ handleAddUser: user });
    const { id, ...rests } = user;
    userCreate(rests).then((res) => {
      const { status, data } = res;
      if (status === 200) {
        addUser(data as TUser);
        toast.info(t("success"));
        return;
      }
      return Promise.reject(status);
    }).catch((err) => {
      toast.error(t("error"));
      console.log({ err });
    });
  };
  const { handleToggle: handleToggleAddModal, UserModal: UserAddModal } =
    useUserModal({ onSubmit: handleAddUser });

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
                <UserAddModal />
              </CardHeader>
              <CardBody>
                <ListUser
                  data={users}
                  showAction
                  columns={[...tableColumns]}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export { ListUser, PageUser };
