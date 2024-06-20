//@ts-nocheck
import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { PillRatingBar } from '../../../../utils/Constant';
import Rating from "react-rating";
import { pillRatingData } from '../../../../Data/BonusUi/Rating/Rating';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const PillRating = () => {
    const [rating, setRating] = useState<number>(1);
    const pillData = ["A", "B", "C", "D", "E"];
  
    return (
      <Col xxl="4" md="6">
        <Card>
          <CardHeaderCommon title={PillRatingBar} span={pillRatingData} />
          <CardBody>
            <div className="rating pill-rating-list">
              <Rating initialRating={rating} emptySymbol={pillData.map((n: string) => (<span className="pill-rating" key={n}>{n}</span>))}
                fullSymbol={pillData.map((n: string) => (<span className="pill-rating br-current" key={n}>{n}</span>))}
                onClick={(rate) => setRating(rate)}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default PillRating