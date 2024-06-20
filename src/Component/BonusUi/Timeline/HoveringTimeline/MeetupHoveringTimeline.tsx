import { H5, H6, Image, LI, P } from '../../../../AbstractElements'
import { Label } from 'reactstrap'
import { meetupHoveringList } from '../../../../Data/BonusUi/Timeline/Timeline'
import { dynamicImage } from '../../../../Service'
import { USMeeting } from '../../../../utils/Constant'

const MeetupHoveringTimeline = () => {
  return (
    <LI className="timeline-event">
      <Label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <P className="timeline-thumbnail">December 2024 - Meetup</P>
        <H5 className="f-w-500">{USMeeting}</H5>
        <div className="text-muted">
          2209 Leverton Cove RoadSpringfield, MA 01109
          <div className="designer-details">
            {meetupHoveringList.map(({ image, name, number }, index) => (
              <div className="designer-profile" key={index}>
                <div className="designer-wrap">
                  <Image className="designer-img" src={dynamicImage(image)} alt="profile" />
                  <div className="designer-content">
                    <H6>{name}</H6>
                    <P>{number}</P>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LI>
  )
}

export default MeetupHoveringTimeline