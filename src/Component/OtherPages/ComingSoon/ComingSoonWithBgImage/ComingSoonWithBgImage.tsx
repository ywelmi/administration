import { Container } from 'reactstrap'
import { H5, Image } from '../../../../AbstractElements'
import { WeAreComingSoon } from '../../../../utils/Constant'
import CountdownData from '../Common/CountdownData'
import { dynamicImage } from '../../../../Service'

const ComingSoonWithBgImageContainer = () => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Container fluid className="p-0 m-0">
        <div className="comingsoon comingsoon-bgimg">
          <div className="comingsoon-inner text-center">
            <Image className='mx-auto' src={dynamicImage("other-images/logo-login.png")} alt="comingSoon"/>
            <H5>{WeAreComingSoon}</H5>
            <div className="countdown" id="clockdiv">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ComingSoonWithBgImageContainer