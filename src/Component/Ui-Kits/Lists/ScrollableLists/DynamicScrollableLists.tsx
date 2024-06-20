import { scrollableDataList } from '../../../../Data/Ui-Kits/Lists/Lists'
import { Href } from '../../../../utils/Constant'
import { H6, Image, LI, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'

const DynamicScrollableLists = () => {
  return (
    <>
      {scrollableDataList.map(({ src, title, mail, days }, index) => (
        <LI className="list-group-item-action list-hover-primary" href={Href} key={index}>
          <div className="list-wrapper gap-0">
            <Image className="list-img" src={dynamicImage(src)} alt="profile" />
            <div className="list-content">
              <H6>{title}</H6>
              <P>{mail}</P>
              <small className="text-muted">{days}</small>
            </div>
          </div>
        </LI>
      ))}
    </>
  )
}

export default DynamicScrollableLists