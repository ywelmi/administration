import { Col, Container, Row } from 'reactstrap'
import CommonButtons from '../CommonButtons/CommonButtons'
import { ActiveButtonsHeading, BoldBorderOutlineButtonsHeading, Buttons, DefaultButtonsHeading, DisabledButtonsHeading, DisabledOutlineButtonsHeading, ExtraSmallButtonsHeading, FlatButton, GradientButtonsHeading, LargeButtonsHeading, OutlineButtonsHeading, OutlineExtraSmallButtonsHeading, OutlineLargeButtonsHeading, OutlineSmallButtonsHeading, SmallButtonsHeading } from '../../../utils/Constant'
import { flatBoldBorderOutlineButtonsData, flatBoldBorderOutlineButtonsHeadingData, flatButtonsData, flatDisabledButtonsData, flatDisabledButtonsHeadingData, flatDisabledOutlineButtonsHeadingData, flatExtraSmallButtonsData, flatGraddienButtonsHeadingData, flatGradientButtonsData, flatOutlineButtonsData, flatOutlineButtonsHeadingData, flatOutlineDisabledButtonsData, flatOutlineExtraSmallButtonsData, flatOutlineExtraSmallButtonsHeadingData, flatOutlineLargeButtonsData, flatOutlineLargeButtonsHeadingData, flatOutlineSmallButtonsData, flatOutlineSmallButtonsHeadingData, flateActiveButtonsData, flateActiveButtonsHeadingData, flateButtonsHeadingData, flateExtraSmallButtonsHeadingData, flateLargeButtonsData, flateLargeButtonsHeadingData, flateSmallButtonsData, flateSmallButtonsHeadingData } from '../../../Data/Buttons/FlatStyle'
import FlatCustomStateButton from './FlatCustomStateButton/FlatCustomStateButton'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'

const FlatStyleContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FlatButton} parent={Buttons} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <CommonButtons className="btn-square" commonButtonsData={flatButtonsData} title={DefaultButtonsHeading} subTitle={flateButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={flateLargeButtonsData} title={LargeButtonsHeading} subTitle={flateLargeButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={flateSmallButtonsData} title={SmallButtonsHeading} subTitle={flateSmallButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={flatExtraSmallButtonsData} title={ExtraSmallButtonsHeading} subTitle={flateExtraSmallButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={flateActiveButtonsData} title={ActiveButtonsHeading} subTitle={flateActiveButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={flatDisabledButtonsData} title={DisabledButtonsHeading} subTitle={flatDisabledButtonsHeadingData} />
            <FlatCustomStateButton/>
            <CommonButtons className="btn-square" commonButtonsData={flatOutlineButtonsData} title={OutlineButtonsHeading} subTitle={flatOutlineButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={flatBoldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsHeading} subTitle={flatBoldBorderOutlineButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={flatOutlineLargeButtonsData} title={OutlineLargeButtonsHeading} subTitle={flatOutlineLargeButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={flatOutlineSmallButtonsData} title={OutlineSmallButtonsHeading} subTitle={flatOutlineSmallButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={flatOutlineExtraSmallButtonsData} title={OutlineExtraSmallButtonsHeading} subTitle={flatOutlineExtraSmallButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={flatOutlineDisabledButtonsData} title={DisabledOutlineButtonsHeading} subTitle={flatDisabledOutlineButtonsHeadingData} />
            <CommonButtons className="btn-square" commonButtonsData={flatGradientButtonsData} title={GradientButtonsHeading} subTitle={flatGraddienButtonsHeadingData} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FlatStyleContainer