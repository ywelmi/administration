import { Card, CardBody, Col } from 'reactstrap'
import { BadgeHeadingsExample } from '../../../../utils/Constant'
import { badgeExData } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import { Badges, H1, H2, H3, H4, H5, H6 } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const BadgeHeadingsExampleCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={BadgeHeadingsExample} span={badgeExData} />
        <CardBody>
          <H1 className="pb-2 d-flex gap-2 flex-wrap">Badge Heading 1
            <Badges color="primary">Latest</Badges>
          </H1>
          <H2 className="pb-2 d-flex gap-2 flex-wrap">Badge Heading 2
            <Badges color="secondary">Trending</Badges>
          </H2>
          <H3 className="pb-2 d-flex gap-2 flex-wrap">Badge Heading 3
            <Badges color="success">Checkout</Badges>
          </H3>
          <H4 className="pb-2 d-flex gap-2 flex-wrap">Badge Heading 4
            <Badges color="warning">Inbox</Badges>
          </H4>
          <H5 className="pb-2 d-flex gap-2 flex-wrap">Badge Heading 5
            <Badges color="danger">Login</Badges>
          </H5>
          <H6 className="pb-2 d-flex gap-2 flex-wrap">Badge Heading 6
            <Badges color="dark">Logout</Badges>
          </H6>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BadgeHeadingsExampleCart