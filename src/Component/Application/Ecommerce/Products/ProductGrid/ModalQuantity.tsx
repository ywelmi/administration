import { ChangeEvent } from 'react'
import { Btn, H4 } from '../../../../../AbstractElements';
import { Input, InputGroup } from 'reactstrap';
import { Quantity } from '../../../../../utils/Constant';
import { ModalQuantityProp } from '../../../../../Types/Application/Ecommerce/Product';

const ModalQuantity = ({ quantity, setQuantity }: ModalQuantityProp) => {
  const minusQty = () => quantity > 1 && setQuantity(quantity - 1);
  const plusQty = () => quantity >= 1 && setQuantity(quantity + 1);
  const changeQty = (e: ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(e.target.value));

  return (
    <>
      <H4 className="f-w-600">{Quantity}</H4>
      <fieldset className="border-0">
        <InputGroup className="bootstrap-touchspin">
          <Btn className="bootstrap-touchspin-down" color='primary' onClick={minusQty}>
            <i className="fa fa-minus"></i>
          </Btn>
          <Input className="touchspin text-center" type="text" name="quantity" value={quantity} onChange={(e) => changeQty(e)} />
          <Btn className="bootstrap-touchspin-up btn-square" onClick={plusQty} color='primary'>
            <i className="fa fa-plus"></i>
          </Btn>
        </InputGroup>
        <br />
      </fieldset>
    </>
  )
}

export default ModalQuantity