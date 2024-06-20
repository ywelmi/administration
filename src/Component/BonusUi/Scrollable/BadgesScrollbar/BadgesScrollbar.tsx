import { Card, CardBody, Col } from 'reactstrap'
import ScrollBar from 'react-perfect-scrollbar'
import { BadgesScrollbars } from '../../../../utils/Constant'
import { Badges, LI, OL } from '../../../../AbstractElements'
import { badgeScroll, badgeScrollList } from '../../../../Data/BonusUi/Scrollable/Scrollable'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const BadgesScrollbar = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CardHeaderCommon title={BadgesScrollbars} span={badgeScroll} />
        <CardBody>
          <ScrollBar className="scroll-demo" style={{ width: "100%", height: "300px" }}>
            <OL className="list-group list-group-numbered scroll-rtl">
              <LI className="d-flex align-items-start flex-wrap">
                <div className="ms-2 me-auto">Stella Nowland</div>
                <Badges pill color="warning" className="p-2">Freelance</Badges>
              </LI>
              {badgeScrollList.map(({ title, color, text }, index) => (
                <LI className="d-flex align-items-start flex-wrap" key={index}>
                  <div className="ms-2 me-auto">{title}</div>
                  <Badges color={color} pill className="p-2">{text}</Badges>
                </LI>
              ))}
            </OL>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BadgesScrollbar