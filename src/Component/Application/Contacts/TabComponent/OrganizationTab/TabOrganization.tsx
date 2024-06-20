import { organizationList } from '../../../../../Data/Application/Contacts/Contacts'
import { Media, TabPane } from 'reactstrap'
import { H5, H6, Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Link } from 'react-router-dom'
import { EmailAddress, Gender, General, Href, Personal, Print } from '../../../../../utils/Constant'

const TabOrganization = () => {
  return (
    <>
      {organizationList.map((item, i) =>
        <TabPane tabId={item.activeTab} key={i}>
          <div className="profile-mail">
            <Media>
              <Image className= 'p-0 img-100 img-fluid m-r-20 rounded-circle update_img_5' src= {dynamicImage(`${item.image}`)} alt= 'images'  />
              <Media body>
                <H5>
                  <span className="first_name_5">{item.name}</span>
                </H5>
                <P className='email_add_5' >{item.email}</P>
                <UL>
                  <LI>
                    <Link to={Href}>{Print}</Link>
                  </LI>
                </UL>
              </Media>
            </Media>
            <div className="email-general">
              <H6>{General}</H6>
              <P>{EmailAddress}: <span className="font-primary email_add_5">{item.email}</span></P>
              <div className="gender">
                <H6>{Personal}</H6>
                <P>{Gender}: <span>{item.gender}</span></P>
              </div>
            </div>
          </div>
        </TabPane>
      )}
    </>
  )
}

export default TabOrganization