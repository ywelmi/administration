import { Card, Col, Row } from 'reactstrap'
import { SizingTable } from '../../../../../utils/Constant'
import CommonTable from '../Common/CommonTable'
import { sizingTableBody, sizingTableData, sizingTableHead } from '../../../../../Data/Tables/ReactstrapTable/BasicTable/BasicTable'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const SizingTables = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={SizingTable} span={sizingTableData}/>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable size="lg" headData={sizingTableHead}>
              {sizingTableBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.employeeName}</td>
                  <td>{data.date}</td>
                  <td className={`font-${data.color}`}>{data.status}</td>
                  <td>{data.hours}</td>
                  <td>{data.performance}</td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default SizingTables