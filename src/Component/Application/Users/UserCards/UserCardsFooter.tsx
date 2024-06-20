import { H5, LI, UL } from '../../../../AbstractElements'
import { CardType } from '../../../../Types/Application/Users/UsersProfile'
import { Followers, Following, Posts } from '../../../../utils/Constant'

const UserCardsFooter :React.FC<CardType> = ({ item }) => {
  return (
    <UL className="social-follow d-block">
      <LI>
        <H5 className="mb-0">{item.follower}</H5>
        <span className="f-light">{Posts}</span>
      </LI>
      <LI>
        <H5 className="mb-0">{item.following}k</H5>
        <span className="f-light">{Followers}</span>
      </LI>
      <LI>
        <H5 className="mb-0">{item.totalPost}</H5>
        <span className="f-light">{Following}</span>
      </LI>
    </UL>
  )
}

export default UserCardsFooter