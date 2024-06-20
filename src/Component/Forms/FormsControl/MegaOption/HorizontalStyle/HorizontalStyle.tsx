import { Card, CardBody, Col } from 'reactstrap'
import { HorizontalStyles } from '../../../../../utils/Constant'
import CommonCardFooter from '../Common/CommonCardFooter'
import HorizontalStyleForm from './HorizontalStyleForm'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { horizontalStyleData } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'

const HorizontalStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-12">
      <Card className="height-equal">
        <CommonCardHeader title={HorizontalStyles} span={horizontalStyleData} />
        <CardBody>
          <HorizontalStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="primary" btn1Class='m-r-15' color2="light" />
      </Card>
    </Col>
  )
}

export default HorizontalStyle