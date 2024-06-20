import { Card, CardBody, Col, Modal } from 'reactstrap'
import { H5, Image, LI, SVG, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Link } from 'react-router-dom'
import { profileData } from '../../../../../Data/Ui-Kits/Modal/Modal'
import { ProfileModalType } from '../../../../../Types/Ui-Kits/UiKitsTypes'

const ProfileModal:React.FC<ProfileModalType> = ({ modalOne, modalOneToggle }) => {
  return (
    <Modal fade centered isOpen={modalOne} toggle={modalOneToggle}>
      <div className="modal-dialog m-0">
        <div className="modal-content">
          <Col xl="12">
            <Card className="social-profile mb-0">
              <CardBody>
                <div className="social-img-wrap">
                  <div className="social-img">
                    <Image src={dynamicImage(`dashboard-3/profile.png`)} alt="profile" />
                  </div>
                  <div className="edit-icon">
                    <SVG iconId="profile-check" />
                  </div>
                </div>
                <div className="social-details">
                  <H5 className="mb-1">
                    <Link to="/app/social-app">Brooklyn Simmons</Link>
                  </H5>
                  <span className="f-light">@brookly.simmons</span>
                  <UL className="social-follow simple-list flex-row">
                    <LI>
                      <H5 className="mb-0">1,908</H5>
                      <span className="f-light">Posts</span>
                    </LI>
                    {profileData.map(({ heading, data }, index) => (
                      <LI key={index}>
                        <H5 className="mb-0">{heading}</H5>
                        <span className="f-light">{data}</span>
                      </LI>
                    ))}
                  </UL>
                </div>
              </CardBody>
            </Card>
          </Col>
        </div>
      </div>
    </Modal>
  )
}

export default ProfileModal