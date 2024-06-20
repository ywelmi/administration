import { Badges, H6 } from '../../../../../AbstractElements'
import { Messages, MyPage, Notification } from '../../../../../utils/Constant'

const MessagesAndNotification = () => {
  return (
    <div className='flex-grow-1'>
      <H6 className="font-primary f-w-600">{MyPage}</H6>
      <span className="d-block">
        <span>
          <i className="fa fa-comments-o"> </i>
          <span className="px-2">
            {Messages} <Badges pill color="" className='badge-light ms-2'>9</Badges>
          </span>
        </span>
      </span>
      <span className="d-block">
        <span>
          <i className="fa fa-bell-o"> </i>
          <span className="px-2">
            {Notification} <Badges pill color="" className='badge-light ms-2'>9</Badges>
          </span>
        </span>
      </span>
    </div>
  )
}

export default MessagesAndNotification