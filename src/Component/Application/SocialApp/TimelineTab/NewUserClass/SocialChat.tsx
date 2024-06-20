import { TimelineDataType } from '../../../../../Types/Application/SocialApp/SocialApp'
import { Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Link } from 'react-router-dom'
import { Href, MoreComments } from '../../../../../utils/Constant'

const SocialChat = ({data} : TimelineDataType) => {
  return (
    <div className="social-chat">
        {data.socialChatData.map((item,index)=>(
            <div className={item.class} key={index}>
                <div className="d-flex">
                    <Image className="img-50 m-r-20 rounded-circle image-fluid" alt="user" src={dynamicImage(`user/${item.img}`)}/>
                    <div className="flex-grow-1">
                        <span className="f-w-600">{item.name} 
                            <span>{item.time} 
                                <i className="fa fa-reply font-primary"></i>
                            </span>
                        </span>
                        <P>{item.chat}</P>
                    </div>
                </div>
            </div>
        ))}
        <div className="text-center">
            <Link to={Href}>{MoreComments}</Link>
        </div>
    </div>
  )
}

export default SocialChat