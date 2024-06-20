import { useState } from "react";
import { Card, CardBody, Col, Media, Row } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Cancelled, CancelledOrder, Href, Price} from "../../../../utils/Constant";
import { dynamicImage } from "../../../../Service";
import { Btn, H6, Image } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import { X } from "react-feather";
import CommonRating from "../CommonRating/CommonRating";
import { orderData } from "../../../../Data/Application/Ecommerce/OrderHistory";

const CancelledOrders = () => {
  const [cancelledOrder, setCancelledOrder] = useState(orderData);
  const deleteHandler = (id: number) => {
    const newData = cancelledOrder.filter((item) => item.id !== id);
    setCancelledOrder([...newData]);
  };

  return (
    <Card>
      <CommonCardHeader title={CancelledOrder} />
      <CardBody>
        <Row className="g-sm-4 g-3">
          {cancelledOrder.map((item, index) => (
            <Col xxl="4" md="6" key={index}>
              <div className="prooduct-details-box">
                <Media>
                  <Image className="align-self-center img-fluid img-60" src={dynamicImage(`ecommerce/${item.image}`)} alt={item.name} />
                  <Media body className="ms-3">
                    <div className="product-name">
                      <H6>
                        <Link to={Href}>{item.name}</Link>
                      </H6>
                    </div>
                    <CommonRating />
                    <div className="price d-flex">
                      <div className="text-muted me-2">{Price}</div>: 210$
                    </div>
                    <div className="avaiabilty">
                      <div className="text-success">In stock</div>
                    </div>
                    <Btn tag="a" color="danger" size="xs" href={Href}>
                      {Cancelled}
                    </Btn>
                    <X className="close" onClick={() => deleteHandler(item.id)}/>
                  </Media>
                </Media>
              </div>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default CancelledOrders;
