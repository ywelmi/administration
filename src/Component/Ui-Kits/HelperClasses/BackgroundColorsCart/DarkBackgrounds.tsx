import { Col } from 'reactstrap'
import { H6 } from '../../../../AbstractElements'
import { DarkBackground } from '../../../../utils/Constant'
import { darkBackgroundData } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const DarkBackgrounds = () => {
  return (
    <Col xl="4" sm="6">
      <div className="border-wrapper h-100 border">
        <H6 className="mb-3">{DarkBackground}</H6>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box bg-primary"></div>.bg-primary
        </div>
        {darkBackgroundData.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box ${item}`}></div>.{item}
          </div>
        ))}
      </div>
    </Col>
  )
}

export default DarkBackgrounds