//@ts-nocheck
import { useEffect, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { MovieRatingBar } from '../../../../utils/Constant';
import Rating from "react-rating";
import { movingRatingDta } from '../../../../Data/BonusUi/Rating/Rating';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const MovingRating = () => {
    const [rating, setRating] = useState<number>(1);
    const [Status, setStatus] = useState("Bad");
  
    useEffect(() => {
      switch (rating) {
        case 1:
          setStatus("Bad");
          break;
        case 2:
          setStatus("Mediocre");
          break;
        case 3:
          setStatus("Good");
          break;
  
        default:
          setStatus("Awesome");
          break;
      }
    }, [rating]);
  
    return (
      <Col xxl="4" md="6">
        <Card>
          <CardHeaderCommon title={MovieRatingBar} span={movingRatingDta} />
          <CardBody className="m-2">
            <div className="rating">
              <Rating stop={4} initialRating={rating} emptySymbol="br-widget" fullSymbol="br-widget br-current" onChange={(rate: number) => setRating(rate)} />
              <span className="text-primary current-rating fs-6 ms-5">{Status}</span>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default MovingRating
