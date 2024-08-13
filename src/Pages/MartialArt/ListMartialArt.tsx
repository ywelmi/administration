import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { InputSelect } from "../../Component/InputSelect";
import { N } from "../../name-conversion";

import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { LI, UL } from "../../AbstractElements";
import { TanTable } from "../../Component/Tables/TanTable/TanTble";
import { martialArtsGet } from "../../Service/martialArt";
import { useCategoryStore } from "../../store/categories";
import { useConfigStore } from "../../store/config";
import { useSportStore } from "../../store/sport";
import { DGender } from "../../type/enum";
import { TMartialArt } from "../../type/martialArt";
import "./style.css";

interface IListMartialArt {
  showAction?: boolean;
  selectableRows?: boolean;
  data?: TMartialArt[];
  onRowSelect?: (
    row: TMartialArt,
    e: React.MouseEvent<Element, MouseEvent>
  ) => void;
  onSelectedRowsChange?: (v: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: TMartialArt[];
  }) => void;
  columns?: ColumnDef<TMartialArt>[];
  selectableRowSelected?: (row: TMartialArt) => boolean;
}

const tableColumns: ColumnDef<TMartialArt>[] = [
  {
    accessorKey: "name",
    footer: (props) => props.column.id,
    header: N["name"],
    cell: (props) => props.getValue() as string,
  },
  {
    accessorKey: "gender",
    footer: (props) => props.column.id,
    header: N["gender"],
    cell: (props) => DGender[props.getValue() as number],
    meta: { custom: { gender: true } },
    filterFn: "equals",
  },
  {
    accessorKey: "age_id",
    footer: (props) => props.column.id,
    enableColumnFilter: false,
    header: function Age(props) {
      const { ages } = useCategoryStore();
      return (
        <div style={{ minWidth: "124px" }}>
          <div>{N["age"]}</div>
          <InputSelect
            data={ages}
            k="name"
            v="id"
            name="weigh"
            handleChange={(e) => props.column.setFilterValue(e.target.value)}
          />
        </div>
      );
    },
    cell: function Age(props) {
      const { ages } = useCategoryStore();
      return ages.find((a) => a.id === props.getValue())?.name;
    },
  },
  {
    accessorKey: "weight_id",
    footer: (props) => props.column.id,
    enableColumnFilter: false,
    header: function Weight(props) {
      const { weighs } = useCategoryStore();
      return (
        <div style={{ minWidth: "124px" }}>
          <div>{N["weigh"]}</div>
          <InputSelect
            data={weighs}
            k="name"
            v="id"
            name="weigh"
            handleChange={(e) => props.column.setFilterValue(e.target.value)}
          />
        </div>
      );
    },

    cell: function Weight(props) {
      const { weighs } = useCategoryStore();
      return weighs.find((a) => a.id === props.getValue())?.name;
    },
  },
];

const action: ColumnDef<TMartialArt> = {
  id: "actions",
  header: "#",
  cell: function Action(props) {
    const {
      row: { original: martialArtContent },
    } = props;
    const navigate = useNavigate();

    return (
      <UL className="action simple-list flex-row" id={martialArtContent.id}>
        {/* <LI className="btn"> */}
        {/*   <i className="icon-pencil-alt" onClick={handleToggleGenTree} /> */}
        {/*   <GenTreeMartialArtModal /> */}
        {/* </LI> */}
        <LI
          className="edit btn"
          onClick={() => {
            navigate(
              `/martialart/${martialArtContent.sport_id}/knockout/${martialArtContent.id}`
            );
          }}
        >
          <i className="icon-target cursor-pointer">Lịch đấu</i>
        </LI>
      </UL>
    );
  },
};

const ListMartialArt = ({
  data = [],
  showAction,
  onRowSelect,
  onSelectedRowsChange,
  columns = [...tableColumns],
  selectableRowSelected,
}: IListMartialArt) => {
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
        getRowId={(r) => r.id}
      />
    </div>
  );
};

// const sportId = "017358a8-fe81-45f6-914b-b8507987a343";
const PageMartialArt = () => {
  const [data, setData] = useState<TMartialArt[]>([]);

  const { sportSelector } = useConfigStore();
  const { sports } = useSportStore(sportSelector());
  const sportMartialArt = sports.find((s) => s.point_unit === 3);

  useEffect(() => {
    if (!sportMartialArt) return;
    martialArtsGet(sportMartialArt.id)
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setData(data);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [sportMartialArt]);

  return (
    <div className="page-body">
      <Breadcrumbs
        mainTitle={"Võ chiến đấu"}
        parent={"Lực lượng thường trực"}
      />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 card-no-border"></CardHeader>
              <CardBody>
                <ListMartialArt data={data} showAction />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// const WrapperTablequalifyingKnockout = () => {
//   return (
//     <KnockoutContextProvider>
//       <PageTablequalifyingKnockout />
//     </KnockoutContextProvider>
//   );
// };
export { PageMartialArt };
