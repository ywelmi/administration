import { Card, CardBody, Col, Input } from 'reactstrap'
import { formControlSizingSubTitle } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { FormControlSizings } from '../../../../../utils/Constant'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const FormControlSizing = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FormControlSizings} span={formControlSizingSubTitle}/>
        <CardBody>
          <Input bsSize='sm' type="text" placeholder=".form-control-sm"/>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FormControlSizing