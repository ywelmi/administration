import { LI, UL } from '../../../../../AbstractElements'

const ProductColor = () => {
  return (
    <UL className="product-color flex-row">
      <LI className="bg-primary" />
      <LI className="bg-secondary" />
      <LI className="bg-success" />
      <LI className="bg-info" />
      <LI className="bg-warning" />
    </UL>
  )
}

export default ProductColor