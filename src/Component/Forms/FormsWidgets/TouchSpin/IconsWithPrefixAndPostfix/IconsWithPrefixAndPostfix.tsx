import { useState } from 'react'
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from 'reactstrap';
import { IconsWithPrefixAndPostfixs } from '../../../../../utils/Constant';
import { touchSpinData } from '../../../../../Data/Forms/FormsWidgets/Touchspin/Touchspin';
import { Btn } from '../../../../../AbstractElements';
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader';

const IconsWithPrefixAndPostfix = () => {
    const [values, setValues] = useState([0, 0]);
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
      <Col xl="6">
        <Card>
          <CommonCardHeader title={IconsWithPrefixAndPostfixs} span={touchSpinData} />
          <CardBody className="common-flex pre-post-touchspin">
            <InputGroup>
              <Btn color="primary" className="decrement-touchspin btn-touchspin px-3" onClick={() => handleDecrement(0)}><i className="fa fa-minus"></i></Btn>
              <InputGroupText>{"$"}</InputGroupText>
              <Input className="input-touchspin spin-outline-primary" type="number" value={values[0]} readOnly />
              <Btn color="primary" className="increment-touchspin btn-touchspin px-3" onClick={() => handleIncrement(0)}><i className="fa fa-plus"> </i></Btn>
            </InputGroup>
            <InputGroup>
              <Btn color="primary" className="decrement-touchspin btn-touchspin px-3" onClick={() => handleDecrement(1)}><i className="fa fa-minus"></i></Btn>
              <Input className="input-touchspin spin-outline-primary" type="number" value={values[1]} readOnly/>
              <InputGroupText className="input-group-text">{"%"}</InputGroupText>
              <Btn color="primary" className="increment-touchspin btn-touchspin px-3" onClick={() => handleIncrement(1)}><i className="fa fa-plus"></i></Btn>
            </InputGroup>
          </CardBody>
        </Card>
      </Col>
    );
}

export default IconsWithPrefixAndPostfix