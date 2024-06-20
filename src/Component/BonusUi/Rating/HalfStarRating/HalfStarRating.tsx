// @ts-nocheck
import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Rating from "react-rating";
import { HalfStarRatingBar } from '../../../../utils/Constant';
import { halfStarRatingData } from '../../../../Data/BonusUi/Rating/Rating';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const HalfStarRating = () => {
    const [rating, setRating] = useState(1.5);

    return (
      <Col xxl="4" md="6">
        <Card>
          <CardHeaderCommon title={HalfStarRatingBar} span={halfStarRatingData} />
          <CardBody>
            <div className="rating">
              <Rating initialRating={rating} fractions={2} emptySymbol="text-primary star fa fa-star-o fa-2x" fullSymbol="text-primary star fa fa-star fa-2x" onChange={(rate) => setRating(rate)} />
              <span className="text-primary current-rating">{rating}</span>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default HalfStarRating