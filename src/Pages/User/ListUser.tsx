import { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { LI, UL } from "../../AbstractElements";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { confirmModal } from "../../Component/confirmModal";
import { TanTable } from "../../Component/Tables/TanTable/TanTble";
import { N } from "../../name-conversion";
import { userCreate, userDelete, userUpdate } from "../../Service/user";
import { useUserStore } from "../../store/user";
import { TUser } from "../../type/user";
import { BasicDataTables, DataTables } from "../../utils/Constant";
import { useUserModal } from "./UserForm";

type TUserColumn = TUser;
interface IListUser {
  showAction?: boolean;
  selectableRows?: boolean;
  onSelectedRowsChange?: (v: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: TUser[];
  }) => void;
  columns?: ColumnDef<TUser>[];
  data?: TUserColumn[];
  selectableRowSelected?: (row: TUserColumn) => boolean;
}

// const userAction: () => ColumnDef<TUser> = () => ({
const userAction: ColumnDef<TUser> = {
  id: "actions",
  header: "#",
  cell: function Action(props) {
    const {
      row: { original: user },
    } = props;
    const { updateUser, deleteUser } = useUserStore();
    const { t } = useTranslation();
    const handleUpdateUser = (user: TUser) => {
      console.log({ handleUpdateUser: user });
      userUpdate(user)
        .then((res) => {
          const { status, data } = res;
          if (status === 200) {
            updateUser({ ...user, ...data });
            toast.success(t("success"));
            return;
          }

          return Promise.reject(status);
        })
        .catch((err) => {
          toast.error(t("error"));
          console.log({ err });
        });
    };

    const {
      handleToggle: handleToggleUpdateModal,
      UserModal: UserUpdateModal,
    } = useUserModal({
      onSubmit: handleUpdateUser,
      user,
    });

    const handleConfirmDel = async () => {
      const { confirm } = await confirmModal();
      if (confirm) {
        userDelete(user.id)
          .then((res) => {
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
        <LI className="edit btn" onClick={() => handleUpdateUser(user)}>
          <i className="icon-signal cursor-pointer" />
          Lưu
        </LI>
      </UL>
    );
  },
};

const defaultColumns: ColumnDef<TUser>[] = [
  {
    accessorKey: "username",
    footer: (props) => props.column.id,
    header: N["username"],
    cell: (props) => props.getValue() as string,
  },
  {
    accessorKey: "fullname",
    footer: (props) => props.column.id,
    header: N["fullname"],
  },
];

const ListUser = ({
  data = [],
  showAction,
  onSelectedRowsChange,
  columns = [...defaultColumns],
  selectableRowSelected,
}: IListUser) => {
  let displayColumns = [...columns];
  if (showAction) {
    displayColumns = [...displayColumns, userAction];
  }

  return (
    <div className="table-responsive">
      <TanTable
        data={data}
        columns={displayColumns}
        onSelectedRowsChange={onSelectedRowsChange}
        selectableRowSelected={selectableRowSelected}
        getRowId={(r) => r.id}
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
    userCreate(rests)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          addUser(data as TUser);
          toast.info(t("success"));
          return;
        }
        return Promise.reject(status);
      })
      .catch((err) => {
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
              <CardHeader className="pb-0 card-no-border ">
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
                  columns={[...defaultColumns]}
                  onSelectedRowsChange={(selectedRows) =>
                    console.log({ selectedRows })
                  }
                  selectableRowSelected={(row) =>
                    row.fullname.includes("admin")
                  }
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
