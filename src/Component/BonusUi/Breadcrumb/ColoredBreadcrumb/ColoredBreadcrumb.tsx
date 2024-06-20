import { Card, CardBody, Col } from 'reactstrap'
import { ColoredBreadcrumbs } from '../../../../utils/Constant'
import StaticColoredBreadcrumb from './StaticColoredBreadcrumb'
import DynamicColoredBreadcrumb from './DynamicColoredBreadcrumb'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { coloredBreadcrumbData } from '../../../../Data/BonusUi/Breadcrumb/Breadcrumb'

const ColoredBreadcrumb = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={ColoredBreadcrumbs} span={coloredBreadcrumbData} />
        <CardBody>
          <StaticColoredBreadcrumb />
          <DynamicColoredBreadcrumb />
        </CardBody>
      </Card>
    </Col>
  )
}

export default ColoredBreadcrumb