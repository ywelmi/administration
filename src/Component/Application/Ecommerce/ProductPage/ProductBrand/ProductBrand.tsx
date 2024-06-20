import { Card, CardBody } from 'reactstrap'
import { H4, LI, UL } from '../../../../../AbstractElements'
import { Brand, Href } from '../../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { brandDetailsData } from '../../../../../Data/Application/Ecommerce/ProductPage'

const ProductBrand = () => {
  return (
    <Card>
      <CardBody>
        <div className="filter-block">
          <H4>{Brand}</H4>
          <UL className="simple-list">
            {brandDetailsData.map((data,i)=>(
              <LI key={i}>
                <Link to={Href} className="f-w-500">{data}</Link>
              </LI>
            ))}
          </UL>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProductBrand