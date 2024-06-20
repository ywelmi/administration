import { FilterPropsType } from '../../../../../Types/Application/SocialApp/SocialApp'
import { CardBody, Collapse } from 'reactstrap'
import { Image, LI, UL } from '../../../../../AbstractElements'
import { numbers } from '../../../../../Data/Application/SocialApp/SocialApp'
import { dynamicImage } from '../../../../../Service'

const LatestPhotosCollapse = ({ isFilter }: FilterPropsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="photos filter-cards-view px-0">
        <UL className="text-center simple-list flex-row">
          {numbers.map((data, index) => (
            <LI key={index}>
              <div className="latest-post">
                <Image className="img-fluid" alt="user" src={dynamicImage(`social-app/post-${data}.png`)} />
              </div>
            </LI>
          ))}
        </UL>
      </CardBody>
    </Collapse>
  )
}

export default LatestPhotosCollapse