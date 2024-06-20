import { Col } from 'reactstrap'
import { ExtendedBackgroundColor } from '../../../../utils/Constant'
import { H6 } from '../../../../AbstractElements'

const ExtendedBackgroundColors = () => {
  return (
    <Col xl="4" sm="12">
      <div className="border-wrapper h-100 border">
        <H6 className="mb-3">{ExtendedBackgroundColor}</H6>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box light-card"> </div>.light-card
        </div>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box light-background border"> </div>.light-background
        </div>
      </div>
    </Col>
  )
}

export default ExtendedBackgroundColors