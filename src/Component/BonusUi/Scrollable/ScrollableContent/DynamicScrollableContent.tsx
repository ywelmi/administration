import { ListGroupItem } from 'reactstrap'
import { H6, Image, P } from '../../../../AbstractElements'
import { Href } from '../../../../utils/Constant'
import { dynamicImage } from '../../../../Service'
import { scrollableContentDataList } from '../../../../Data/BonusUi/Scrollable/Scrollable'

const DynamicScrollableContent = () => {
  return (
    <>
      {scrollableContentDataList.map(({ text, mail, days, src }, index) => (
        <ListGroupItem className="list-group-item-action list-hover-primary" href={Href} key={index}>
          <div className="list-wrapper gap-0">
            <Image className="list-img" src={dynamicImage(src)} alt="profile" />
            <div className="list-content">
              <H6>{text}</H6>
              <P>{mail}</P>
              <small className="text-muted">{days}</small>
            </div>
          </div>
        </ListGroupItem>
      ))}
    </>
  )
}

export default DynamicScrollableContent