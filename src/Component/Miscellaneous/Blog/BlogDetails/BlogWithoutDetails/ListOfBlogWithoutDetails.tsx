import { H6, LI, P, UL } from '../../../../../AbstractElements'

const ListOfBlogWithoutDetails = () => {
  return (
    <div className="blog-details-main">
      <UL className="blog-social simple-list flex-row">
        <LI>9 April 2024</LI>
        <LI>by: Admin</LI>
        <LI>0 Hits</LI>
      </UL>
      <hr />
      <H6 className="blog-bottom-details">Navigating the Digital Frontier: Insights into the World of Tech</H6>
    </div>
  )
}

export default ListOfBlogWithoutDetails