import { ButtonGroup, Col, Input, Label } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { Option1, Option2 } from '../../../../utils/Constant'

const StaticRadioButtonGroup = () => {
  return (
    <Col xl="4" md="6" sm="12">
      <div className="btn-radio">
        <ButtonGroup>
          <Btn color="primary">
            <div className="radio radio-primary">
              <Input id="radio1" type="radio" name="radio-1" />
              <Label for='radio1'>{Option1}</Label>
            </div>
          </Btn>
          <Btn color="primary" active>
            <div className="radio radio-primary">
              <Input id="radio2" type="radio" name="radio-1" />
              <Label for='radio2'>{Option2}</Label>
            </div>
          </Btn>
        </ButtonGroup>
      </div>
    </Col>
  )
}

export default StaticRadioButtonGroup