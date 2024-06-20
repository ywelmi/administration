import { radiobuttonDataList } from '../../../../Data/Buttons/ButtonGroup'
import { ButtonGroupProp } from '../../../../Types/Buttons/ButtonsTypes'
import { ButtonGroup, Col, Input, Label } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { Option1, Option2 } from '../../../../utils/Constant'

const DynamicRadioButtonGroup = () => {
  return (
    <>
      {radiobuttonDataList.map(({ idOne, color, idTwo, name }: ButtonGroupProp, index) => (
        <Col xl="4" md="6" sm="12" key={index}>
          <div className="btn-radio">
            <ButtonGroup>
              <Btn color={color}>
                <div className={`radio radio-${color}`}>
                  <Input id={`radio${idOne}`} type="radio" name={name} />
                  <Label for={`radio${idOne}`}>{Option1}</Label>
                </div>
              </Btn>
              <Btn color={color}>
                <div className={`radio radio-${color}`}>
                  <Input id={`radio${idTwo}`} type="radio" name={name} />
                  <Label for={`radio${idTwo}`}>{Option2}</Label>
                </div>
              </Btn>
            </ButtonGroup>
          </div>
        </Col>
      ))}
    </>
  )
}

export default DynamicRadioButtonGroup