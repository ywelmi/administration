//@ts-nocheck
import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { SquareRatingBar } from '../../../../utils/Constant';
import Rating from "react-rating";
import { squareRatingData } from '../../../../Data/BonusUi/Rating/Rating';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const SquareRating = () => {
    const [rating, setRating] = useState(3);
    const data = [1, 2, 3, 4, 5];
  
    return (
      <Col xxl="4" md="6">
        <Card>
          <CardHeaderCommon title={SquareRatingBar} span={squareRatingData} />
          <CardBody>
            <div className="rating">
              <Rating initialRating={rating} emptySymbol={data.map((n: number) => (<span className="square-number" key={n}>{n}</span>))}
                fullSymbol={data.map((n: number) => (<span className="square-number active" key={n}>{n}</span>))}
                onChange={(rate) => setRating(rate)}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default SquareRating