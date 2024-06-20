import { Card, CardBody, Col } from 'reactstrap'
import { InlineStyles } from '../../../../../utils/Constant'
import CommonCardFooter from '../Common/CommonCardFooter'
import InlineStyleForm from './InlineStyleForm'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { inlineStyeData } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'

const InlineStyle = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={InlineStyles} span={inlineStyeData} />
        <CardBody className="megaoptions-border-space-sm">
          <InlineStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="warning" color2="light-warning" btn2Class='list-light-warning' />
      </Card>
    </Col>
  )
}

export default InlineStyle