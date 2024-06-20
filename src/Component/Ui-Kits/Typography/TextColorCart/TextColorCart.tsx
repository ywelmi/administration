import { Card, CardBody, Col } from 'reactstrap'
import { TextColor } from '../../../../utils/Constant'
import { P } from '../../../../AbstractElements'
import { textColorData, textDataColor } from '../../../../Data/Ui-Kits/Typography/Typography'
import CardHeaderCommon from '../../CardHeaderCommon'

const TextColorCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeaderCommon title={TextColor} span={textColorData} />
        <CardBody>
          <div className="d-flex flex-column gap-2">
            <P className="txt-primary mb-0">This is Primary text You can archive this adding.<code>.txt_primary</code> Class</P>
            {textDataColor.map(({ title, code }, index) => (
              <P className={`${code} mb-0`} key={index}>{`This is ${title} text You can archive this adding.`}<code>{code}</code> Class</P>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default TextColorCart