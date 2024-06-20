import { Card,CardBody,Col,Pagination, PaginationItem, PaginationLink} from "reactstrap";
import {Href,Next,PaginationWithActiveAndDisabled,Previous} from "../../../../utils/Constant";
import { activeDisablePaginationsData } from "../../../../Data/BonusUi/Pagination/Pagination";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const PaginationActiveAndDisabled = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CardHeaderCommon title={PaginationWithActiveAndDisabled} span={activeDisablePaginationsData}/>
        <CardBody>
          <Pagination className="pagination-success pagin-border-success mb-3">
            <PaginationItem disabled>
              <PaginationLink href={Href} previous>
                {Previous}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href={Href}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href} next>
                {Next}
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationActiveAndDisabled;
