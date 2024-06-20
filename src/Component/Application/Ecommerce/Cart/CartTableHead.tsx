import { cartTableHeader } from '../../../../Data/Application/Ecommerce/Product'

const CartTableHead = () => {
  return (
    <thead>
      <tr>
        {cartTableHeader.map((items, i) => (
          <th key={i}>{items}</th>
        ))}
      </tr>
    </thead>
  )
}

export default CartTableHead