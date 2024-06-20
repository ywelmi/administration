import { ButtonGroup, Col, Input, Label } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { Option1, Option2 } from '../../../../utils/Constant'

const StaticCheckBoxButtonGroup = () => {
  return (
    <Col xl="4" md="6" sm="12">
        <ButtonGroup className="btn-option">
          <Btn color="primary">
            <div className="checkbox checkbox-primary">
              <Input id="check1" type="checkbox" />
              <Label for='check1'>{Option1}</Label>
            </div>
          </Btn>
          <Btn color="primary">
            <div className="checkbox checkbox-primary">
              <Input id="check2" type="checkbox" />
              <Label for='check2'>{Option2}</Label>
            </div>
          </Btn>
        </ButtonGroup>
    </Col>
  )
}

export default StaticCheckBoxButtonGroup