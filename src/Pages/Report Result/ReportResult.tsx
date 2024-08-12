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
import { Btn, LI, UL } from "../../AbstractElements";
import DataTable, { TableColumn } from "react-data-table-component";
import { useTranslation } from "react-i18next";
import { TSport } from "../../type/sport";
import { useSportStore } from "../../store/sport";
import { useMemo, useState } from "react";

import {
  sportCreate,
  sportDelete,
  sportUpdate,
  sportXuatPhieuDiem,
} from "../../Service/sport";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { useNavigate } from "react-router-dom";
import { useLotsDrawModal } from "../LotsDraw/LotsDrawForm";
import { useConfigStore } from "../../store/config";

type TSportColumn = TSport;

const SportTableAction = ({ sport }: { sport: TSportColumn }) => {
  const { updateSport, deleteSport } = useSportStore();
  const { t } = useTranslation();

  const handleUpdateSport = (sport: TSport) => {
    console.log({ handleUpdateSport: sport });
    sportUpdate(sport)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          updateSport(data as TSport);
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

  // const handleConfirmDel = () => {
  //   const { confirm } = useConfirmModal();
  //   if (confirm) {
  //     sportDelete(sport.id).then((res) => {
  //       const { status, data } = res;
  //       console.log({ status, data });
  //       if (status === 200) {
  //         toast.success(t("success"));
  //         deleteSport(sport.id);
  //         return;
  //       }
  //       return Promise.reject(status);
  //     })
  //       .catch((err) => {
  //         toast.error(t("error"));
  //         console.log({ err });
  //       });
  //   }
  //   return;
  // };

  const navigate = useNavigate();

  const handleDownloadClick = () => {
    sportXuatPhieuDiem(sport.id);
  };

  return (
    <UL className="action simple-list flex-row" id={sport.id}>
      <>
        <LI className="edit btn">
          <Btn color="warning" type="button" onClick={handleDownloadClick}>
            Phiếu Điểm
          </Btn>
        </LI>
      </>
    </UL>
  );
};

interface IListSport {
  showAction?: boolean;
  selectableRows?: boolean;
  onRowSelect?: (row: TSport, e: React.MouseEvent<Element, MouseEvent>) => void;
  onSelectedRowsChange?: (v: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: TSport[];
  }) => void;
  columns?: TableColumn<TSportColumn>[];
  data?: TSportColumn[];
  selectableRowSelected?: (row: TSportColumn) => boolean;
}

const tableColumns = (["name"] as (keyof TSportColumn)[]).map((c) => ({
  name: N[c],
  sortable: true,
  selector: (row: TSportColumn) => {
    return row[c as keyof TSportColumn] as string | number;
  },
}));

const ListSport = ({
  data = [],
  showAction,
  onRowSelect,
  onSelectedRowsChange,
  columns = [...tableColumns],
  selectableRowSelected,
}: IListSport) => {
  const [filterText, setFilterText] = useState("");
  const { updateGetFilter, total, loading, filters } = useSportStore();
  const filteredItems = data.filter((item) => item);

  const handlePerRowsChange = (newPerPage: number, page: number) => {
    const take = newPerPage;
    const skip = Math.max(page - 1, 0) * take;
    updateGetFilter({ take, skip });
  };

  const handlePageChange = (page: number) => {
    if (!filters) return;
    const { take } = filters;
    if (take) {
      updateGetFilter({ skip: Math.max(page - 1, 0) * take });
    }
  };

  if (columns.length > 0 && showAction) {
    columns = [
      ...columns,
      {
        name: "#",
        cell: (row: TSportColumn) => <SportTableAction sport={row} />,
        sortable: true,
      },
    ];
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
            setFilterText(e.target.value)
          }
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
        progressPending={loading}
        paginationServer
        paginationTotalRows={total}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        selectableRowSelected={selectableRowSelected}
      />
    </div>
  );
};

const PageReportResult = () => {
  const { t } = useTranslation();
  const { sportSelector } = useConfigStore();
  const { addSport, sports } = useSportStore(sportSelector());

  // const handleAddSport = (sport: TSport) => {
  //   console.log({ handleAddSport: sport });
  //   const { id, ...rests } = sport;
  //   sportCreate(rests).then((res) => {
  //     const { status, data } = res;
  //     console.log({ addSportResult: data });
  //     if (status === 200) {
  //       addSport(data as TSport);
  //       toast.info(t("success"));
  //       return;
  //     }
  //     return Promise.reject(status);
  //   }).catch((err) => {
  //     toast.error(t("error"));
  //     console.log({ err });
  //   });
  // };

  // const { handleToggle: handleToggleAddModal, SportModal: SportAddModal } =
  //   useSportModal({ onSubmit: handleAddSport });

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={"Xuất phiếu điểm"} parent={"HTTQ2024"} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              {/* <CardHeader className="pb-0 card-no-border"> */}
              {/*   <div className="btn btn-primary" onClick={handleToggleAddModal}> */}
              {/*     <i className="fa fa-plus" /> */}
              {/*     {"Thêm mới"} */}
              {/*   </div> */}
              {/*   <SportAddModal /> */}
              {/* </CardHeader> */}
              <CardBody>
                <ListSport
                  data={sports}
                  showAction
                  // columns={[...tableColumns]}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { ListSport, PageReportResult };
