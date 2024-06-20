import { Card, CardBody, Col } from 'reactstrap'
import { AdditionalContents, PleaseCheckYourNotifications } from '../../../../utils/Constant'
import { additionalData, additionalList } from '../../../../Data/Ui-Kits/Alert/AlertData'
import { Alerts, H5, P } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const AdditionalContent = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={AdditionalContents} span={additionalData} />
        <CardBody className="dark-alert">
          <Alerts color="light-primary">
            <H5 className="alert-heading pb-2 txt-primary">{PleaseCheckYourNotifications}</H5>
            <P>The duty of notification is imposed upon the head of the family, and also upon the medical practitioner who may be in attendance on the patient.</P>
            <hr />
            <P className="mb-0">The emergency notification system is free and is available in all 50 states.</P>
          </Alerts>
          {additionalList.map(({ color, title, paragraph1, paragraph2 }, index) => (
            <Alerts color={`light-${color}`} key={index}>
              <H5 className={`alert-heading pb-2 txt-${color}`}>{title}</H5>
              <P>{paragraph1}</P>
              <hr />
              <P className="mb-0">{paragraph2}</P>
            </Alerts>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default AdditionalContent