import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import { BreadcrumbBootstrapTable, BreadcrumbHome, BreadcrumbTable, Href, VariationOfBreadcrumbs } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { variationOfBreadcrumbData } from '../../../../Data/BonusUi/Breadcrumb/Breadcrumb'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const VariationOfBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card className="height-equal">
        <CardHeaderCommon title={VariationOfBreadcrumbs} span={variationOfBreadcrumbData} />
        <CardBody className="breadcrumb-space">
          <Breadcrumb className="breadcrumb-no-divider mb-0 gap-2">
            <BreadcrumbItem className="mb-1 mb-xl-0 me-1">
              <Link to={Href}>{BreadcrumbHome}{` -> `}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem className="ps-0 mb-1 mb-xl-0 me-1">
              <Link to={Href}>{BreadcrumbTable}{` -> `}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem className="ps-0 mb-1 mb-xl-0 me-1">
              <Link to={Href}>{BreadcrumbBootstrapTable}{` -> `}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active className="ps-0">{`Basic Tables`}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}

export default VariationOfBreadcrumb