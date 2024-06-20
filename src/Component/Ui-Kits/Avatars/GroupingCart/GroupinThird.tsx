import { Image, LI, UL } from '../../../../AbstractElements'
import { groupingImageThird } from '../../../../Data/Ui-Kits/Avtar/Avtar'
import { dynamicImage } from '../../../../Service'

const GroupInThird = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <UL className='simple-list flex-row'>
        <LI className="d-inline-block">
          <Image className="img-40 rounded-circle" src={dynamicImage(`user/3.jpg`)} alt="image" />
        </LI>
        {groupingImageThird.map((item, index) => (
          <LI className="d-inline-block" key={index}>
            <Image className="img-40 rounded-circle" src={dynamicImage(`${item}`)} alt="image" />
          </LI>
        ))}
      </UL>
    </div>
  )
}

export default GroupInThird