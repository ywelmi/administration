import { Col, Container, Row } from 'reactstrap'
import CommonButtons from '../CommonButtons/CommonButtons'
import { ActiveButtonsHeading, BoldBorderOutlineButtonsHeading, Buttons, DefaultButtonsHeading, DisabledButtonsHeading, DisabledOutlineButtonsHeading, EdgeButton, ExtraSmallButtonsHeading, GradientButtonsHeading, LargeButtonsHeading, OutlineButtonsHeading, OutlineExtraSmallButtonsHeading, OutlineLargeButtonsHeading, OutlineSmallButtonsHeading, SmallButtonsHeading } from '../../../utils/Constant'
import { edgeActiveButtonsData, edgeActiveButtonsHeadingData, edgeBoldBorderOutlineButtonsData, edgeBoldBorderOutlineButtonsHeadingData, edgeDefaultButtonsData, edgeDefaultButtonsHeadingData, edgeDisabledButtonsData, edgeDisabledButtonsHeadingData, edgeDisabledOutlineButtonsHeadingData, edgeExtraSmallButtonsData, edgeExtraSmallButtonsHeadingData, edgeGraddienButtonsHeadingData, edgeGradientButtonsData, edgeLargeButtonsData, edgeLargeButtonsHeadingData, edgeOutlineButtonsData, edgeOutlineButtonsHeadingData, edgeOutlineDisabledButtonsData, edgeOutlineExtraSmallButtonsData, edgeOutlineExtraSmallButtonsHeadingData, edgeOutlineLargeButtonsData, edgeOutlineLargeButtonsHeadingData, edgeOutlineSmallButtonsData, edgeOutlineSmallButtonsHeadingData, edgeSmallButtonsData, edgeSmallButtonsHeadingData } from '../../../Data/Buttons/EdgeStyle'
import EdgeCustomStateButton from './EdgeCustomStateButton/EdgeCustomStateButton'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'

const EdgeStyleContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={EdgeButton} parent={Buttons} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <CommonButtons className="btn-pill" commonButtonsData={edgeDefaultButtonsData} title={DefaultButtonsHeading} subTitle={edgeDefaultButtonsHeadingData} />
            <CommonButtons className="btn-pill" commonButtonsData={edgeLargeButtonsData} title={LargeButtonsHeading} subTitle={edgeLargeButtonsHeadingData} />
            <CommonButtons className="btn-pill" commonButtonsData={edgeSmallButtonsData} title={SmallButtonsHeading} subTitle={edgeSmallButtonsHeadingData} />
            <CommonButtons className="btn-pill" commonButtonsData={edgeExtraSmallButtonsData} title={ExtraSmallButtonsHeading} subTitle={edgeExtraSmallButtonsHeadingData} />
            <CommonButtons className="btn-pill" commonButtonsData={edgeActiveButtonsData} title={ActiveButtonsHeading} subTitle={edgeActiveButtonsHeadingData} />
            <CommonButtons className="btn-pill" commonButtonsData={edgeDisabledButtonsData} title={DisabledButtonsHeading} subTitle={edgeDisabledButtonsHeadingData} />
            <EdgeCustomStateButton />
            <CommonButtons className="btn-pill" commonButtonsData={edgeOutlineButtonsData} title={OutlineButtonsHeading} subTitle={edgeOutlineButtonsHeadingData} />
            <CommonButtons className="btn-pill" commonButtonsData={edgeBoldBorderOutlineButtonsData}  title={BoldBorderOutlineButtonsHeading} subTitle={edgeBoldBorderOutlineButtonsHeadingData} />
            <CommonButtons className="btn-pill" commonButtonsData={edgeOutlineLargeButtonsData} title={OutlineLargeButtonsHeading} subTitle={edgeOutlineLargeButtonsHeadingData} />
            <CommonButtons className="btn-pill" commonButtonsData={edgeOutlineSmallButtonsData} title={OutlineSmallButtonsHeading} subTitle={edgeOutlineSmallButtonsHeadingData} />
            <CommonButtons className="btn-pill" commonButtonsData={edgeOutlineExtraSmallButtonsData}  title={OutlineExtraSmallButtonsHeading} subTitle={edgeOutlineExtraSmallButtonsHeadingData} />
            <CommonButtons className="btn-pill" commonButtonsData={edgeOutlineDisabledButtonsData} title={DisabledOutlineButtonsHeading} subTitle={edgeDisabledOutlineButtonsHeadingData} />
            <CommonButtons className="btn-pill" commonButtonsData={edgeGradientButtonsData} title={GradientButtonsHeading} subTitle={edgeGraddienButtonsHeadingData} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EdgeStyleContainer