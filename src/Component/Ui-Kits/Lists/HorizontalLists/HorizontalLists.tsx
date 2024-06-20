import { Card, CardBody, Col } from 'reactstrap'
import { HorizontalList } from '../../../../utils/Constant'
import { horizontalData, horizontalDataList, horizontalListData } from '../../../../Data/Ui-Kits/Lists/Lists'
import { LI, UL } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const HorizontalLists = () => {
  return (
    <Col xl="6" sm="12" className="box-col-6">
      <Card className="height-equal">
        <CardHeaderCommon title={HorizontalList} span={horizontalData} />
        <CardBody>
          <div className="horizontal-list-wrapper dark-list">
            <UL className="fw-bold list-group-horizontal-sm pb-2">
              <LI className="border-left-primary">Product</LI>
              {horizontalDataList.map((item, index) => (
                <LI key={index}>{item}</LI>
              ))}
            </UL>
            {horizontalListData.map(({ item, color }, index) => (
              <UL className="fw-bold list-group-horizontal-sm pb-2" key={index}>
                {item.map((data, index) => (
                  <LI className={`border-left-${index === 0 ? `${color}` : ""}`} key={index}>{data}</LI>
                ))}
              </UL>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default HorizontalLists