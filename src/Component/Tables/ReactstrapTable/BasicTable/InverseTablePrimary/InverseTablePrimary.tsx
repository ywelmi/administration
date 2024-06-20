import { Card, Col } from 'reactstrap'
import { InverseTablWithPrimaryBackgrounds } from '../../../../../utils/Constant'
import CommonTable from '../Common/CommonTable'
import { inverseTableWithBackgroundBody, inverseTableWithBackgroundData, inverseTableWithBackgroundHead } from '../../../../../Data/Tables/ReactstrapTable/BasicTable/BasicTable'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const InverseTablePrimary = () => {
  return (
    <Col sm="12">
        <Card>
         <CommonCardHeader title={InverseTablWithPrimaryBackgrounds} span={inverseTableWithBackgroundData} />
         <CommonTable strip headData={inverseTableWithBackgroundHead} tableClass='bg-primary' headClass='tbl-strip-thad-bdr' >
            {inverseTableWithBackgroundBody.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.company}</td>
                <td>{data.salary}</td>
                <td>{data.email}</td>
                <td>{data.position}</td>
                <td>{data.country}</td>
              </tr>
            ))}
         </CommonTable>
        </Card>
    </Col>
  )
}

export default InverseTablePrimary