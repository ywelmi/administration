import { Card, CardBody, Col } from 'reactstrap'
import { SmallSizeScrollbars, SolutionBusinessTransformation } from '../../../../utils/Constant'
import ScrollBar from 'react-perfect-scrollbar'
import { H5, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { smallSizeScroll } from '../../../../Data/BonusUi/Scrollable/Scrollable'

const SmallSizeScrollbar = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={SmallSizeScrollbars} span={smallSizeScroll} />
        <CardBody>
          <div className="scroll-bar-wrap">
            <ScrollBar className="scrollbar-margins large-margin scroll-demo pe-0" style={{width:"100%", height:"300px"}}>
              <div className="margin-scrollbar">
                <H5 className="pb-2">{SolutionBusinessTransformation}</H5>
              </div>
              <P>The Business Transformation Solution programme is a <em className="txt-danger">multi-level engagement program</em> is designed to help Small and Medium-Sized Businesses and Startups create a strong, well-functioning business organization that produces the best results quickly and effectively.
                <Image className="img-fluid pt-3" src={dynamicImage(`banner/3.jpg`)} alt="business"  />
              </P>
              <P>The core of the programme is our internally developed <em className="txt-danger">Business Management model</em> , "Business Foundation & Management", which was tried and true for Indian business conditions while drawing inspiration from other successful global SME Business Management techniques.</P>
            </ScrollBar>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SmallSizeScrollbar