import { Card, CardBody, Col } from 'reactstrap'
import { Margin } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { marginData, marginDetail } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const MarginCart = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={Margin} span={marginData}/>
        <CardBody>
          <div className="gradient-border">
            <div className="helper-common-box gap-0 mb-0">
              <div className="helper-box m-10 border bg-light"></div>
              <span>.m-10</span>
            </div>
            {marginDetail.map((item, index) => (
              <div className="helper-common-box gap-0 mb-0" key={index}>
                <div className={`helper-box m-${item} border bg-light`}></div>
                <span>{`.m-${item}`}</span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default MarginCart