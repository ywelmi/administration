import { Card, Col, Row } from 'reactstrap'
import { ResponsiveLightBackgroundTitle } from '../../../../../utils/Constant'
import CommonTable from '../Common/CommonTable'
import { responsiveLightBackgroundBody, responsiveLightBackgroundData, responsiveLightBackgroundHead } from '../../../../../Data/Tables/ReactstrapTable/BasicTable/BasicTable'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const ResponsiveLightBackground = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={ResponsiveLightBackgroundTitle} span={responsiveLightBackgroundData} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable tableClass="light-card" headData={responsiveLightBackgroundHead}>
              {responsiveLightBackgroundBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.task}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.assign}</td>
                  <td>{data.date}</td>
                  <td>{data.price}</td>
                  <td className={`font-${data.color}`}>{data.status}</td>
                  <td>{data.progress}</td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default ResponsiveLightBackground