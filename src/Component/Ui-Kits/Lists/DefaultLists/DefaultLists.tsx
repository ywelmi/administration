import { Card, CardBody, Col } from 'reactstrap'
import { DefaultList } from '../../../../utils/Constant'
import { defaultData, defaultListData } from '../../../../Data/Ui-Kits/Lists/Lists'
import { LI, UL } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const DefaultLists = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CardHeaderCommon title={DefaultList} span={defaultData} />
        <CardBody>
          <UL>
            <LI>
              <i className="icofont icofont-arrow-right"></i>Logo Design
            </LI>
            {defaultListData.map((item, index) => (
              <LI key={index}>
                <i className="icofont icofont-arrow-right"></i>{item}
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DefaultLists