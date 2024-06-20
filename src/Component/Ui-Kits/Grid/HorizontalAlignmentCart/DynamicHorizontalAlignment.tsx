import { Col, Row } from 'reactstrap'
import { horizontalAlignment } from '../../../../Data/Ui-Kits/Grid/GridData'

const DynamicHorizontalAlignment = () => {
  return (
    <>
      {horizontalAlignment.map((item, index) => (
        <Row className={`${item} bg-light`} key={index}>
          <Col xs="5">
            <span className="bg-white text-dark">One column</span>
          </Col>
          <Col xs="5">
            <span className="bg-white text-dark">Two column</span>
          </Col>
        </Row>
      ))}
    </>
  )
}

export default DynamicHorizontalAlignment