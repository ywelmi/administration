import { Card, Col, Row } from 'reactstrap'
import { CaptionTableTitle, UserList } from '../../../../../utils/Constant'
import CommonTable from '../Common/CommonTable'
import { captionBody, captionData, captionHead } from '../../../../../Data/Tables/ReactstrapTable/BasicTable/BasicTable'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const CaptionTable = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CaptionTableTitle} span={captionData} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable caption={UserList} headData={captionHead}>
              {captionBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.employeeName}</td>
                  <td>{data.email}</td>
                  <td>{data.experience}</td>
                  <td>{data.sex}</td>
                  <td>{data.number}</td>
                  <td>{data.age}</td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default CaptionTable