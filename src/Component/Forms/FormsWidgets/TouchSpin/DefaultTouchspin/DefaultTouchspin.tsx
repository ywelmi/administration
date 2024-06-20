import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { DefaultTouchspins } from '../../../../../utils/Constant';
import { defaultTouchSpinData, touchSpinData } from '../../../../../Data/Forms/FormsWidgets/Touchspin/Touchspin';
import CommonTouchspin from '../Common/CommonTouchspin';
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader';

const DefaultTouchspin = () => {
    const initialValues =defaultTouchSpinData.map((data) => data.value);
    const [values, setValues] = useState(initialValues);
    const handleIncrement = (index:number) => {
      setValues((prevValues) => {
        return prevValues.map((value, i) => (i === index ? value + 1 : value));
      });
    };
    const handleDecrement = (index:number) => {
      setValues((prevValues) => {
        return prevValues.map((value, i) => (i === index && value > 0 ? value - 1 : value));
      });
    };
    return (
      <Col xl="6">
        <Card>
          <CommonCardHeader title={DefaultTouchspins} span={touchSpinData} />
          <CardBody className="common-flex">
            {defaultTouchSpinData.map((data) => (
              <CommonTouchspin key={data.id} color={data.color} value={values[data.id - 1]} onIncrement={() => handleIncrement(data.id - 1)} onDecrement={() => handleDecrement(data.id - 1)} />
            ))}
          </CardBody>
        </Card>
      </Col>
    );
}

export default DefaultTouchspin