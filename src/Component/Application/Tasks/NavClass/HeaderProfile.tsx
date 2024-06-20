import { Media } from 'reactstrap'
import { H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'

const HeaderProfile = () => {
  return (
    <Media>
      <div className="media-size-email">
        <Image className="me-3 rounded-circle" src={dynamicImage("user/user.png")} alt="user" />
      </div>
      <Media body>
        <H6 className="f-w-600">{'MARK JENCO'}</H6>
        <P>{'Markjecno@gmail.com'}</P>
      </Media>
    </Media>
  )
}

export default HeaderProfile