import { Col, Input, Label } from 'reactstrap'
import { Btn, H4, P } from '../../../../AbstractElements'
import { CalendarFilter, DraggableEvents, Href, RemoveAfterDrop } from '../../../../utils/Constant'
import { calenderInitialData } from '../../../../Data/Application/Calendar/Calendar'
import { useState } from 'react'

const CalendarEvents = () => {
  const [openCalender, setOpenCalender] = useState(false);
  return (
    <Col xxl="3" className="box-col-12">
      <div className="md-sidebar mb-3">
        <Btn tag="a" color="primary" className="md-sidebar-toggle" href={Href} onClick={() => setOpenCalender(!openCalender)}>{CalendarFilter}</Btn>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${openCalender ? "open" : ""}`}>
        <div id="external-events" className="calendar-default">
          <H4>{DraggableEvents}</H4>
          <div className="external-events-list">
            {calenderInitialData.events.map((event, index) => (
              <div className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event p-md-3 p-2 text-sm mb-3 border-0 ${event.className}`} title={event.title} key={index}>
                <div className="fc-event-main">
                  <i className={`me-2 ${event.icon}`}></i>
                  {event.title}
                </div>
              </div>
            ))}
          </div>
          <P>
            <Input className="checkbox_animated" id="drop-remove" type="checkbox" />
            <Label for="drop-remove" className="m-0">{RemoveAfterDrop}</Label>
          </P>
        </div>
        </div>
      </div>
    </Col>
  )
}

export default CalendarEvents