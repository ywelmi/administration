import { ColumnDef } from "@tanstack/react-table";
import { Ref, useCallback, useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  InputGroupText,
  Row,
} from "reactstrap";
import { Btn, H1, H2, H3 } from "../../AbstractElements";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { InputSelect } from "../../Component/InputSelect";
import {
  ITanTableRef,
  TanTable,
} from "../../Component/Tables/TanTable/TanTble";
import { N } from "../../name-conversion";
import { getMoreFilterByValue } from "../../Service/_getParams";
import {
  getContentSport,
  getNumberAthele,
  lotsdrawResultTableGet,
  lotsdrawScheduleGet,
  lotsdrawsGet,
  // lotsdrawCreate,
  // lotsdrawDelete,
  lotsdrawUpdate,
} from "../../Service/lotsdraw";
import { martialArtArmyGroupDelete } from "../../Service/martialArt";
import {
  groupGetAll,
  martialArtMilitiaArmyGroupCreate,
} from "../../Service/martialArtMilitia";
import { useConfigStore } from "../../store/config";
import { useSportStore } from "../../store/sport";
import { TLotsDraw } from "../../type/lotsdraw";
import { convertToDate } from "../../utils/date";
import {
  useLotsDrawSubmitGroupModal,
  useLotsDrawSubmitModal,
  useLotsDrawUpdateAtheleModal,
} from "../LotsDrawSubmit/LotsDrawSubmitForm";
import { useTeamAtheleModal } from "./CreateGroupForm";
import { useLotsDrawModal } from "./LotsDrawForm";
import { useLotsDrawScheduleModal } from "./LotsDrawSchedule";

interface IListLotsDraw {
  showAction?: boolean;
  selectableRows?: boolean;
  onRowSelect?: (
    row: TLotsDraw,
    e: React.MouseEvent<Element, MouseEvent>
  ) => void;
  onSelectedRowsChange?: (v: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: TLotsDraw[];
  }) => void;
  columns?: ColumnDef<TLotsDraw>[];
  data?: TLotsDraw[];
  selectableRowSelected?: (row: TLotsDraw) => boolean;
  tableRef?: Ref<ITanTableRef<TLotsDraw>>;
}

const tableUnitColumns: ColumnDef<TLotsDraw>[] = [
  {
    accessorKey: "team_name",
    footer: (props) => props.column.id,
    header: N["team_name"],
    cell(props) {
      return <div className="form-control">{props.getValue() as string}</div>;
    },
  },
  {
    accessorKey: "ticket_index",
    footer: (props) => props.column.id,
    header: N["ticket_index"],
    cell(props) {
      return <div className="">{props.getValue() as string}</div>;
    },
  },
];
const isUpdated = (d: TLotsDraw) => {
  const detailCols: (keyof TLotsDraw)[] = [
    "ticket_index",
    "match_hour",
    "match_date",
    "locations",
  ];
  for (const c of detailCols) {
    if (!Object.keys(d).includes(c)) {
      return false;
    }
  }
  return true;
};

const ListUnitLotsDraw = ({
  showAction,
  onRowSelect,
  onSelectedRowsChange,
  columns = [...tableUnitColumns],
  data = [],
  tableRef,
  selectableRowSelected,
}: IListLotsDraw) => {
  // if (columns.length > 0 && showAction) {
  //   columns = [...columns, {
  //     name: "#",
  //     cell: (row: TLotsDrawColumn) => <LotsDrawTableAction lotsdraw={row} />,
  //     sortable: true,
  //   }];
  // }
  //
  //
  const tableData = data.map((d) => ({ ...d, isDetail: isUpdated(d) }));

  console.log({ tableData });
  return (
    <div className="table-responsive">
      <TanTable
        ref={tableRef}
        data={tableData}
        getRowId={getLotDrawId}
        columns={columns}
      />
    </div>
  );
};

const getLotDrawId = (d: TLotsDraw) => d.id;

