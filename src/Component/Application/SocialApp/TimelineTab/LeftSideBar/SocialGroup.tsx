import { Image, LI, UL } from '../../../../../AbstractElements'
import { socialGroupData } from '../../../../../Data/Application/SocialApp/SocialApp'
import { dynamicImage } from '../../../../../Service'
import { UncontrolledTooltip } from 'reactstrap'

const SocialGroup = () => {
  return (
    <UL className="simple-list flex-row">
      {socialGroupData.map((data, index) => (
        <LI className="d-inline-block" key={index}>
          <Image className="img-40 rounded-circle" src={dynamicImage(`user/${data.imageName}`)} alt="Img" id={`UncontrolledTooltipExample-${index}`} />
          <UncontrolledTooltip placement="top" target={`UncontrolledTooltipExample-${index}`}>
            {data.userName}
          </UncontrolledTooltip>
        </LI>
      ))}
    </UL>
  )
}

export default SocialGroup