import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { SecondaryBorderState } from '../../../../utils/Constant'
import { borderSecondaryData, borderSecondaryDataList } from '../../../../Data/BonusUi/CreativeCard/CreativeCard'
import { Badges } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const BorderSecondaryState = () => {
  return (
    <Col xxl="4" sm="12">
      <Card className="height-equal">
        <CardHeaderCommon headClass="border-l-secondary" title={SecondaryBorderState} span={borderSecondaryData} />
        <CardBody className="scroll-demo">
          <ListGroup numbered className="scroll-rtl">
            <ListGroupItem className="d-flex align-items-start flex-wrap">
              <div className="ms-2 me-auto">Stella Nowland</div>
              <Badges color="warning" pill className="p-2">Freelance</Badges>
            </ListGroupItem>
            {borderSecondaryDataList.map(({title,color,tag}, index) => (
              <ListGroupItem className="d-flex align-items-start flex-wrap" key={index}>
                <div className="ms-2 me-auto">{title}</div>
                <Badges color={color} pill className="p-2">{tag}</Badges>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BorderSecondaryState