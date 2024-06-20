import { customList } from '../../../../Data/Ui-Kits/Lists/Lists'
import { Href } from '../../../../utils/Constant'
import { H6, Image, LI, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'

const DynamicCustomContentList = () => {
  return (
    <>
      {customList.map(({ src, title, mail, days, text, smallText }, index) => (
        <LI href={Href} className="list-group-item-action list-hover-primary" key={index}>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="list-wrapper">
              <Image className="list-img" src={dynamicImage(src)} alt="profile" />
              <div className="list-content">
                <H6>{title}</H6>
                <P>{mail}</P>
              </div>
            </div>
            <small>{days}</small>
          </div>
          <P className="mb-1">{text}</P>
          <small className="text-black">{smallText}</small>
        </LI>
      ))}
    </>
  )
}

export default DynamicCustomContentList