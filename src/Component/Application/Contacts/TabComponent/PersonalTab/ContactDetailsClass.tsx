import { useCallback, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import SweetAlert from 'sweetalert2';
import { H6, Image, LI, P, UL } from '../../../../../AbstractElements';
import { Link } from 'react-router-dom';
import { Delete, Edit, EmailAddress, General, History, Href, MobileNo, Name, Print } from '../../../../../utils/Constant';
import SearchNotFoundClass from './SearchNotFoundClass';
import PrintModalPreview from './PrintModalPreview';
import { ContactDetailsPropsType, UserCallbackUser } from '../../../../../Types/Application/Contacts/Contacts';
import { deletedUser, setHistory, setTempId } from '../../../../../ReduxToolkit/Reducer/ContactSlice';
import { Media } from 'reactstrap';

const ContactDetailsClass = ({ selectedUser, userEditCallback,setSelectedUser }:ContactDetailsPropsType) => {
    const {users} = useAppSelector((state)=> state.contact)
    const [printModal, setPrintModal] = useState(false);
    const printModalToggle = () => setPrintModal(!printModal);
    const dispatch=useAppDispatch()
    const toggleCallback = useCallback((toggle:boolean) => {
      setPrintModal(toggle);
    }, []);
      
    const editUsers = (usersData:UserCallbackUser) => {
      dispatch(setTempId(usersData.id));
      userEditCallback(true, usersData);
    };
  
    const deleteUser = (userId:number | undefined) => {
      SweetAlert.fire({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'cancel',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          dispatch(deletedUser(userId));
          const newUsers= users.filter((user) => user.id !== userId)
          setSelectedUser(newUsers[newUsers.length - 1])
          SweetAlert.fire('Deleted!','Your file has been deleted.','success');
        } else {
          SweetAlert.fire('Your imaginary file is safe!');
        }
      });
    };
    return (
      <>
        {selectedUser ?
          <div className="profile-mail">
            <Media>
              <Image className= 'img-100 img-fluid m-r-20 rounded-circle update_img_0' src= {selectedUser.avatar} alt= 'users'  />
              <Media body className="mt-0">
                <H6>
                  <span className="first_name_0">{selectedUser.name}</span>
                  <span className="last_name_0">{selectedUser.sureName}</span>
                </H6>
                <P className='email_add_0'>{selectedUser.name}{'@gmail.com'}</P>
                <UL className='simple-list flex-row' >
                  <LI><Link to={Href} onClick={() => editUsers(selectedUser)}>{Edit}</Link></LI>
                  <LI><Link to={Href} onClick={() => deleteUser(selectedUser.id)}>{Delete}</Link></LI>
                  <LI><Link to={Href} onClick={()=>dispatch(setHistory())}>{History}</Link></LI>
                  <LI><Link to={Href} onClick={() => printModalToggle()}>{Print}</Link></LI>
                </UL>
              </Media>
            </Media>
            <div className="email-general">
              <H6 className='mb-3'>{General}</H6>
              <UL className='simple-list' >
                <LI>{Name}<span className="font-primary first_name_0">{selectedUser.name}</span></LI>
                <LI>{MobileNo} <span className="font-primary mobile_num_0">{selectedUser.mobile}</span></LI>
                <LI>{EmailAddress}<span className="font-primary email_add_0">{`${selectedUser.name}@gmail.com`} </span></LI>
              </UL>
            </div>
          </div>
          :
          <SearchNotFoundClass />
        }
        {selectedUser && <PrintModalPreview toggleCallback={toggleCallback} printModal={printModal} selectedUser={selectedUser} />}
      </>
    )
  }

export default ContactDetailsClass