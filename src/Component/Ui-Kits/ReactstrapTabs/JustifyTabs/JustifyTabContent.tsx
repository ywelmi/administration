import { CardBody, TabContent, TabPane } from 'reactstrap'
import { TabContentProp } from '../../../../Types/Ui-Kits/UiKitsTypes'
import { justifyData } from '../../../../Data/Ui-Kits/BootstrapTabs/BootstrapTabs'
import { H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'

const JustifyTabContent:React.FC<TabContentProp> = ({ basicTab }) => {
  return (
    <CardBody className="px-0 pb-0">
      <TabContent activeTab={basicTab}>
        {justifyData.map(({ id, items }, index) => (
          <TabPane tabId={id} key={index}>
            <div className="designer-details">
              {items.map(({ src, title, number }, index) => (
                <div className="designer-profile" key={index}>
                  <div className="designer-wrap">
                    <Image className="designer-img" src={dynamicImage(`${src}`)} alt="profile" />
                    <div className="designer-content">
                      <H6>{title}</H6>
                      <P> {number}</P>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
        ))}
      </TabContent>
    </CardBody>
  )
}

export default JustifyTabContent