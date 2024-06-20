import { Col } from 'reactstrap'
import { H6 } from '../../../../AbstractElements'
import { TextColors } from '../../../../utils/Constant'
import { textColorData } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const TextColor = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper alert-light-light h-100 dark-helper">
        <H6 className="mb-3">{TextColors}</H6>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box helper-text border txt-primary">C </div>
          <span>.txt-primary</span>
        </div>
        {textColorData.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box helper-text border ${item} ${item === "txt-light" ? "bg-dark" : ""}`}>C </div>
            <span>.{item}</span>
          </div>
        ))}
      </div>
    </Col>
  )
}

export default TextColor