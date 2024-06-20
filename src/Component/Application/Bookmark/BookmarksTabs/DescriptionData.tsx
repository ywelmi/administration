import { DescriptionBookMarkPropsType } from '../../../../Types/Application/Bookmark/Bookmark';
import { H6, LI, P, UL } from '../../../../AbstractElements';
import { Edit2, Link2, Share2, Tag, Trash2 } from 'react-feather';
import { Href } from '../../../../utils/Constant';
import { Link } from 'react-router-dom';

const DescriptionData = ({ data, onHandleClick, removeFrombookmark,}: DescriptionBookMarkPropsType) => {
    const { title, website_url, id } = data;
    return (
      <div className="desciption-data">
        <div className="title-bookmark">
          <H6 className="title_0 f-w-500">{title}</H6>
          <P className="weburl_0">{website_url}</P>
          <div className="hover-block">
            <UL className="simple-list d-block">
              <LI><Link to={Href} onClick={() => onHandleClick(data)}><Edit2 /></Link></LI>
              <LI><Link to={Href}><Link2 /></Link></LI>
              <LI><Link to={Href}><Share2 /></Link></LI>
              <LI><Link to={Href} onClick={() => removeFrombookmark(id)}><Trash2 /></Link></LI>
              <LI className="pull-right text-end"><Link to={Href}><Tag /></Link></LI>
            </UL>
          </div>
          <div className="content-general">
            <P className="desc_0">{data.desc}</P>
            <span className="collection_0">{data.collection}</span>
          </div>
        </div>
      </div>
    )
  }

export default DescriptionData