import { useMemo, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";
import { Btn, LI, UL } from "../../AbstractElements";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { useSportStore } from "../../store/sport";
import { TSport } from "../../type/sport";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { sportUpdate } from "../../Service/sport";
import { useConfigStore } from "../../store/config";
import { useLotsDrawModal } from "../LotsDraw/LotsDrawForm";

type TSportColumn = TSport;

const SportTableAction = ({ sport }: { sport: TSportColumn }) => {
  const { updateSport } = useSportStore();
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

  // const { handleToggle: handleToggleUpdateModal, SportModal: SportUpdateModal } = useSportModal({
  //     onSubmit: handleUpdateSport,
  //     sport,
  // });

  const { handleToggle: toggleLotsDrawModal, LotsDrawModal } = useLotsDrawModal(
    { sportId: sport.id }
  );

  // const handleConfirmDel =  async () => {
  //   if (confirm) {
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

  return (
    <UL className="action simple-list flex-row" id={sport.id}>
      {sport.point_unit === 1 ? (
        <>
          <LI className="edit btn">
            <Btn color="info" type="button" onClick={toggleLotsDrawModal}>
              Xem Bốc Thăm
            </Btn>
            <LotsDrawModal />
          </LI>
          <LI className="edit btn">
            <Btn
              color="light"
              type="button"
              onClick={() =>
                sport.id ? navigate(`/lotsdraw/list/${sport.id}`) : undefined
              }
            >
              Lập lịch
            </Btn>
          </LI>
        </>
      ) : (
        <>
          <LI className="edit btn">
            <Btn
              color="primary"
              type="button"
              onClick={() =>
                sport.id
                  ? navigate(`/tablequalifyings/list/${sport.id}`)
                  : undefined
              }
            >
              Xem Vòng Bảng
            </Btn>
          </LI>
          <LI className="edit btn">
            <Btn
              color="secondary"
              type="button"
              onClick={() =>
                sport.id
                  ? navigate(`/tablequalifyings/knockout/${sport.id}`)
                  : undefined
              }
            >
              Xem Vòng Loại
            </Btn>
          </LI>
        </>
      )}

      {/* <LI className="edit btn">
        <i className="icon-pencil-alt" onClick={handleToggleUpdateModal} />
        <SportUpdateModal />
      </LI> */}
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

  // const handlePerRowsChange = (newPerPage: number, page: number) => {
  //   const take = newPerPage;
  //   const skip = Math.max(page - 1, 0) * take;
  //   updateGetFilter({ take, skip });
  // };

  // const handlePageChange = (page: number) => {
  //   if (!filters) return;
  //   const { take } = filters;
  //   if (take) {
  //     updateGetFilter({ skip: Math.max(page - 1, 0) * take });
  //   }
  // };

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
        <Label className="me-2">Tìm kiếm</Label>
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
        // onChangeRowsPerPage={handlePerRowsChange}
        // onChangePage={handlePageChange}
        selectableRowSelected={selectableRowSelected}
      />
    </div>
  );
};

const PageProgress = () => {
  const { sportSelector } = useConfigStore();
  const { sports } = useSportStore(sportSelector());

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
      <Breadcrumbs mainTitle={"Tiến độ thi đấu"} parent={"HTTQ2024"} />
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

export { ListSport, PageProgress };
