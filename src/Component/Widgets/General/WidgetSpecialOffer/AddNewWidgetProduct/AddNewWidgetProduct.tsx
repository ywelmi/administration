import { Card, CardBody, Col } from 'reactstrap'
import { addNewProductData } from '../../../../../Data/Dashboard/Default'
import { H6, SVG } from '../../../../../AbstractElements'

const AddNewWidgetProduct = () => {
  return (
    <Col xl="12">
      {addNewProductData.map((data,i)=>(
        <Col xl="12" key={i}>
          <Card >
            <CardBody className="new-product">
              <div className="product-cost">
                <div className="add-product">
                  <div className={`product-icon bg-light-${data.color}`}>
                    <SVG iconId={data.icon} />
                  </div>
                  <div>
                    <H6>{data.title}</H6>
                  </div>
                </div>
                <div className="product-icon">
                  <SVG iconId="arrow-down" />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Col>
  )
}

export default AddNewWidgetProduct