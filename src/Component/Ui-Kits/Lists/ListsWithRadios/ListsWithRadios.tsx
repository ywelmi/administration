import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import { ListsWithRadio } from '../../../../utils/Constant'
import { listRadioData, listRadioDataList } from '../../../../Data/Ui-Kits/Lists/Lists'
import { LI, UL } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const ListsWithRadios = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CardHeaderCommon title={ListsWithRadio} span={listRadioData} />
        <CardBody>
          <UL>
            <LI>
              <Input className="me-1 active checkbox-danger" type="radio" defaultChecked name="radio"/>
              <Label check className="mb-0">Meditations</Label>
            </LI>
            {listRadioDataList.map(({ color, text,id }, index) => (
              <LI key={index}>
                <Input className={`me-1 checkbox-${color}`} type="radio" id={`secondRadio-${id}`} name="radio"/>
                <Label check className="mb-0" for={`secondRadio-${id}`}>{text}</Label>
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ListsWithRadios