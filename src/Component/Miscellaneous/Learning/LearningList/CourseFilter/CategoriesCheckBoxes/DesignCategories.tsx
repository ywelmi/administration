import { Link } from 'react-router-dom'
import { DesignLearning, Href } from '../../../../../../utils/Constant'
import { Badges, LI, UL } from '../../../../../../AbstractElements'
import { designerCategoryData } from '../../../../../../Data/Miscellaneous/Learning/Learning'

const DesignCategories = () => {
  return (
    <div className="categories pt-2">
      <div className="learning-header">
        <span className="f-w-600">{DesignLearning}</span>
      </div>
      <UL className='simple-list'>
        {designerCategoryData.map((data, index) => (
          <LI className="border-0" key={index}>
            <Link to={Href}>{data.learningHeading}</Link>
            <Badges color="primary" className="pull-right">{data.badgeNumber}</Badges>
          </LI>
        ))}
      </UL>
    </div>
  )
}

export default DesignCategories