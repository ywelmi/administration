import { Card, CardBody, Col } from 'reactstrap'
import { Padding } from '../../../../utils/Constant'
import { H6 } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { paddingCartData, paddingCartDetail } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const PaddingCart = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={Padding} span={paddingCartData} />
        <CardBody>
          <div className="border-wrapper h-100 alert-light-light dark-helper">
            <H6 className="mb-3">{Padding}</H6>
            <div className="helper-common-box helper-p-wrapper">
              <div className="helper-p-box p-10 bg-light border">
                <span>.p-10</span>
              </div>
              {paddingCartDetail.map((item, index) => (
                <div className={`helper-p-box p-${item} bg-light border`} key={index}>
                  <span>{`.p-${item}`}</span>
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default PaddingCart