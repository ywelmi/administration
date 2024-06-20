import { Image, LI, P, UL } from '../../../../../AbstractElements'
import { groupChatHeader } from '../../../../../Data/Application/Chat/PrivateChat'
import { dynamicImage } from '../../../../../Service'

const GroupChatImages = () => {
  return (
    <div className="chat-time group-chat">
      <UL className='simple-list flex-row'>
        {groupChatHeader.map((data,i)=>(
          <LI key={i}>
            <Image className="img-fluid rounded-circle" src={dynamicImage(data)} alt="user" />
          </LI>
        ))}
        <LI>
          <div className="custom-name profile-count light-background">
            <P className="f-w-500">9+</P>
          </div>
        </LI>
      </UL>
      <div>
        <span>Meeting Department</span>
        <P>35 Members</P>
      </div>
    </div>
  )
}

export default GroupChatImages