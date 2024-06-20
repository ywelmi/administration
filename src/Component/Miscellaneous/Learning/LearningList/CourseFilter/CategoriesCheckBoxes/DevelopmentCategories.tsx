import { DevelopmentTitle, Href } from '../../../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { Badges, LI, UL } from '../../../../../../AbstractElements'
import { developmentData } from '../../../../../../Data/Miscellaneous/Learning/Learning'

const DevelopmentCategories = () => {
  return (
    <div className="categories pt-1">
      <div className="learning-header">
        <span className="f-w-600">{DevelopmentTitle}</span>
      </div>
      <UL className='simple-list'>
        {developmentData.map((data, index) => (
          <LI className="border-0" key={index}>
            <Link to={Href}>{data.DevelopmentHeading}</Link>
            <Badges color="primary" className="pull-right">{data.badgeNumber}</Badges>
          </LI>
        ))}
      </UL>
    </div>
  )
}

export default DevelopmentCategories