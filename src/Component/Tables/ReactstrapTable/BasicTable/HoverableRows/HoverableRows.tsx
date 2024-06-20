import { Card, Col } from 'reactstrap'
import { HoverableRowsWithHorizontalBorders } from '../../../../../utils/Constant'
import CommonTable from '../Common/CommonTable'
import { hoverRowBody, hoverRowData, hoverRowHead } from '../../../../../Data/Tables/ReactstrapTable/BasicTable/BasicTable'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const HoverableRows = () => {
  return (
    <Col sm="12">
      <Card className="hoverable-table">
        <CommonCardHeader title={HoverableRowsWithHorizontalBorders} span={hoverRowData} />
        <CommonTable tableClass="signal-table" headData={hoverRowHead} hover>
          {hoverRowBody.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td className="d-flex align-items-center">
                {data.icon}
                <span className={`font-${data.color}`}>{data.status}</span>
              </td>
              <td>{data.signalName}</td>
              <td>{data.security}</td>
              <td>{data.stage}</td>
              <td>{data.schedule}</td>
              <td>{data.teamLead}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  )
}

export default HoverableRows