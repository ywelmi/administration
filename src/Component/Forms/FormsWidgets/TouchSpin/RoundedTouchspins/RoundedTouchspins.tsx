import { useState } from 'react'
import { defaultTouchSpinData, touchSpinData } from '../../../../../Data/Forms/FormsWidgets/Touchspin/Touchspin';
import { Card, CardBody, Col } from 'reactstrap';
import CommonTouchspin from '../Common/CommonTouchspin';
import { RoundedTouchspin } from '../../../../../utils/Constant';
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader';

const RoundedTouchspins = () => {
    const initialValues = defaultTouchSpinData.map((data) => data.value);
    const [values, setValues] = useState(initialValues);
    const handleIncrement = (index: number) => {
      setValues((prevValues) => {
        return prevValues.map((value, i) => (i === index ? value + 1 : value));
      });
    };
    const handleDecrement = (index: number) => {
      setValues((prevValues) => {
        return prevValues.map((value, i) => (i === index && value > 0 ? value - 1 : value));
      });
    };
    return (
      <Col xl="12">
        <Card>
          <CommonCardHeader title={RoundedTouchspin} span={touchSpinData}/>
          <CardBody className="common-flex rounded-touchspin">
            {defaultTouchSpinData.map((data) => (
              <CommonTouchspin key={data.id} faAngle color={data.color} value={values[data.id - 1]} onIncrement={() => handleIncrement(data.id - 1)} onDecrement={() => handleDecrement(data.id - 1)} />
            ))}
          </CardBody>
        </Card>
      </Col>
    );
}

export default RoundedTouchspins