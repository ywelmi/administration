import { Col, Container, Row } from 'reactstrap'
import CommonButtons from '../CommonButtons/CommonButtons'
import { ActiveButtonsHeading, BoldBorderOutlineButtonsHeading, Buttons, DefaultButtonsHeading, DefaultStyles, DisabledButtonsHeading, DisabledOutlineButtonsHeading, ExtraSmallButtonsHeading, GradientButtonsHeading, LargeButtonsHeading, OutlineButtonsHeading, OutlineExtraSmallButtonsHeading, OutlineLargeButtonsHeading, OutlineSmallButtonsHeading, SmallButtonsHeading } from '../../../utils/Constant'
import { activeButtonsData, activeButtonsHeadingData, boldBorderOutlineButtonsData, boldBorderOutlineButtonsHeadingData, defaultButtonsData, defaultButtonsHeadingData, disabledButtonsData, disabledButtonsHeadingData, disabledOutlineButtonsHeadingData, extraSmallButtonsData, extraSmallButtonsHeadingData, graddienButtonsHeadingData, gradientButtonsData, largeButtonsData, largeButtonsHeadingData, outlineButtonsData, outlineButtonsHeadingData, outlineDisabledButtonsData, outlineExtraSmallButtonsData, outlineExtraSmallButtonsHeadingData, outlineLargeButtonsData, outlineLargeButtonsHeadingData, outlineSmallButtonsData, outlineSmallButtonsHeadingData, smallButtonsData, smallButtonsHeadingData } from '../../../Data/Buttons/DefaultStyle'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import DefaultCustomStateButton from './DefaultCustomStateButton/DefaultCustomStateButton'

const DefaultStyleContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DefaultStyles} parent={Buttons} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <CommonButtons commonButtonsData={defaultButtonsData} title={DefaultButtonsHeading} subTitle={defaultButtonsHeadingData} />
            <CommonButtons commonButtonsData={largeButtonsData} title={LargeButtonsHeading} subTitle={largeButtonsHeadingData} />
            <CommonButtons commonButtonsData={smallButtonsData} title={SmallButtonsHeading} subTitle={smallButtonsHeadingData} />
            <CommonButtons commonButtonsData={extraSmallButtonsData} title={ExtraSmallButtonsHeading} subTitle={extraSmallButtonsHeadingData} />
            <CommonButtons commonButtonsData={activeButtonsData} title={ActiveButtonsHeading} subTitle={activeButtonsHeadingData} />
            <CommonButtons commonButtonsData={disabledButtonsData} title={DisabledButtonsHeading} subTitle={disabledButtonsHeadingData} className="text-white"/>
            <DefaultCustomStateButton />
            <CommonButtons commonButtonsData={outlineButtonsData} title={OutlineButtonsHeading} subTitle={outlineButtonsHeadingData} />
            <CommonButtons commonButtonsData={boldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsHeading} subTitle={boldBorderOutlineButtonsHeadingData}/>
            <CommonButtons commonButtonsData={outlineLargeButtonsData} title={OutlineLargeButtonsHeading} subTitle={outlineLargeButtonsHeadingData} />
            <CommonButtons commonButtonsData={outlineSmallButtonsData} title={OutlineSmallButtonsHeading} subTitle={outlineSmallButtonsHeadingData} />
            <CommonButtons commonButtonsData={outlineExtraSmallButtonsData} title={OutlineExtraSmallButtonsHeading} subTitle={outlineExtraSmallButtonsHeadingData} />
            <CommonButtons commonButtonsData={outlineDisabledButtonsData} title={DisabledOutlineButtonsHeading} subTitle={disabledOutlineButtonsHeadingData} />
            <CommonButtons commonButtonsData={gradientButtonsData} title={GradientButtonsHeading} subTitle={graddienButtonsHeadingData} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DefaultStyleContainer