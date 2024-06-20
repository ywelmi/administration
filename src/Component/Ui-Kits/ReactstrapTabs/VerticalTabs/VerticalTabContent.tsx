import { Col, TabContent, TabPane } from 'reactstrap'
import { TabContentProp } from '../../../../Types/Ui-Kits/UiKitsTypes'
import { LI, P, UL } from '../../../../AbstractElements'

const VerticalTabContent:React.FC<TabContentProp> = ({basicTab}) => {
  return (
    <Col md="8" xs="12">
      <TabContent activeTab={basicTab}>
        <TabPane tabId="1">
          <P>It was an easy decision.an affordable expense! Absolutely! we got peace of mind. Now, my time is spent on the<em className="txt-danger">“Sale”</em> and not on technology. Create product Builder tool is also pre-bundled in this template so that you can let the audience configure the product by themselves before placing the order.We are a small yet highly-skilled group of creative brains with a vast experience. Our team of web designers, online marketing experts, content writers, graphic professionals have completed numerous projects.</P>
        </TabPane>
        <TabPane tabId="2">
          <UL className="d-flex flex-column gap-1 simple-list">
            <LI>If you are a business owner, your website is absolutely one of the most important tools you have in your arsenal to get more - and better - clients and customers or a good one from a great one? Here are 10 qualities that a great website will need. Whether or not you end up retaining makespace based web designers, you shoULd find them helpful:</LI>
            <LI>{`-->`} Navigation</LI>
            <LI>{`-->`} Visual Design</LI>
            <LI>{`-->`} Web Friendly</LI>
            <LI>{`-->`} Conversion</LI>
          </UL>
        </TabPane>
        <TabPane tabId="3">
          <UL className="d-flex flex-column gap-1 simple-list">
            <LI>Available pages in Theme: </LI>
            <LI><strong> Typography: </strong> Typography is the art of arranging letters and text in a way that makes the copy legible, clear, and visually appealing to the reader.</LI>
            <LI> <strong> Tooltip: </strong> A tooltip is a brief, informative message that appears when a user interacts with an element in a graphical user interface (GUI). </LI>
          </UL>
        </TabPane>
        <TabPane tabId="4">
          <UL className="d-flex flex-column gap-1 p-sm-0 pt-2 simple-list">
            <LI><strong> Site purpose</strong> Like a mission statement, a website's purpose gives the primary reason for the site's existence in the world. Whether for education, advocacy, service provision, community organizing, etc.</LI>
            <LI><strong> Features</strong> It's important to figure out as many of these in advance as you can for the sake of a more coherent design. </LI>
          </UL>
        </TabPane>
      </TabContent>
    </Col>
  )
}

export default VerticalTabContent