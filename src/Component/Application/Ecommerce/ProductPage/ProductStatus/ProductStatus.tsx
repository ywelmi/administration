import { Card, CardBody, Media } from 'reactstrap'
import { FeatherIcons, H5, LI, P, UL } from '../../../../../AbstractElements'
import { servicesData } from '../../../../../Data/Application/Ecommerce/ProductPage'

const ProductStatus = () => {
  return (
    <Card>
      <CardBody>
        <div className="collection-filter-block">
          <UL className="pro-services simple-list">
            {servicesData.map((data,index) => (
              <LI key={index}>
                <Media>
                  <FeatherIcons iconName={data.icon} />
                  <Media body>
                    <H5>{data.title} </H5>
                    <P>{data.subtitle}</P>
                  </Media>
                </Media>
              </LI>
            ))}
          </UL>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProductStatus