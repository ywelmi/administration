import { Card, CardBody, Col, Input } from 'reactstrap'
import { selectSizingSubTitle } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { SelectSizings } from '../../../../../utils/Constant'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const SelectSizing = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={SelectSizings} span={selectSizingSubTitle} />
        <CardBody>
          <Input id="exampleSelect" name="select" type="select" bsSize='sm' defaultValue={"What's Your Hobbies"}>
            <option>{"What's Your Hobbies"}</option>
            <option>{"Kho-Kho"}</option>
            <option>{"Reading Books"}</option>
            <option>{"Creativity"}</option>
          </Input>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SelectSizing