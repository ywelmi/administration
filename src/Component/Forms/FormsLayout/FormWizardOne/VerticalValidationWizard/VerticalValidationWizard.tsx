import { Card, CardBody, Col, Row } from 'reactstrap'
import { VerticalValidationWizardHeading } from '../../../../../utils/Constant'
import { verticalValidationData } from '../../../../../Data/Forms/FormsLayout/FormWizardOne/FormWizardOne'
import NavComponent from './NavComponent'
import { useCallback, useState } from 'react'
import VerticalValidationWizardTabComponent from './VerticalValidationWizardTabComponent'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const VerticalValidationWizard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeCallBack = useCallback((tab: number) => {setActiveTab(tab)}, []);
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={VerticalValidationWizardHeading} span={verticalValidationData} />
        <CardBody>
          <div className="vertical-main-wizard">
            <Row className="g-3">
              <Col xxl="3" xl="4" xs="12">
                <NavComponent callbackActive={activeCallBack} activeTab={activeTab} />
              </Col>
              <Col xxl="9" xl="8" xs="12">
                <VerticalValidationWizardTabComponent activeTab={activeTab} activeCallBack={activeCallBack} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default VerticalValidationWizard