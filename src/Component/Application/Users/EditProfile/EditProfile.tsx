import { Container, Row } from 'reactstrap'
import EditMyProfile from './EditMyProfile/EditMyProfile'
import EditProfileForm from './EditProfileForm/EditProfileForm'
import AddProjectsAndUpload from './AddProjectsAndUpload/AddProjectsAndUpload'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { EditProfile, Users } from '../../../../utils/Constant'

const EditProfileContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={EditProfile} parent={Users} />
      <Container fluid>
        <div className="edit-profile">
          <Row>
            <EditMyProfile />
            <EditProfileForm />
            <AddProjectsAndUpload />
          </Row>
        </div>
      </Container>
    </>
  )
}

export default EditProfileContainer