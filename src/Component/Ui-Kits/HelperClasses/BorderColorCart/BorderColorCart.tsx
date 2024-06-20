import { Card, CardBody, Col } from 'reactstrap'
import { BorderColor } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { borderColorData, borderColorDetail } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const BorderColorCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CardHeaderCommon title={BorderColor} span={borderColorDetail} />
        <CardBody>
          <div className="gradient-border">
            <div className="d-flex align-items-center mb-2 gap-2">
              <div className="helper-box b-primary border fill-wrapper"> </div>.b-primary
            </div>
            {borderColorData.map((item, index) => (
              <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                <div className={`helper-box ${item} border fill-wrapper`}> </div>.{item}
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BorderColorCart