import { Btn, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Input, InputGroup } from 'reactstrap'
import { PostYourComments } from '../../../../../utils/Constant'

const CommentsBox = () => {
  return (
    <div className="comments-box">
      <div className='d-flex'>
        <Image className="img-50 img-fluid m-r-20 rounded-circle" alt="user" src={dynamicImage('user/1.jpg')} />
        <div className="flex-grow-1">
          <InputGroup className="text-box">
            <Input className="input-txt-bx" type="text" name="message-to-send" placeholder={PostYourComments} />
            <div className="input-group-append">
              <Btn color="transparent">
                <i className="fa fa-smile-o"></i>
              </Btn>
            </div>
          </InputGroup>
        </div>
      </div>
    </div>
  )
}

export default CommentsBox