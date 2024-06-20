import { Card, Col } from 'reactstrap'
import { BasicInputGroup } from '../../../../../utils/Constant'
import BasicInputGroupsCardBody from './BasicInputGroupsCardBody'
import BasicInputGroupsCardFooter from './BasicInputGroupsCardFooter'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { basicInputGroupData } from '../../../../../Data/Forms/FormsControl/InputGroup/InputGroup'

const BasicInputGroups = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={BasicInputGroup} span={basicInputGroupData} />
        <BasicInputGroupsCardBody/>
        <BasicInputGroupsCardFooter />
      </Card>
    </Col>
  )
}

export default BasicInputGroups