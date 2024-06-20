import { Card, CardBody, Col } from 'reactstrap'
import { FontSizes } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { fontSideData, fontSize } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const FontSizesCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CardHeaderCommon title={FontSizes} span={fontSize}/>
        <CardBody>
          <div className="gradient-border">
            <div className="font-wrapper border">
              <div className="f-14">Font-size .f-14</div>
            </div>
            {fontSideData.map((item, index) => (
              <div className="font-wrapper border" key={index}>
                <div className={item}>{`Font-size .${item}`}</div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FontSizesCart