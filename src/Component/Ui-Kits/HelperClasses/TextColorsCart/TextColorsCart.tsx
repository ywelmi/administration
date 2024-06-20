import { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { TextColors } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { textColorDetail, textDataColors } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const TextColorsCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={TextColors} span={textColorDetail} />
        <CardBody>
          <div className="helper-common-box"></div>
          <div className="d-flex align-items-center gap-2">
            <div className="font-primary">This is a <strong>font-primary</strong> text used class as .font-primary</div>
          </div>
          {textDataColors.map((item, index) => (
            <Fragment key={index}>
              <div className="helper-common-box"></div>
              <div className="d-flex align-items-center gap-2" key={index}>
                <div className={item}>This is a <strong>{item}</strong> text used class as .{item}</div>
              </div>
            </Fragment>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default TextColorsCart