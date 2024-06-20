import { Card, CardBody, Col} from 'reactstrap'
import { NumberedBadgeList } from '../../../../utils/Constant'
import { numberBadgeData, numberBadgeDataList } from '../../../../Data/Ui-Kits/Lists/Lists'
import { Badges, LI, OL } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const NumberedBadgeLists = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CardHeaderCommon title={NumberedBadgeList} span={numberBadgeData} />
        <CardBody>
          <OL className="list-group list-group-numbered">
            <LI className="d-flex justify-content-between align-items-start flex-wrap">
              <div className="ms-2 me-auto">Stella Nowland</div>
              <Badges color="warning" pill className="p-2">Freelance</Badges>
            </LI>
            {numberBadgeDataList.map(({ title, color, text }, index) => (
              <LI className="d-flex justify-content-between align-items-start flex-wrap" key={index}>
                <div className="ms-2 me-auto">{title}</div>
                <Badges color={color} pill className="p-2">{text}</Badges>
              </LI>
            ))}
          </OL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default NumberedBadgeLists