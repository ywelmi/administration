import { Card, CardBody, Col, Row } from 'reactstrap'
import ScrollBar from 'react-perfect-scrollbar'
import { BothSideVisibleScrollbars } from '../../../../utils/Constant'
import { H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { bothSideScrollData } from '../../../../Data/BonusUi/Scrollable/Scrollable'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const BothSideVisibleScrollbar = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={BothSideVisibleScrollbars} span={bothSideScrollData} />
        <CardBody>
          <div className="scroll-bar-wrap both-visible-scrollbar">
            <ScrollBar className="scroll-demo" style={{width:"100%", height:"300px"}}>
              <div className="horz-scroll-content">
                <Row>
                  <Col sm="3">
                    <div className="visible-wrapper">
                      <Image src={dynamicImage(`banner/2.jpg`)} alt="office-work" />
                    </div>
                    <P className="pt-3">Inspiration can take many different forms, and <em className="txt-danger">professional growth never stops</em>. In light of this, we've compiled a comprehensive list of web design blogs that will keep your mind stimulated for the entire year. You won't find any stinkers on this list, so don't worry. We value your time and believe that you should only receive the greatest. Because of this, we've only gathered web design blogs that have recently being updated. Get ready to add numerous subscriptions by creating your Feebly account.<br />{`-->`} Responsive...<br />{`-->`} Secure your domain...<br />{`-->`} Testing...<br />{`-->`} Content creation...<br />{`-->`} Visual elements...<br />{`-->`} Launch...</P>
                  </Col>
                  <Col sm="3">
                    <H6 className="pb-2">Latest trends </H6>
                    <P>You should stay current with all the most recent advances in the business whether you operate as a freelance web designer or for an agency or design studio. You may be sure you're constantly providing the most intelligent and original design solutions by doing this.</P>
                    <P>You can keep up with evolving design trends by reading web design blogs. You'll need to be able to comprehend new trends' causes and how they affect user experience. Additionally, you'll discover upgrades to current tools as well as new ones that have recently hit the market.</P>
                    <div className="visible-wrapper">
                      <Image src={dynamicImage(`email/3.jpg`)} alt="office" />
                    </div>
                  </Col>
                  <Col sm="3">
                    <H6 className="pb-2">The best UX designer</H6>
                    <P>The internet is teeming with free resources, no matter what stage of your UX journey you're in, and UX design blogs should be your first point of call. The abundance of blogs available, though, can be somewhat of a double-edged sword because there are so many to choose from. How do you decide which blogs are actually worthwhile reading?</P>
                    <P>We've collected a selection of the top UX design blogs available right now to spare you hours of scrolling and sorting through search results. We possess:<br /><strong>1. Muzli </strong><br /><strong>2. Facebook Design </strong><br /><strong>3. Awwwards</strong><br /></P>
                    <P>If you already work in the UX field, the Inside Design blog has all the information you need to expand your knowledge, especially if you're interested in streamlining your UX teams and procedures and getting a better understanding of the whole product design and development process. This is an excellent location to keep an eye out for the most recent UX trends, tools, resources, and events because they are always adding new stuff.</P>
                  </Col>
                  <Col sm="3">
                    <H6 className="pb-2">How to make best website ideas </H6>
                    <div className="visible-wrapper">
                      <Image src={dynamicImage(`banner/3.jpg`)} alt="website" />
                    </div>
                    <P className="pt-3">{`-->`} Blog <br />{`-->`} Portfolio website <br />{`-->`}Event website <br />{`-->`} personal website <br />{`-->`} Fashion website <br />{`-->`} Admin dashboards <br />{`-->`} E-commerce website <br />{`-->`} Beauty website <br />{`-->`} Food website<br />{`-->`} Animation website <br />{`-->`} Financial website</P>
                  </Col>
                </Row>
              </div>
            </ScrollBar>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BothSideVisibleScrollbar