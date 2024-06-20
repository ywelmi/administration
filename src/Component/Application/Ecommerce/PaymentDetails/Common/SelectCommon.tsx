import React from 'react'
import { FormGroup, Input } from 'reactstrap'
import { SelectCommonProp } from '../../../../../Types/Application/Ecommerce/PaymentDetails'

const SelectCommon :React.FC<SelectCommonProp> = ({ data,size ,selectClass}) => {
  return (
    <FormGroup className={selectClass}>
      <Input type="select" size={size}>
        {data.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </Input>
    </FormGroup>
  )
}

export default SelectCommon