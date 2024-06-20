import { Btn, H6, Image, P } from '../../../../AbstractElements'
import { Card, CardBody, Media } from 'reactstrap'
import { dynamicImage } from '../../../../Service'
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { ContactFilter } from '../../../../utils/Constant';
import NavComponent from './NavComponent';
import { ContactSidebarCallbackProp } from '../../../../Types/Application/Contacts/Contacts';
import { setContactFilter } from '../../../../ReduxToolkit/Reducer/ContactSlice';

const ContactSideBar = ({ callback }: ContactSidebarCallbackProp) => {
  const { contactFilter } = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();
  return (
    <div className="md-sidebar">
      <Btn color="primary" className="md-sidebar-toggle" onClick={() => dispatch(setContactFilter())}>
        {ContactFilter}
      </Btn>
      <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${contactFilter ? "open" : ""}`} >
        <div className="email-left-aside">
          <Card>
            <CardBody>
              <div className="email-app-sidebar left-bookmark">
                <Media>
                  <div className="media-size-email">
                    <Image className="me-3 rounded-circle" src={dynamicImage("user/user.png")} alt="users"/>
                  </div>
                  <Media body>
                    <H6 className='f-w-600'>{'MARK JENCO'}</H6>
                    <P>{'Markjecno@gmail.com'}</P>
                  </Media>
                </Media>
                <NavComponent callbackActive={callback} />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ContactSideBar