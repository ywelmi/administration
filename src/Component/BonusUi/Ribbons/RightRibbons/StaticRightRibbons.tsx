import { Col } from 'reactstrap'
import { P } from '../../../../AbstractElements'

const StaticRightRibbons = () => {
  const ribbonAndTagText = " frequently appear together because they have similar features that capture attention and make wonderful spaces for vital information.";
  const ribbonAndTag = "ribbon and tag";
  return (
    <Col sm="6" xl="4">
      <div className="ribbon-wrapper border border-1 height-equal">
        <div className="ribbon ribbon-dark ribbon-right">50% OFF</div>
        <P>
          The <em className="txt-danger">{ribbonAndTag}</em>
          {ribbonAndTagText}
        </P>
      </div>
    </Col>
  )
}

export default StaticRightRibbons