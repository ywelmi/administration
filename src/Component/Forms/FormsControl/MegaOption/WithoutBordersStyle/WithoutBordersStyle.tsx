import { Card, CardBody, Col } from 'reactstrap'
import { WithoutBordersStyles } from '../../../../../utils/Constant'
import CommonCardFooter from '../Common/CommonCardFooter'
import WithoutBordersStyleForm from './WithoutBordersStyleForm'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { withoutBorderData } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'

const WithoutBordersStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={WithoutBordersStyles} span={withoutBorderData} />
        <CardBody>
          <WithoutBordersStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="warning" color2="light-warning" btn2Class="list-light-warning"/>
      </Card>
    </Col>
  )
}

export default WithoutBordersStyle