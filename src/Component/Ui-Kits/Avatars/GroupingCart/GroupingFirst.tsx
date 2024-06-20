import { Image, LI, UL } from '../../../../AbstractElements'
import { groupingImageOne } from '../../../../Data/Ui-Kits/Avtar/Avtar'
import { dynamicImage } from '../../../../Service'

const GroupingFirst = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <UL className='simple-list flex-row'>
        <LI className="d-inline-block">
          <Image className="img-100 b-r-8" src={dynamicImage(`avtar/4.jpg`)} alt="image" />
        </LI>
        {groupingImageOne.map(({ className, src}, index) => (
          <LI className="d-inline-block" key={index}>
            <Image className={`${className} h-auto`} src={dynamicImage(`${src}`)} alt="image" />
          </LI>
        ))}
      </UL>
    </div>
  )
}

export default GroupingFirst