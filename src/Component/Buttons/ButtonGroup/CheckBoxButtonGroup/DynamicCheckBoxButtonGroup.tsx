import { ButtonGroup, Col, Input, Label } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { Option1, Option2 } from '../../../../utils/Constant'
import { checkboxButtonDataList } from '../../../../Data/Buttons/ButtonGroup'
import { ButtonGroupProp } from '../../../../Types/Buttons/ButtonsTypes'

const DynamicCheckBoxButtonGroup = () => {
  return (
    <>
      {checkboxButtonDataList.map(({ idOne, color, idTwo }: ButtonGroupProp, index) => (
        <Col xl="4" md="6" sm="12" key={index}>
            <ButtonGroup className="btn-option">
              <Btn color={color}>
                <div className={`checkbox checkbox-${color}`}>
                  <Input id={`checkbox${idOne}`} type="checkbox" />
                  <Label for={`checkbox${idOne}`}>{Option1}</Label>
                </div>
              </Btn>
              <Btn color={color}>
                <div className={`checkbox checkbox-${color}`}>
                  <Input id={`checkbox${idTwo}`} type="checkbox" />
                  <Label for={`checkbox${idTwo}`}>{Option2}</Label>
                </div>
              </Btn>
            </ButtonGroup>
        </Col>
      ))}
    </>
  )
}

export default DynamicCheckBoxButtonGroup