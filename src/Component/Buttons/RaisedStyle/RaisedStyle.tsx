import { Col, Container, Row } from 'reactstrap'
import CommonButtons from '../CommonButtons/CommonButtons'
import { ActiveButtonsHeading, BoldBorderOutlineButtonsHeading, Buttons, DefaultButtonsHeading, DisabledButtonsHeading, DisabledOutlineButtonsHeading, ExtraSmallButtonsHeading, GradientButtonsHeading, LargeButtonsHeading, OutlineButtonsHeading, OutlineExtraSmallButtonsHeading, OutlineLargeButtonsHeading, OutlineSmallButtonsHeading, RaisedButton, SmallButtonsHeading } from '../../../utils/Constant'
import { raisedActiveButtonsData, raisedActiveButtonsHeadingData, raisedBoldBorderOutlineButtonsData, raisedBoldBorderOutlineButtonsHeadingData, raisedDefaultButtonsData, raisedDefaultButtonsHeadingData, raisedDisabledButtonsData, raisedDisabledButtonsHeadingData, raisedDisabledOutlineButtonsHeadingData, raisedExtraSmallButtonsData, raisedExtraSmallButtonsHeadingData, raisedGraddienButtonsHeadingData, raisedGradientButtonsData, raisedLargeButtonsData, raisedLargeButtonsHeadingData, raisedOutlineButtonsData, raisedOutlineButtonsHeadingData, raisedOutlineDisabledButtonsData, raisedOutlineExtraSmallButtonsData, raisedOutlineExtraSmallButtonsHeadingData, raisedOutlineLargeButtonsData, raisedOutlineLargeButtonsHeadingData, raisedOutlineSmallButtonsData, raisedOutlineSmallButtonsHeadingData, raisedSmallButtonsData, raisedSmallButtonsHeadingData } from '../../../Data/Buttons/RaisedStyle'
import RaisedCustomStateButton from './RaisedCustomStateButton/RaisedCustomStateButton'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'

const RaisedStyleContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={RaisedButton} parent={Buttons} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <CommonButtons raised className="btn-pill" commonButtonsData={raisedDefaultButtonsData} title={DefaultButtonsHeading} subTitle={raisedDefaultButtonsHeadingData} />
            <CommonButtons raised className="btn-pill" commonButtonsData={raisedLargeButtonsData} title={LargeButtonsHeading} subTitle={raisedLargeButtonsHeadingData} />
            <CommonButtons raised className="btn-pill" commonButtonsData={raisedSmallButtonsData} title={SmallButtonsHeading} subTitle={raisedSmallButtonsHeadingData} />
            <CommonButtons raised className="btn-pill" commonButtonsData={raisedExtraSmallButtonsData} title={ExtraSmallButtonsHeading} subTitle={raisedExtraSmallButtonsHeadingData} />
            <CommonButtons raised className="btn-pill" commonButtonsData={raisedActiveButtonsData} title={ActiveButtonsHeading} subTitle={raisedActiveButtonsHeadingData} />
            <CommonButtons raised className="btn-pill" commonButtonsData={raisedDisabledButtonsData} title={DisabledButtonsHeading} subTitle={raisedDisabledButtonsHeadingData} />
            <RaisedCustomStateButton/>
            <CommonButtons raised className="btn-pill" commonButtonsData={raisedOutlineButtonsData} title={OutlineButtonsHeading} subTitle={raisedOutlineButtonsHeadingData} />
            <CommonButtons raised className="btn-pill" commonButtonsData={raisedBoldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsHeading} subTitle={raisedBoldBorderOutlineButtonsHeadingData} />
            <CommonButtons raised className="btn-pill" commonButtonsData={raisedOutlineLargeButtonsData} title={OutlineLargeButtonsHeading} subTitle={raisedOutlineLargeButtonsHeadingData} />
            <CommonButtons raised className="btn-pill" commonButtonsData={raisedOutlineSmallButtonsData} title={OutlineSmallButtonsHeading} subTitle={raisedOutlineSmallButtonsHeadingData} />
            <CommonButtons raised className="btn-pill" commonButtonsData={raisedOutlineExtraSmallButtonsData} title={OutlineExtraSmallButtonsHeading} subTitle={raisedOutlineExtraSmallButtonsHeadingData} />
            <CommonButtons raised className="btn-pill" commonButtonsData={raisedOutlineDisabledButtonsData} title={DisabledOutlineButtonsHeading} subTitle={raisedDisabledOutlineButtonsHeadingData} />
            <CommonButtons raised className="btn-pill" commonButtonsData={raisedGradientButtonsData} title={GradientButtonsHeading} subTitle={raisedGraddienButtonsHeadingData} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RaisedStyleContainer