//Component render page lots draw
const PageLotsDraw = () => {
  const tableColumns: ColumnDef<TLotsDraw>[] = [
    {
      accessorKey: "team_name",
      footer: (props) => props.column.id,
      header: N["team_name"],
      cell(props) {
        return <div className="form-control">{props.getValue() as string}</div>;
      },
    },
    {
      accessorKey: "ticket_index",
      footer: (props) => props.column.id,
      header: N["ticket_index"],
      cell(props) {
        return <div className="">{props.getValue() as string}</div>;
      },
    },

    {
      accessorKey: "match_hour",
      footer: (props) => props.column.id,
      header: N["match_hour"],
      cell({ getValue, row: { index, original }, column: { id }, table }) {
        return (
          <ReactDatePicker
            className="form-control"
            name="match_hour"
            // selected={new Date(original.match_date as string || new Date())}
            value={original.match_hour}
            onChange={(date) =>
              table.options.meta?.updateData(
                index,
                id,
                `${date?.getHours()}:${date?.getMinutes()}`
              )
            }
            showTimeSelect
            showTimeSelectOnly
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Giờ"
            // locale={"vi"}
          />
        );
      },
    },
    {
      accessorKey: "match_date",
      footer: (props) => props.column.id,
      header: N["match_date"],
      cell({ getValue, row: { index, original }, column: { id }, table }) {
        return (
          <ReactDatePicker
            className="form-control"
            name="date_join_army"
            showYearDropdown
            dropdownMode="select"
            peekNextMonth
            // selected={new Date(getValue() as string || new Date())}
            value={
              original.match_date
                ? convertToDate(original.match_date)
                : undefined
            }
            onChange={(date) => {
              table.options.meta?.updateData(index, id, date);
            }}
            // locale={"vi"}
            // dateFormat={"dd/MM/yyyy"}
          />
        );
      },
    },
    {
      accessorKey: "locations",
      footer: (props) => props.column.id,
      header: N["locations"],
    },
    {
      // accessorKey: "locations",
      header: "Lập lịch thi đấu",
      footer: (props) => props.column.id,
      cell({ getValue, row: { index, original }, column: { id }, table }) {
        // let hasEmptyFiled = false;
        // const idx = Object.values(original).findIndex((v) => v == null);
        // if (idx !== -1) hasEmptyFiled = true;
        // if (hasEmptyFiled) return null;
        // if (!original.isDetail) return null;

        const { LotsDrawUpdateAthele, handleToggle } =
          useLotsDrawUpdateAtheleModal({
            sportId: original.sport_id,
            team_id: original.team_id,
            content_id: original.content_id,
          });
        return (
          <Btn className="btn btn-success edit" onClick={handleToggle}>
            <i className="icon-pencil-alt" />
            Lập lịch
            <LotsDrawUpdateAthele />
          </Btn>
        );
      },
    },
    {
      // accessorKey: "locations",
      header: "Kết quả thi đấu",
      footer: (props) => props.column.id,
      cell({ getValue, row: { index, original }, column: { id }, table }) {
        // let hasEmptyFiled = false;
        // const idx = Object.values(original).findIndex((v) => v == null);
        // if (idx !== -1) hasEmptyFiled = true;
        // if (hasEmptyFiled) return null;
        // if (!original.isDetail) return null;
        const { LotsDrawSubmitModal, handleToggle } = useLotsDrawSubmitModal({
          sportId: original.sport_id,
          team_id: original.org_id,
          content_id: original.content_id,
          gender: gender,
        });
        return (
          <Btn className="btn btn-info edit" onClick={handleToggle}>
            <i className="icon-pencil-alt" />
            Cập nhật
            <LotsDrawSubmitModal />
          </Btn>
        );
      },
    },
  ];

  const ListContentLotsDraw = ({
    showAction,
    onRowSelect,
    onSelectedRowsChange,
    columns = [...tableColumns],
    data = [],
    tableRef,
    selectableRowSelected,
  }: IListLotsDraw) => {
    // if (columns.length > 0 && showAction) {
    //   columns = [...columns, {
    //     name: "#",
    //     cell: (row: TLotsDrawColumn) => <LotsDrawTableAction lotsdraw={row} />,
    //     sortable: true,
    //   }];
    // }
    //
    //
    const tableData = data.map((d) => ({ ...d, isDetail: isUpdated(d) }));

    console.log({ tableData });
    return (
      <div className="table-responsive">
        <TanTable
          ref={tableRef}
          data={tableData}
          getRowId={getLotDrawId}
          columns={columns}
        />
      </div>
    );
  };
  const tableGroupColumns: ColumnDef<TLotsDraw>[] = [
    {
      accessorKey: "team_name",
      footer: (props) => props.column.id,
      header: N["team_name"],
      cell(props) {
        return <div className="form-control">{props.getValue() as string}</div>;
      },
    },
    {
      accessorKey: "ticket_index",
      footer: (props) => props.column.id,
      header: N["ticket_index"],
      cell(props) {
        return <div className="">{props.getValue() as string}</div>;
      },
    },

    {
      accessorKey: "match_hour",
      footer: (props) => props.column.id,
      header: N["match_hour"],
      cell({ getValue, row: { index, original }, column: { id }, table }) {
        return (
          <ReactDatePicker
            className="form-control"
            name="match_hour"
            // selected={new Date(original.match_date as string || new Date())}
            value={original.match_hour}
            onChange={(date) =>
              table.options.meta?.updateData(
                index,
                id,
                `${date?.getHours()}:${date?.getMinutes()}`
              )
            }
            showTimeSelect
            showTimeSelectOnly
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Giờ"
            // locale={"vi"}
          />
        );
      },
    },
    {
      accessorKey: "match_date",
      footer: (props) => props.column.id,
      header: N["match_date"],
      cell({ getValue, row: { index, original }, column: { id }, table }) {
        return (
          <ReactDatePicker
            className="form-control"
            name="date_join_army"
            showYearDropdown
            dropdownMode="select"
            peekNextMonth
            // selected={new Date(getValue() as string || new Date())}
            value={
              original.match_date
                ? convertToDate(original.match_date)
                : undefined
            }
            onChange={(date) => {
              table.options.meta?.updateData(index, id, date);
            }}
            // locale={"vi"}
            // dateFormat={"dd/MM/yyyy"}
          />
        );
      },
    },
    {
      accessorKey: "locations",
      footer: (props) => props.column.id,
      header: N["locations"],
    },

    {
      // accessorKey: "locations",
      header: "Kết quả thi đấu",
      footer: (props) => props.column.id,
      cell({ getValue, row: { index, original }, column: { id }, table }) {
        // let hasEmptyFiled = false;
        // const idx = Object.values(original).findIndex((v) => v == null);
        // if (idx !== -1) hasEmptyFiled = true;
        // if (hasEmptyFiled) return null;
        // if (!original.isDetail) return null;

        const { LotsDrawSubmitGroupResultModal, handleToggle } =
          useLotsDrawSubmitGroupModal({
            sportId: original.sport_id,
            team_id: original.org_id,
            content_id: original.content_id,
          });
        return (
          <Btn
            className="btn btn-info edit"
            onClick={() => {
              lotsdrawResultTableGet(
                original.org_id,
                original.sport_id,
                original.content_id
              ).then(async (res) => {
                const {
                  data: { lst_ticket_group, lst_map_sport_content },
                  status,
                } = res;
                console.log(lst_ticket_group.length);
                if (status !== 200) return;
                if (lst_ticket_group.length > 0) {
                  handleToggle();
                } else {
                  toast.error("Đơn vị này chưa tạo đội thi đấu");
                  return <></>;
                }
              });
            }}
          >
            <i className="icon-pencil-alt" />
            Cập nhật
            <LotsDrawSubmitGroupResultModal />
          </Btn>
        );
      },
    },
    {
      // accessorKey: "locations",
      header: "Hủy đăng ký ",
      footer: (props) => props.column.id,
      cell({ getValue, row: { index, original }, column: { id }, table }) {
        // let hasEmptyFiled = false;
        // const idx = Object.values(original).findIndex((v) => v == null);
        // if (idx !== -1) hasEmptyFiled = true;
        // if (hasEmptyFiled) return null;
        // if (!original.isDetail) return null;

        const handleToggle = useCallback((sportId: string) => {
          const teamFilter = getMoreFilterByValue(
            "team_id",
            "=",
            original.team_id
          );

          groupGetAll({ filter: `[${teamFilter}]` })
            .then((res) => {
              const { data, status } = res;
              if (status === 200) {
                martialArtArmyGroupDelete(data.data[0].id)
                  .then((res) => {
                    const { data, status } = res;
                    if (status === 200) {
                      toast.success(N["success"]);
                      fetchData(sportId);
                      fetchDataTable(sportId, selectedContentSport);
                    }
                  })
                  .catch((err) => {
                    toast.error(N["failed"]);
                    console.log({ err });
                  });
              }
            })
            .catch((err) => {
              toast.error(N["failed"]);
              console.log({ err });
            });
        }, []);

        return (
          <Btn
            className="btn btn-danger edit"
            onClick={() => handleToggle(sportId)}
          >
            <i className="icon-pencil-alt" />
            Hủy đăng ký đội
          </Btn>
        );
      },
    },
  ];
  const ListGroupLotsDraw = ({
    showAction,
    onRowSelect,
    onSelectedRowsChange,
    columns = [...tableGroupColumns],
    data = [],
    tableRef,
    selectableRowSelected,
  }: IListLotsDraw) => {
    // if (columns.length > 0 && showAction) {
    //   columns = [...columns, {
    //     name: "#",
    //     cell: (row: TLotsDrawColumn) => <LotsDrawTableAction lotsdraw={row} />,
    //     sortable: true,
    //   }];
    // }
    //
    //
    const tableData = data.map((d) => ({ ...d, isDetail: isUpdated(d) }));

    console.log({ tableData });
    return (
      <div className="table-responsive">
        <TanTable
          ref={tableRef}
          data={tableData}
          getRowId={getLotDrawId}
          columns={columns}
        />
      </div>
    );
  };
  const { sportSelector, unitType } = useConfigStore();
  const { sports, sportsMain, sportsSub } = useSportStore(sportSelector());
  const [sportId, setSportId] = useState("");
  const [listSport, setListSport] = useState(sports);
  const { sport_id: paramSportId } = useParams();
  // số VĐV thi đấu trong 1 lượt
  const [numberPlayedPerRound, setNumberPlayedPerRound] = useState<number>(3);
  // số VĐV thi đấu trong 1 lượt
  const [selectedContentSport, setSelectedContentSport] = useState<string>("");
  const [contentType, setContentType] = useState<any>("");
  useEffect(() => {
    unitType == "LLTT"
      ? setListSport(sportsMain.filter((e) => e.point_unit == 1))
      : setListSport(sportsSub.filter((e) => e.point_unit == 1));
  }, []);
  const { selectSport } = useSportStore();

  const updateSportId = useCallback(
    (v: string) => {
      selectSport(v);
      setSportId(v);

      setData([]);
      setSelectedContentSport("");
    },
    [selectSport]
  );

  useEffect(() => {
    if (paramSportId) {
      updateSportId(paramSportId);
    }
  }, [paramSportId, updateSportId]);
  //danh sách các nội dung thi đấu của môn
  const [contentSport, setContent] = useState<any>([]);
  // kiểm tra đã cập nhật thăm đơn vị chưa
  const [gender, setGender] = useState(0);
  const numberAthele = useRef<any>();
  // dữ liệu bảng thăm theo nội dung
  const [data, setData] = useState<TLotsDraw[]>([]);
  // dữ liệu bảng thăm theo đơn vị
  const [dataUnit, setDataUnit] = useState<TLotsDraw[]>([]);
  const handleAddNew = (e: any) => {
    martialArtMilitiaArmyGroupCreate(e)
      .then((res) => {
        if (res.status === 200) {
          handleUpdate(selectedContentSport);
        }
      })
      .catch((err) => {
        toast.error(err.data);
        console.log({ err });
      });
    return;
  };
  useEffect(() => {
    if (sportId) {
      fetchData(sportId);
    }
  }, [sportId]);

  const handleSelectContent = (id: any) => {
    getNumberAthele(id)
      .then((res) => {
        const { data, status } = res;
        console.log({ data });
        if (status === 200) numberAthele.current = data;
      })
      .catch((err) => console.log({ err }));
    setSelectedContentSport(id);

    fetchData(sportId);
    fetchDataTable(sportId, id);
  };
  const fetchData = useCallback((sportId: string) => {
    getContentSport(sportId)
      .then((res) => {
        const { data, status } = res;
        console.log({ data });
        if (status === 200) setContent(data);
      })
      .catch((err) => console.log({ err }));
    lotsdrawsGet(sportId, "")
      .then((res) => {
        const { data, status } = res;
        console.log({ data });
        if (status === 200) {
          setDataUnit(data);
        }
      })
      .catch((err) => console.log({ err }));
  }, []);

  const fetchDataTable = useCallback((sportId: string, content_id: string) => {
    getContentSport(sportId)
      .then((res) => {
        var listContentSport;
        const { data, status } = res;
        console.log({ data });
        if (status === 200) listContentSport = data;
        setContent(data);
        if (content_id != "") {
          if (
            listContentSport!.filter((el: any) => el.id == content_id)[0]
              .content_type == 1
          ) {
            setContentType(
              listContentSport!.filter((el: any) => el.id == content_id)[0]
                .content_type
            );
            lotsdrawsGet(sportId, content_id)
              .then((res) => {
                const { data, status } = res;
                console.log({ data });
                if (status === 200) {
                  setData(data);
                }
              })
              .catch((err) => console.log({ err }));
            lotsdrawScheduleGet(numberPlayedPerRound, sportId, content_id).then(
              (res) => {
                const { data, status } = res;
                if (status === 200)
                  toast.info("Đã cập nhật thông tin làn lượt");
              }
            );
          } else {
            lotsdrawsGet(sportId, content_id)
              .then((res) => {
                const { data, status } = res;
                console.log({ data });
                if (status === 200) setData(data);
              })
              .catch((err) => console.log({ err }));
            lotsdrawScheduleGet(numberPlayedPerRound, sportId, content_id).then(
              (res) => {
                const { data, status } = res;
                if (status === 200)
                  toast.info("Đã cập nhật thông tin làn lượt");
              }
            );
          }
        }
      })
      .catch((err) => console.log({ err }));
  }, []);
  const ref = useRef<ITanTableRef<TLotsDraw>>(null);
  const autoCallUpdateSchedule = useCallback(
    (content_id: any) => {
      lotsdrawsGet(sportId, "")
        .then((res) => {
          const { data, status } = res;
          console.log({ data });
          if (status === 200) {
            if (data && sportId) {
              const dataSubmit = data!.map((e: TLotsDraw) => {
                return {
                  id: e.id,
                  sport_id: e.sport_id,
                  content_id: content_id,
                  team_id: e.team_id,
                  ticket_index: e.ticket_index,
                  has_ranking: true,
                  match_hour: e.match_hour,
                  match_date: e.match_date,
                  locations: e.locations,
                };
              });
              lotsdrawUpdate(sportId, content_id, dataSubmit)
                .then((res) => {
                  const { data, status } = res;
                  if (status === 200) {
                    fetchData(sportId);
                    fetchDataTable(sportId, content_id);
                  }
                })
                .catch((err) => {
                  toast.error(err.data);
                  console.log({ err });
                });

              return;
            }
          }
        })
        .catch((err) => console.log({ err }));
    },
    [sportId]
  );
  const handleUpdate = useCallback(
    (content_id_update: string) => {
      const newData = ref.current?.getData();

      if (newData && sportId) {
        const dataSubmit = newData!.map((e: TLotsDraw) => {
          return {
            id: e.id,
            sport_id: e.sport_id,
            content_id: content_id_update,
            team_id: e.team_id,
            ticket_index: e.ticket_index,
            has_ranking: true,
            match_hour: e.match_hour,
            match_date: e.match_date,
            locations: e.locations,
          };
        });

        lotsdrawUpdate(sportId, content_id_update, dataSubmit)
          .then((res) => {
            const { data, status } = res;
            if (status === 200) {
              toast.success(N["success"]);
              fetchData(sportId);
              fetchDataTable(sportId, content_id_update);
            }
          })
          .catch((err) => {
            toast.error(N["failed"]);
            console.log({ err });
          });

        return;
      }
      toast.error(N["failed"]);
    },
    [sportId]
  );

  const { handleToggle: toggleLotsDrawModal, LotsDrawModal: LotsDrawAddModal } =
    useLotsDrawModal({
      sportId: sportId,
      content_id: selectedContentSport,
      onSubmit: () => {
        if (sportId) {
          fetchData(sportId);
          fetchDataTable(sportId, selectedContentSport);
        }
      },
    });
  const {
    LotsDrawScheduleModal: LotsDrawScheduleModal,
    handleToggle: toggleLotsDrawScheduleModal,
  } = useLotsDrawScheduleModal({
    sportId: sportId,
    content_id: selectedContentSport,
    numberPerRound: numberPlayedPerRound,
    numberOfTeam: data,
  });
  const { handleToggle: handleToggleAddModal, TeamModal: TeamAddModal } =
    useTeamAtheleModal({
      sportId: sportId,
      content_id: selectedContentSport,
      onSubmit: (e) => {
        handleAddNew(e);
      },
    });

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={"Thi đấu bốc thăm"} parent={"HTTQ2024"} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 card-no-border">
                {/* <Row className="d-flex justify-content-center">
                                    <Col md={6}>
                                        <InputSelect
                                            title={N["sport"]}
                                            data={sports.filter(({ point_unit }) => {
                                                return point_unit === 1;
                                            })}
                                            k="name"
                                            v="id"
                                            name="sport"
                                            value={sportId}
                                            handleChange={(e) => {
                                                setSportId(e.target.value);
                                                setSelectedContentSport("");
                                            }}
                                        />
                                    </Col>
                                </Row> */}
                {sportId &&
                  sports.filter((e) => e.id == sportId).length > 0 && (
                    <div className="d-flex justify-content-center">
                      <div className="flex gap-2 mt-4">
                        <div
                          className="btn btn-danger"
                          onClick={() => {
                            if (sportId) {
                              toggleLotsDrawModal();

                              // setTimeout(() => fetchData(sportId), 2000);
                            } else {
                              toast.warn("Mời chọn môn thi");
                            }
                          }}
                        >
                          <i className="fa fa-plus" /> &nbsp;
                          {"Cập nhật kết quả bốc thăm đơn vị"}
                        </div>
                      </div>
                    </div>
                  )}
                <LotsDrawAddModal />
              </CardHeader>
              <CardBody>
                {sportId && sports.filter((e) => e.id == sportId).length > 0 ? (
                  <>
                    <div className=" justify-content-center">
                      <H1 className="text-center m-10">
                        {sports &&
                          sports.filter((e) => e.id == sportId).length > 0 &&
                          sports.filter((e) => e.id == sportId)[0].name}
                      </H1>
                      <Row className="justify-content-center">
                        <Col md={5}>
                          <div className="m-b-10">
                            {contentSport.length > 0 && (
                              <InputSelect
                                title={"Chọn nội dung thi đấu"}
                                data={contentSport.sort(
                                  (a: any, b: any) => a.indexs - b.indexs
                                )}
                                k="name"
                                v="id"
                                name="sport"
                                value={selectedContentSport}
                                handleChange={(e) => {
                                  setSelectedContentSport(e.target.value);
                                  setGender(
                                    contentSport.filter(
                                      (el: any) => el.id == e.target.value
                                    )[0].gender
                                  );
                                  setContentType(
                                    contentSport.filter(
                                      (el: any) => el.id == e.target.value
                                    )[0].content_type
                                  );
                                  handleSelectContent(e.target.value);
                                }}
                              />
                            )}
                          </div>
                          {selectedContentSport != "" ? (
                            <H2 className="text-center m-20">
                              Lịch và kết quả thi đấu nội dung{" "}
                              <span className="text-danger">
                                {(contentSport &&
                                  contentSport.filter(
                                    (e: any) => e.id == selectedContentSport
                                  ).length > 0 &&
                                  contentSport.filter(
                                    (e: any) => e.id == selectedContentSport
                                  )[0].name) ??
                                  ""}
                              </span>
                            </H2>
                          ) : (
                            <H3 className="text-center">Bảng thăm đơn vị</H3>
                          )}
                          {selectedContentSport != "" && (
                            <>
                              <div className="d-flex align-items-center">
                                <InputGroupText className="text-center">
                                  <strong>Số VĐV thi đấu trong 1 lượt:</strong>
                                </InputGroupText>
                                <Row className="d-flex justify-content-center align-items-center m-l-10">
                                  <Col
                                    md={3}
                                    className="d-flex justify-content-center align-items-center"
                                  >
                                    <Btn
                                      className={`bg-primary`}
                                      onClick={() =>
                                        setNumberPlayedPerRound(
                                          (value) => value + 1
                                        )
                                      }
                                    >
                                      <i className="fa fa-plus" />
                                    </Btn>
                                  </Col>
                                  <Col
                                    md={6}
                                    className="d-flex justify-content-center align-items-center"
                                  >
                                    <Input
                                      className="me-1"
                                      type="number"
                                      value={numberPlayedPerRound}
                                      onChange={(e) =>
                                        setNumberPlayedPerRound(
                                          parseInt(e.target.value)
                                        )
                                      }
                                      min={2}
                                      readOnly
                                    />
                                  </Col>
                                  <Col
                                    md={3}
                                    className="d-flex justify-content-center align-items-center"
                                  >
                                    <Btn
                                      className={`bg-primary`}
                                      onClick={() => {
                                        if (numberPlayedPerRound == 2) return;
                                        setNumberPlayedPerRound(
                                          (value) => value - 1
                                        );
                                      }}
                                    >
                                      <i className="fa fa-minus" />
                                    </Btn>
                                  </Col>
                                </Row>

                                <LotsDrawScheduleModal />
                              </div>
                              <div className="d-flex justify-content-center mt-2">
                                <div
                                  className="btn btn-warning text-dark"
                                  onClick={() => {
                                    if (selectedContentSport != "") {
                                      autoCallUpdateSchedule(
                                        selectedContentSport
                                      );

                                      // setTimeout(() => fetchData(sportId), 2000);
                                    } else {
                                      toast.warn("Mời chọn môn thi");
                                    }
                                  }}
                                >
                                  <i className="fa fa-plus" /> &nbsp;
                                  {"Làm mới bốc thăm nội dung"}
                                </div>
                              </div>
                            </>
                          )}
                        </Col>
                      </Row>
                    </div>
                    {selectedContentSport != "" && contentType == "1" && (
                      <div className="d-flex justify-content-center m-10">
                        <Btn
                          className="btn btn-info m-l-10"
                          onClick={() => {
                            selectedContentSport != ""
                              ? toggleLotsDrawScheduleModal()
                              : alert("Chưa chọn nội dung thi");
                          }}
                        >
                          Xem lịch thi đấu
                        </Btn>
                      </div>
                    )}

                    {selectedContentSport == "" ? (
                      <>
                        <ListUnitLotsDraw
                          tableRef={ref}
                          data={dataUnit}
                          showAction
                        />
                        <H3 className="text-center text-danger">
                          Chưa chọn nội dung thi đấu{" "}
                        </H3>
                      </>
                    ) : (
                      dataUnit.length == 0 && (
                        <H3 className="text-center">
                          Chưa thực hiện bốc thăm đơn vị{" "}
                        </H3>
                      )
                    )}

                    {selectedContentSport != "" && (
                      <>
                        {contentType == "2" && (
                          <div className="d-flex justify-content-center m-t-10">
                            <div
                              className="btn btn-primary"
                              onClick={() => {
                                handleToggleAddModal();
                              }}
                            >
                              <i className="fa fa-plus" />
                              &nbsp;
                              {"Tạo đội tiếp sức"}
                            </div>
                            <TeamAddModal />
                          </div>
                        )}
                        {data.length > 0 ? (
                          <div>
                            {contentType == 1 ? (
                              <ListContentLotsDraw
                                tableRef={ref}
                                data={data}
                                showAction
                              />
                            ) : (
                              <ListGroupLotsDraw
                                tableRef={ref}
                                data={data}
                                showAction
                              />
                            )}

                            <div className="d-flex justify-content-end">
                              <div
                                className="btn btn-primary "
                                onClick={() => {
                                  if (selectedContentSport != "")
                                    handleUpdate(selectedContentSport);
                                  else {
                                    toast.warn("Mời chọn môn thi");
                                  }
                                }}
                              >
                                <i className="fa fa-edit" />
                                {"Cập nhật lịch"}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <H3 className="text-center">Chưa lựa chọn môn thi</H3>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export { PageLotsDraw };
