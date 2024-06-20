import { Col } from 'reactstrap'
import { H6 } from '../../../../AbstractElements'
import { AdditiveBorder } from '../../../../utils/Constant'
import { additiveData } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const AdditiveBorders = () => {
  return (
    <Col xl="4" sm="6">
      <div className="border-wrapper h-100 border">
        <H6 className="mb-3">{AdditiveBorder}</H6>
        <div className="helper-common-box">
          <div className="helper-box bg-light border"></div>.border
        </div>
        {additiveData.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box bg-light ${item}`}></div>.{item}
          </div>
        ))}
      </div>
    </Col>
  )
}

export default AdditiveBorders