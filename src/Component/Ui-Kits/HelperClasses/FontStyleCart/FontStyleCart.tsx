import { Card, CardBody, Col } from 'reactstrap'
import { P } from '../../../../AbstractElements'
import { FontStyle } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { fontData, fontStyleDetail } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const FontStyleCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={FontStyle} span={fontData} />
        <CardBody>
          <P className="f-s-normal">This is a <strong>.f-s-normal</strong> font-style</P>
          {fontStyleDetail.map((item, index) => (
            <P className={item} key={index}>This is a <strong>{item}</strong> font-style</P>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default FontStyleCart