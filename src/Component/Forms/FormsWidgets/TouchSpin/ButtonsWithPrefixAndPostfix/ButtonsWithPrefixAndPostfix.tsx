import { useState } from 'react'
import { Card, CardBody, Col, Input, InputGroup } from 'reactstrap';
import { ButtonsWithPrefixAndPostfixs, PostText, PreText } from '../../../../../utils/Constant';
import { touchSpinData } from '../../../../../Data/Forms/FormsWidgets/Touchspin/Touchspin';
import { Btn } from '../../../../../AbstractElements';
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader';

const ButtonsWithPrefixAndPostfix = () => {
    const [values, setValues] = useState([0, 0]);
    const handleIncrement = (index: number) => {
      setValues((previousValues) => {
        return previousValues.map((value, i) => (i === index ? value + 1 : value));
      });
    };
    const handleDecrement = (index: number) => {
      setValues((previousValues) => {
        return previousValues.map((value, i) => (i === index && value > 0 ? value - 1 : value));
      });
    };
  
    return (
      <Col xl="6">
        <Card>
          <CommonCardHeader title={ButtonsWithPrefixAndPostfixs} span={touchSpinData} />
          <CardBody className="common-flex pre-post-touchspin bg-touchspin">          
            <InputGroup>
              <Btn color="warning" className="decrement-touchspin btn-touchspin px-3" onClick={() => handleDecrement(0)}><i className="fa fa-minus"></i></Btn>
              <Btn color="warning" outline id="button-addon1" className="px-2">{PreText}</Btn>
              <Input className="input-touchspin spin-outline-primary" type="number" value={values[0]} readOnly />
              <Btn color="warning" className="increment-touchspin btn-touchspin px-3" onClick={() => handleIncrement(0)}><i className="fa fa-plus"> </i></Btn>
            </InputGroup>
            <InputGroup>
              <Btn color="warning" className="decrement-touchspin btn-touchspin px-3" onClick={() => handleDecrement(1)}><i className="fa fa-minus"></i></Btn>
              <Input className="input-touchspin spin-outline-primary" type="number" value={values[1]} readOnly />
              <Btn color="warning" outline id="button-addon2" className="px-2">{PostText}</Btn>
              <Btn color="warning" className="increment-touchspin btn-touchspin px-3" onClick={() => handleIncrement(1)}><i className="fa fa-plus"></i></Btn>
            </InputGroup>
          </CardBody>
        </Card>
      </Col>
    )
}

export default ButtonsWithPrefixAndPostfix