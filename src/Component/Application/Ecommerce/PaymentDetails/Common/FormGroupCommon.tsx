import { FormGroup, Input } from 'reactstrap'
import { FormGroupCommonProp } from '../../../../../Types/Application/Ecommerce/PaymentDetails'

const FormGroupCommon :React.FC<FormGroupCommonProp> = ({ type, placeholder,formClass,rows }) => {
  return (
    <FormGroup className={formClass ? formClass : ""}>
      <Input type={type} placeholder={placeholder} rows={rows} />
    </FormGroup>
  )
}

export default FormGroupCommon