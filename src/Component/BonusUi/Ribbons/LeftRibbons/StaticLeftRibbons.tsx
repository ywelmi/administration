import { Col } from 'reactstrap'
import { P } from '../../../../AbstractElements'
import { CssRibbons, RibbonLeftText2 } from '../../../../utils/Constant';

const StaticLeftRibbons = () => {
  const ribbonLeftText1 = " have been a part of web design. There is a design for you in this collection, regardless of whether you use ";
  const ribbonLeftTextEm = "Ribbon designs";
  return (
    <Col sm="6" xl="4">
      <div className="ribbon-wrapper border border-1 height-equal alert-light-light">
        <div className="ribbon ribbon-primary ribbon-space-bottom">SAVE 10%</div>
        <P> 
          <em className="txt-danger">{ribbonLeftTextEm}</em>{ribbonLeftText1}
          <em className="txt-danger">{CssRibbons}</em>{RibbonLeftText2}
        </P>
      </div>
    </Col>
  )
}

export default StaticLeftRibbons