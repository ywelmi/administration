import { Link } from 'react-router-dom';
import { H6, LI, P, UL } from '../../../../AbstractElements';
import { Collection, Href } from '../../../../utils/Constant';
import { Edit2, Link2, Share2, Tag, Trash2 } from 'react-feather';
import { FavDesciptionDataProp } from '../../../../Types/Application/Bookmark/Bookmark';

const FavDescriptionData = ({ myBookData}: FavDesciptionDataProp) => {
  const { website_url,desc,title } = myBookData;
  return (
    <div className="desciption-data">
      <div className="title-bookmark">
        <H6 className="title_0 f-w-500">{title}</H6>
        <P className="weburl_0">{website_url}</P>
        <div className="hover-block">
          <UL className="simple-list flex-row">
            <LI>
              <Link to={Href}><Edit2 /></Link>
            </LI>
            <LI>
              <Link to={Href}><Link2 /></Link>
            </LI>
            <LI>
              <Link to={Href}><Share2 /></Link>
            </LI>
            <LI>
              <Link to={Href}><Trash2 /></Link>
            </LI>
            <LI className="pull-right text-end">
              <Link to={Href}><Tag /></Link>
            </LI>
          </UL>
        </div>
        <div className="content-general">
          <P className="desc_0">{desc}</P>
          <span className="collection_0">{Collection}</span>
        </div>
      </div>
    </div>
  )
}

export default FavDescriptionData