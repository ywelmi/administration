import { useState } from 'react'
import { Col, Form, Input, Row } from 'reactstrap';
import { Call, Href, OtpCode, OtpCodeSent, Resend, VerificationCodeHeading, Verify } from '../../../../../utils/Constant';
import { Btn, H4, H5, Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';
import { Link } from 'react-router-dom';

const VerificationCode = () => {
  const numbersData: number[] = [1, 2, 3, 4, 5, 6];
  const [val, setVal] = useState(Array(6).fill(undefined));

  const handleChange = (e: string, index: number) => {
    if (e.length > 1) return;
    else {
      const tempt = [...val];
      tempt[index] = parseInt(e);
      setVal(tempt);
    }
  };
  
  return (
    <Col md="6">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="authenticate">
          <H4>{VerificationCodeHeading}</H4>
          <Image className="img-fluid" src={dynamicImage(`forms/authenticate.png`)} alt="authenticate" />
          <span>{OtpCodeSent}</span>
          <span>+91********70</span>
          <Form  onSubmit={(event) => event.preventDefault()}>
            <Row>
              <Col>
                <H5>{OtpCode}</H5>
              </Col>
              <Col className="otp-generate">
                {numbersData.map((data, index) => (
                  <Input key={data} value={val[index]} className="code-input" type="number" onChange={(e) => handleChange(e.target.value, index)} />
                ))}
              </Col>
              <Col>
                <Btn color="primary" className="w-100">{Verify}</Btn>
              </Col>
              <div>
                <span>Not received your code?</span>
                <span>
                  <Link to={Href}>{Resend} </Link>OR<Link to={Href}>{Call}</Link>
                </span>
              </div>
            </Row>
          </Form>
        </div>
      </div>
    </Col>
  );
}

export default VerificationCode