import { TabContent, TabPane } from 'reactstrap'
import { Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { TabContentProp } from '../../../../Types/Ui-Kits/UiKitsTypes'

const SimpleTabContent: React.FC<TabContentProp> = ({ basicTab }) => {
  return (
    <TabContent activeTab={basicTab}>
      <TabPane tabId="1">
        <P className="pt-3">Tabs have long been used to show alternative views of the same group of information tabs in software. Known as<em className="txt-danger"> “module tabs”</em>, these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.</P>
      </TabPane>
      <TabPane tabId="2">
        <div className="pt-3 mb-0">
          <div className="flex-space flex-wrap align-items-center">
            <Image className="tab-img" src={dynamicImage(`avtar/3.jpg`)} alt="profile" />
            <UL className="d-flex flex-column gap-1 simple-list">
              <LI> <strong>Visit Us:</strong> 2600 Hollywood Blvd,Florida, United States-33020</LI>
              <LI> <strong>Mail Us:</strong> contact@us@gmail.com</LI>
              <LI><strong>Contact Number: </strong> (954) 357-7760</LI>
            </UL>
          </div>
        </div>
      </TabPane>
      <TabPane tabId="3">
        <UL className="pt-3 d-flex flex-column gap-1 simple-list">
          <LI>Us Technology offers web &amp; mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them.</LI>
          <LI> <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States-	33020</LI>
          <LI> <strong>Mail Us:</strong> contact@us@gmail.com</LI>
          <LI> <strong>Contact Number: </strong> (954) 357-7760</LI>
        </UL>
      </TabPane>
    </TabContent>
  )
}

export default SimpleTabContent