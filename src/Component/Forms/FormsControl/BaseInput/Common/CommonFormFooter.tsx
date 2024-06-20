import { CardFooter, Col } from 'reactstrap'
import { Cancel, BasicSubmitButton } from '../../../../../utils/Constant'
import { Btn } from '../../../../../AbstractElements'

const CommonFormFooter = () => {
  return (
    <CardFooter className="text-end">
      <Col sm="9" className="offset-sm-3">
        <Btn color="primary" className="me-3">
          {BasicSubmitButton}
        </Btn>
        <Btn color="light" type="reset" >
          {Cancel}
        </Btn>
      </Col>
    </CardFooter>
  )
}

export default CommonFormFooter