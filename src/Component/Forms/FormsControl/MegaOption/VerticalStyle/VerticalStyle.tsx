import { Card, CardBody, Col } from 'reactstrap'
import { VerticalStyles } from '../../../../../utils/Constant'
import CommonCardFooter from '../Common/CommonCardFooter'
import VerticalStyleForm from './VerticalStyleForm'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { verticalStyleData } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'

const VerticalStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-12">
      <Card className="height-equal">
        <CommonCardHeader title={VerticalStyles} span={verticalStyleData} />
        <CardBody className="mb-5">
          <VerticalStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="primary" color2="light" />
      </Card>
    </Col>
  )
}

export default VerticalStyle