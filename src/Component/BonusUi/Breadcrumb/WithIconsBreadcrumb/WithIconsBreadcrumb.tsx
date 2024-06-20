import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import { BreadcrumbBonusUi, BreadcrumbHeading, Href, WithIconsBreadcrumbs } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { withIconBreadcrumbData } from '../../../../Data/BonusUi/Breadcrumb/Breadcrumb'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const WithIconsBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card className="height-equal">
        <CardHeaderCommon title={WithIconsBreadcrumbs} span={withIconBreadcrumbData} />
        <CardBody>
          <Breadcrumb className="bg-white p-l-0">
            <BreadcrumbItem>
              <Link to={Href}><i className="fa fa-home"></i></Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbBonusUi}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="bg-white m-b-0 p-b-0 p-l-0" >
            <BreadcrumbItem>
              <Link to={Href}><i className="fa fa-home"></i></Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to={Href}>{BreadcrumbBonusUi}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbHeading}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}

export default WithIconsBreadcrumb