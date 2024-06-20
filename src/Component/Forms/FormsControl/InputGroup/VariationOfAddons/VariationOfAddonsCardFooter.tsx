import { CardFooter } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'
import { VariationOfAddonsCancel, VariationOfAddonsSubmit } from '../../../../../utils/Constant'

const VariationOfAddonsCardFooter = () => {
  return (
    <CardFooter>
      <Btn color="primary" className="m-r-15">{VariationOfAddonsSubmit}</Btn>
      <Btn color="light" type="reset">{VariationOfAddonsCancel}</Btn>
    </CardFooter>
  )
}

export default VariationOfAddonsCardFooter