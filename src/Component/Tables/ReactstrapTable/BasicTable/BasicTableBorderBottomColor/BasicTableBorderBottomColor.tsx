import { Card, Col } from 'reactstrap'
import { BasicTableWithBorderBottomColor } from '../../../../../utils/Constant'
import { Badges, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import CommonTable from '../Common/CommonTable'
import { basicTableBody, basicTableBorderColor, basicTableHead } from '../../../../../Data/Tables/ReactstrapTable/BasicTable/BasicTable'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const BasicTableBorderBottomColor = () => {
  return (
    <Col sm="12">
      <Card className="basicborder-table">
        <CommonCardHeader title={BasicTableWithBorderBottomColor} span={basicTableBorderColor} />
        <CommonTable headData={basicTableHead} headRowClass="border-bottom-primary">
          {basicTableBody.map((data) => (
            <tr className={`border-bottom-${data.color}`} key={data.id}>
              <th scope="row">{data.id}</th>
              <td>
                <Image className="img-30 me-2" src={dynamicImage(`${data.image}`)} alt="users" />
                {data.firstName}
              </td>
              <td>{data.lastName}</td>
              <td>{data.userName}</td>
              <td>{data.designation}</td>
              <td>{data.company}</td>
              <td>
                <Badges color={`light-${data.badgeColor}`} className={`text-${data.badgeColor}`}>{data.language}</Badges>
              </td>
              <td>{data.country}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  )
}

export default BasicTableBorderBottomColor