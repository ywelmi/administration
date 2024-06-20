import { Card, Col, Row } from 'reactstrap'
import { BreckpointSpecifics } from '../../../../../utils/Constant'
import CommonTable from '../Common/CommonTable'
import { breakPointBody, breakPointData, breakPointHead } from '../../../../../Data/Tables/ReactstrapTable/BasicTable/BasicTable'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const BreakPointSpecific = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={BreckpointSpecifics} span={breakPointData}/>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable headData={breakPointHead}>
              {breakPointBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.orderId}</td>
                  <td>{data.price}</td>
                  <td>{data.quantity}</td>
                  <td>{data.total}</td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default BreakPointSpecific