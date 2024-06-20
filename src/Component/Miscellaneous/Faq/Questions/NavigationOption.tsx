import { Link } from 'react-router-dom'
import { LI, UL } from '../../../../AbstractElements'
import { AskOurCommunity, FaqContactUs, Href } from '../../../../utils/Constant'
import { Mail, MessageCircle } from 'react-feather'
import { askQuestionData } from '../../../../Data/Miscellaneous/Faq/Faq'

const NavigationOption = () => {
  return (
    <div className="navigation-option">
      <UL>
        {askQuestionData.map((item, i) => (
          <LI key={i}>
            <Link to={Href}>{item.icon}{item.title}</Link>
            <span className={item.class}>{item.val}</span>
          </LI>
        ))}
      </UL>
      <hr/>
      <UL>
        <LI>
          <Link to={Href}><MessageCircle />{AskOurCommunity}</Link>
        </LI>
        <LI>
          <Link to={Href}><Mail />{FaqContactUs}</Link>
        </LI>
      </UL>
    </div>
  )
}

export default NavigationOption