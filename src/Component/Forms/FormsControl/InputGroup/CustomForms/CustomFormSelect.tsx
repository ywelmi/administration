import { Input } from 'reactstrap'
import { CustomFormSelectProp } from '../../../../../Types/Forms/FormControls/FormsControls'

const CustomFormSelect = ({ inputId, options, title }:CustomFormSelectProp) => {
  return (
    <Input type="select" id={inputId}>
      <option>{title}</option>
      {options.map((item, i) => (
        <option key={i} value={i}>
          {item}
        </option>
      ))}
    </Input>
  )
}

export default CustomFormSelect