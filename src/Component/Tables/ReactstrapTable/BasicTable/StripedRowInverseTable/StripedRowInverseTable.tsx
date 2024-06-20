import { Card, Col, Row } from 'reactstrap'
import { StripedRowWithInverseTables } from '../../../../../utils/Constant'
import CommonTable from '../Common/CommonTable'
import { stripedRowBody, stripedRowData, stripedRowHead } from '../../../../../Data/Tables/ReactstrapTable/BasicTable/BasicTable'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const StripedRowInverseTable = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={StripedRowWithInverseTables} span={stripedRowData}/>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable strip tableClass="table-inverse" headData={stripedRowHead}>
              {stripedRowBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.dessert}</td>
                  <td>{data.calories}</td>
                  <td>{data.fat}</td>
                  <td>{data.price}</td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default StripedRowInverseTable