import { Col } from 'reactstrap'
import { H6 } from '../../../../AbstractElements'
import { BorderColor } from '../../../../utils/Constant'
import { borderColorCartData } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const BorderColors = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper h-100 alert-light-light dark-helper">
        <H6 className="mb-3">{BorderColor}</H6>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box border-primary border"></div>
          <span>.border-primary</span>
        </div>
        {borderColorCartData.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box ${item} border`}></div>
            <span>.{item}</span>
          </div>
        ))}
      </div>
    </Col>
  )
}

export default BorderColors