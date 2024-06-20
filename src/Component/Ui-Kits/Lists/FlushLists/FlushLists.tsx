import { Card, CardBody, Col } from 'reactstrap'
import { FlushList } from '../../../../utils/Constant'
import { flushData, flushListData } from '../../../../Data/Ui-Kits/Lists/Lists'
import { LI, UL } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const FlushLists = () => {
  return (
    <Col xl="4" md="12">
      <Card>
        <CardHeaderCommon title={FlushList} span={flushData} />
        <CardBody>
          <UL className="list-group-flush">
            <LI>
              <i className="icofont icofont-arrow-right"></i>PRODUCT
            </LI>
            {flushListData.map((item, index) => (
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

export default FlushLists