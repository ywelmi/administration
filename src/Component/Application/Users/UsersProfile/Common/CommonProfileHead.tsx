import { UserPropsType } from '../../../../../Types/Application/Users/UsersProfile'
import { Col, Media, Row } from 'reactstrap'
import { H5, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'

const CommonProfileHead = ({ activeTime }: UserPropsType) => {
  return (
    <Row>
      <Col sm="8">
        <Media>
          <Image className="img-thumbnail rounded-circle me-3" src={dynamicImage('user/7.jpg')} alt="GenericPlaceholder" />
          <Media body className="align-self-center">
            <H5 className="mt-0 user-name">{'JOHAN DIO'}</H5>
          </Media>
        </Media>
      </Col>
      <Col sm="4" className="align-self-center">
        <div className="float-sm-end">
          <small>{activeTime}</small>
        </div>
      </Col>
    </Row>
  )
}

export default CommonProfileHead