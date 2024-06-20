import { Col } from 'reactstrap'
import { AdditiveRadiusHeading } from '../../../../utils/Constant'
import { H6 } from '../../../../AbstractElements'
import { radiusData } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const AdditiveRadius = () => {
  return (
    <Col xl="4" sm="12">
      <div className="border-wrapper h-100 border">
        <H6 className="mb-3">{AdditiveRadiusHeading}</H6>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-radius radius-wrapper rounded"></div>.rounded
        </div>
        {radiusData.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-radius radius-wrapper ${item}`}></div>.{item}
          </div>
        ))}
      </div>
    </Col>
  )
}

export default AdditiveRadius