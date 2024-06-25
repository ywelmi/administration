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
import { TOrg } from "../../type/org";
import { useOrgStore } from "../../store/org";
import { useMemo, useState } from "react";
import { useOrgModal } from "./OrgForm";
import { orgCreate, orgDelete, orgUpdate } from "../../Service/org";
import { toast } from "react-toastify";
import { useConfirmModal } from "../../Component/confirmModal";

const OrgTableAction = ({ org }: { org: TOrg }) => {
  const { updateOrg, deleteOrg } = useOrgStore();
  const { t } = useTranslation();
  const handleUpdateOrg = (org: TOrg) => {
    console.log({ handleUpdateOrg: org });
    orgUpdate(org).then(
      (res) => {
        const { status, data } = res;
        if (status === 200) {
          updateOrg(data as TOrg);
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
  const { handleToggle: handleToggleUpdateModal, OrgModal: OrgUpdateModal } =
    useOrgModal({ onSubmit: handleUpdateOrg, org });

  const handleConfirmDel = () => {
    const { confirm } = useConfirmModal();
    if (confirm) {
      orgDelete(org.id).then((res) => {
        const { status, data } = res;
        console.log({ status, data });
        if (status === 200) {
          toast.success(t("success"));
          deleteOrg(org.id);
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
    <UL className="action simple-list flex-row" id={org.id}>
      <LI className="edit btn">
        <i
          className="icon-pencil-alt"
          onClick={handleToggleUpdateModal}
        />
        <OrgUpdateModal />
      </LI>
      <LI className="delete btn">
        <i className="icon-trash cursor-pointer" onClick={handleConfirmDel} />
      </LI>
    </UL>
  );
};

const ListOrg = () => {
  const [filterText, setFilterText] = useState("");
  const { t } = useTranslation();
  const { orgs, addOrg } = useOrgStore();
  const filteredItems = orgs.filter((item) =>
    item.name &&
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns: TableColumn<TOrg>[] = [
    ...["orgname", "name"].map((c) => ({
      "name": t(c),
      selector: (row: TOrg) => row[c as keyof TOrg],
    })),
  ];
  if (columns.length > 0) {
    columns.push(
      {
        name: "#",
        cell: (row: TOrg) => <OrgTableAction org={row} />,
        sortable: true,
      },
    );
  }

  const handleAddOrg = (org: TOrg) => {
    console.log({ handleAddOrg: org });
    const { id, ...rests } = org;
    orgCreate(rests).then((res) => {
      const { status, data } = res;
      if (status === 200) {
        addOrg(data as TOrg);
        toast.info(t("success"));
        return;
      }
      return Promise.reject(status);
    }).catch((err) => {
      toast.error(t("error"));
      console.log({ err });
    });
  };
  const { handleToggle: handleToggleAddModal, OrgModal: OrgAddModal } =
    useOrgModal({ onSubmit: handleAddOrg });

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
                <OrgAddModal />
              </CardHeader>
              <CardBody>
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
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { ListOrg };
