import { Label, ListGroup, ListGroupItem } from 'reactstrap'
import { Href } from '../../../../utils/Constant'
import { H6, H5, Image, LI, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'

const InterviewHoveringTimeline = () => {
  return (
    <LI className="timeline-event">
      <Label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <P className="timeline-thumbnail">March 2022 - Fresher Interview</P>
        <H5 className="f-w-500">{"Offeror Company"}</H5>
        <div className="text-muted">
          A fresher's interview is to be conducted
          <ListGroup className="main-lists-content">
            <ListGroupItem href={Href} className="list-group-item-action border-0 p-0 mb-4">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div className="list-wrapper">
                  <Image className="list-img" src={dynamicImage(`user/1.jpg`)} alt="profile" />
                  <div className="list-content">
                    <H6>{"Molly Boake"}</H6>
                    <P>MollyBoake@rhyta.com</P>
                  </div>
                </div>
                <div className="timeline-icon">
                  <i className="icon-facebook" />
                  <i className="icon-google"> </i>
                  <i className="icon-twitter-alt" />
                </div>
              </div>
              <P className="mb-1">Next step is to choose a tone of voice for your content type.</P>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </LI>
  )
}

export default InterviewHoveringTimeline