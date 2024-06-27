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
import { TSport } from "../../type/sport";
import { useSportStore } from "../../store/sport";
import { useMemo, useState } from "react";
import { useSportModal } from "./SportForm";
import { sportCreate, sportDelete, sportUpdate } from "../../Service/sport";
import { toast } from "react-toastify";
import { useConfirmModal } from "../../Component/confirmModal";

type TSportColumn = TSport;

const SportTableAction = ({ sport }: { sport: TSportColumn }) => {
  const { updateSport, deleteSport } = useSportStore();
  const { t } = useTranslation();
  const handleUpdateSport = (sport: TSport) => {
    console.log({ handleUpdateSport: sport });
    sportUpdate(sport).then(
      (res) => {
        const { status, data } = res;
        if (status === 200) {
          updateSport(data as TSport);
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
    SportModal: SportUpdateModal,
  } = useSportModal({ onSubmit: handleUpdateSport, sport });

  const handleConfirmDel = () => {
    const { confirm } = useConfirmModal();
    if (confirm) {
      sportDelete(sport.id).then((res) => {
        const { status, data } = res;
        console.log({ status, data });
        if (status === 200) {
          toast.success(t("success"));
          deleteSport(sport.id);
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
    <UL className="action simple-list flex-row" id={sport.id}>
      <LI className="edit btn">
        <i
          className="icon-pencil-alt"
          onClick={handleToggleUpdateModal}
        />
        <SportUpdateModal />
      </LI>
      <LI className="delete btn">
        <i className="icon-trash cursor-pointer" onClick={handleConfirmDel} />
      </LI>
    </UL>
  );
};

const ListSport = () => {
  const [filterText, setFilterText] = useState("");
  const { t } = useTranslation();
  const { sports, addSport } = useSportStore();
  const filteredItems = sports.filter((item) =>
    item.name &&
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns: TableColumn<TSportColumn>[] = [
    ...["name", "competition_name"].map((c) => ({
      "name": t(c),
      selector: (row: TSportColumn) => {
        return row[c as keyof TSportColumn];
      },
    })),
  ];
  if (columns.length > 0) {
    columns.push(
      {
        name: "#",
        cell: (row: TSportColumn) => <SportTableAction sport={row} />,
        sortable: true,
      },
    );
  }

  const handleAddSport = (sport: TSport) => {
    console.log({ handleAddSport: sport });
    const { id, ...rests } = sport;
    sportCreate(rests).then((res) => {
      const { status, data } = res;
      if (status === 200) {
        addSport(data as TSport);
        toast.info(t("success"));
        return;
      }
      return Promise.reject(status);
    }).catch((err) => {
      toast.error(t("error"));
      console.log({ err });
    });
  };
  const { handleToggle: handleToggleAddModal, SportModal: SportAddModal } =
    useSportModal({ onSubmit: handleAddSport });

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
                <SportAddModal />
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

export { ListSport };
