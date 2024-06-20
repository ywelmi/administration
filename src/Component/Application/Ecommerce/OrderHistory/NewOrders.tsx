import { useState } from 'react'
import { Card, CardBody, Col, Media, Row } from 'reactstrap'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { Btn, H6, Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { Href, NewOrder, Price, Processing } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { X } from 'react-feather'
import { orderData } from '../../../../Data/Application/Ecommerce/OrderHistory'
import CommonRating from '../CommonRating/CommonRating'

const NewOrders = () => {
  const [newOrder,setNewOrder]=useState(orderData)
  const deleteHandler = (id: number) => {
    const newData = newOrder.filter((item) => item.id !== id);
    setNewOrder([...newData]);
  }
  return (
    <Card>
      <CommonCardHeader title={NewOrder} />
      <CardBody>
        <Row className="g-sm-4 g-3">
          {newOrder.map((item, index) => (
            <Col xxl="4" md="6" key={index}>
              <div className="prooduct-details-box">
                <Media>
                  <Image className="align-self-center img-fluid img-60" src={dynamicImage(`ecommerce/${item.image}`)} alt={item.name} />
                  <Media body className="ms-3">
                    <div className="product-name">
                      <H6><Link to={Href}>{item.name}</Link></H6>
                    </div>
                    <CommonRating />
                    <div className="price d-flex">
                      <div className="text-muted me-2">{Price}</div>: 210$
                    </div>
                    <div className="avaiabilty">
                      <div className="text-success">In stock</div>
                    </div>
                    <Btn tag="a" color="primary" size="xs" href={Href}>{Processing}</Btn>
                    <X className="close" onClick={() => deleteHandler(item.id)} />
                  </Media>
                </Media>
              </div>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  )
}

export default NewOrders