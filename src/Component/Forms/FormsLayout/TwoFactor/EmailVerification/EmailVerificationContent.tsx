import { Col, Input, InputGroup, InputGroupText } from 'reactstrap'
import { EmailVerificationHeading, PleaseEnterTheCodeHere, Verify } from '../../../../../utils/Constant'
import { H4, P } from '../../../../../AbstractElements'

const EmailVerificationContent = () => {
  return (
    <Col xxl="8" className="box-col-7">
      <H4>{EmailVerificationHeading}</H4>
      <P>A verification code has been sent to your email. This code will be valid for 15 minutes.</P>
      <InputGroup className="mb-3">
        <Input type="text" placeholder={PleaseEnterTheCodeHere} />
        <InputGroupText className="bg-primary">{Verify}</InputGroupText>
      </InputGroup>
    </Col>
  )
}

export default EmailVerificationContent