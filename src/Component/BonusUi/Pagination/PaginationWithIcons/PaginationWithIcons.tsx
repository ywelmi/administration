import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href, PaginationWithIcon } from "../../../../utils/Constant";
import { iconPaginationData, nextData } from "../../../../Data/BonusUi/Pagination/Pagination";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const PaginationWithIcons = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CardHeaderCommon title={PaginationWithIcon} span={iconPaginationData}/>
        <CardBody>
          <Pagination className="pagination-secondary pagin-border-secondary mb-3">
            <PaginationItem>
              <PaginationLink href={Href} first></PaginationLink>
            </PaginationItem>
            {nextData.map((item, index) => (
              <PaginationItem key={index}>
                <PaginationLink href={Href}>{item}</PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationLink href={Href} last></PaginationLink>
            </PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationWithIcons;
