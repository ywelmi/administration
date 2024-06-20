import { Card, CardBody, Col } from 'reactstrap'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { fontWeightData, fontWeightDetail } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'
import { FontWeight } from '../../../../utils/Constant'

const FontWeightCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={FontWeight} span={fontWeightData} />
        <CardBody>
          <div className="helper-common-box">
            <div className="f-w-100">You can set light font weight heading .f-w-100</div>
          </div>
          {fontWeightDetail.map((item, index) => (
            <div className="helper-common-box" key={index}>
              <div className={item}>{`You can set light font weight heading .${item}`}</div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default FontWeightCart