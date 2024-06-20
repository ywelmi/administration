import { Card, Col, Table } from 'reactstrap'
import { AddprojectAndUpload, Date, Price, ProjectName, Status } from '../../../../../utils/Constant'
import AddProjectsAndUploadTableBody from './AddProjectsAndUploadTableBody'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const AddProjectsAndUpload = () => {
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={AddprojectAndUpload} tagClass="card-title mb-0" />
        <div className="table-responsive add-project">
          <Table className="card-table table-vcenter text-nowrap">
            <thead>
              <tr>
                <th>{ProjectName}</th>
                <th>{Date}</th>
                <th>{Status}</th>
                <th>{Price}</th>
                <th />
              </tr>
            </thead>
            <AddProjectsAndUploadTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  )
}

export default AddProjectsAndUpload