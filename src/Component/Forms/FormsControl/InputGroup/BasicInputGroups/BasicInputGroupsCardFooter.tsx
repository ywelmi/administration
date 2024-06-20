import { CardFooter } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'
import { ButtonBasicInputCancel, ButtonBasicInputSubmit } from '../../../../../utils/Constant'

const BasicInputGroupsCardFooter = () => {
  return (
    <CardFooter>
      <Btn color="primary" className="m-r-15">{ButtonBasicInputSubmit}</Btn>
      <Btn color="light" type="reset">{ButtonBasicInputCancel}</Btn>
    </CardFooter>
  )
}

export default BasicInputGroupsCardFooter