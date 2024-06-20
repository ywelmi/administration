import { ButtonGroup, Col } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { Left, Middle, Right } from '../../../../utils/Constant'
import { CommonGroupButtonProp } from '../../../../Types/Buttons/ButtonsTypes'

const CommonGroupButton:React.FC<CommonGroupButtonProp> = ({ data, buttonClass, size, outline }) => {
  return (
    <>
      {data.map((item, index) => (
        <Col xl="4" md="6" sm="12" key={index}>
          <ButtonGroup className={buttonClass}>
            <Btn outline={outline} size={size} color={item}>{Left}</Btn>
            <Btn outline={outline} size={size} color={item}>{Middle}</Btn>
            <Btn outline={outline} size={size} color={item}>{Right}</Btn>
          </ButtonGroup>
        </Col>
      ))}
    </>
  )
}

export default CommonGroupButton