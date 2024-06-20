import { Col } from 'reactstrap'
import { BorderWidth } from '../../../../utils/Constant'
import { H6 } from '../../../../AbstractElements'
import { borderWidthData } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const BorderWidths = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper h-100 alert-light-light dark-helper">
        <H6 className="mb-3">{BorderWidth}</H6>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box border-1 border"> </div>
          <span>.border-1</span>
        </div>
        {borderWidthData.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box ${item} border`}> </div>
            <span>.{item}</span>
          </div>
        ))}
      </div>
    </Col>
  )
}

export default BorderWidths