import { Card, CardBody, Col } from 'reactstrap'
import { BadgesAsPartButtons, Messages } from '../../../../utils/Constant'
import { badgeButtonData } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import { Mail } from 'react-feather'
import DynamicBadgesAsPartButtons from './DynamicBadgesAsPartButtons'
import { Badges, Btn } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const BadgesAsPartButtonsCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeaderCommon title={BadgesAsPartButtons} span={badgeButtonData} />
        <CardBody>
          <div className="badge-spacing flex-column align-items-start">
            <Btn color="primary" className="d-flex align-items-center">{Messages}
              <Badges color="light" className="rounded-circle btn-p-space text-dark ms-2"><Mail /></Badges>
            </Btn>
            <DynamicBadgesAsPartButtons />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BadgesAsPartButtonsCart