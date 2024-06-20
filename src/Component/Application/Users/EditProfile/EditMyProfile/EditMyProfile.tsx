import { Card, CardBody, Col, Form, FormGroup, Input, Label, Media, Row } from 'reactstrap'
import { Btn, H4, H6, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Bio, Emailaddress, MyProfile, Password, Save, Website } from '../../../../../utils/Constant'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const EditMyProfile = () => {
  return (
    <Col xl="4">
      <Card>
        <CommonCardHeader title={MyProfile} tagClass='card-title mb-0' />
        <CardBody>
          <Form onSubmit={(event) => event.preventDefault()}>
            <Row className="mb-2">
              <div className="profile-title">
                <Media>
                  <Image className="img-70 rounded-circle" alt="edit-user" src={dynamicImage("user/7.jpg")} />
                  <Media body>
                    <H4 className="mb-1">{'MARK JECNO'}</H4>
                    <P>{'DESIGNER'}</P>
                  </Media>
                </Media>
              </div>
            </Row>
            <FormGroup>
              <H6 className="form-label">{Bio}</H6>
              <textarea rows={5} className="form-control" defaultValue={"On the other hand, we denounce with righteous indignation"} />
            </FormGroup>
            <FormGroup>
              <Label>{Emailaddress}</Label>
              <Input placeholder="your-email@domain.com" />
            </FormGroup>
            <FormGroup>
              <Label>{Password}</Label>
              <Input type="password" defaultValue="password" />
            </FormGroup>
            <FormGroup>
              <Label>{Website}</Label>
              <Input placeholder="http://Uplor.com" />
            </FormGroup>
            <div className="form-footer">
              <Btn color="primary" block>{Save}</Btn>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default EditMyProfile