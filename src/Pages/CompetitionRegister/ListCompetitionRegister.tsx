import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { DataTables } from "../../utils/Constant";
import DataTable, { TableColumn } from "react-data-table-component";
import { useTranslation } from "react-i18next";
import { TSport } from "../../type/sport";
import { useSportStore } from "../../store/sport";
import { N } from "../../name-conversion";
import { ListSport } from "../Sport/ListSport";

type TSportColumn = TSport;

const PageCompetitionRegister = () => {
  const { t } = useTranslation();
  const { addSport, sports } = useSportStore();

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
      <Breadcrumbs mainTitle={"Môn thi"} parent={DataTables} />
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
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { PageCompetitionRegister };
