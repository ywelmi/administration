import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import { ListsWithCheckboxs } from '../../../../utils/Constant'
import { checkboxDataList, listCheckboxData } from '../../../../Data/Ui-Kits/Lists/Lists'
import { LI, UL } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const ListsWithCheckbox = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CardHeaderCommon title={ListsWithCheckboxs} span={listCheckboxData} />
        <CardBody className="dark-list">
          <UL>
            <LI>
              <Input className="me-1 checkbox-primary active" type="checkbox" id="firstCheckbox"/>
              <Label check className="txt-primary mb-0" for="firstCheckbox">Auto Start</Label>
            </LI>
            {checkboxDataList.map(({ color,text,id }, index) => (
              <LI key={index}>
                <Input className={`me-1 checkbox-${color}`} type="checkbox" id={`firstCheckbox-${id}`} />
                <Label check className={`txt-${color} mb-0`} for={`firstCheckbox-${id}`}>{text}</Label>
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ListsWithCheckbox