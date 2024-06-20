import { H4, LI, P, UL } from '../../../../../AbstractElements'
import { Comments, Hits } from '../../../../../utils/Constant';

const UserBlogDetails = () => {
  
  return (
    <div className="blog-details">
      <P>25 July 2024</P>
      <H4>Experience lightning-fast load times and keep your visitors engaged.</H4>
      <UL className="blog-social flex-row simple-list">
        <LI><i className="icofont icofont-user" />William G. Savard</LI>
        <LI><i className="icofont icofont-thumbs-up" />02 {Hits}</LI>
        <LI><i className="icofont icofont-ui-chat" />598 {Comments}</LI>
      </UL>
    </div>
  )
}

export default UserBlogDetails