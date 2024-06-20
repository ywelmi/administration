import { Fragment, useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import { Col } from 'reactstrap';
import CalendarEvents from './CalendarEvents';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction"
import { calenderInitialData } from '../../../../Data/Application/Calendar/Calendar';
import { calenderEventClick } from './CalenderFunction';

const DragCalendar = () => {
  const state = useState(calenderInitialData)[0];
  useEffect(() => {
    let draggableEl = document.getElementById("external-events") as HTMLElement;
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
        };
      },
    });
  }, []);
    return (
      <Fragment>
        <CalendarEvents />
        <Col xl="9" md="8" className="box-col-12">
          <div className="demo-app-calendar" id="mycalendartest">
            <FullCalendar
              initialView="dayGridMonth"
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              rerenderDelay={10}
              eventDurationEditable={false}
              editable={true}
              droppable={true}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              events={state.calendarEvents}
              eventClick={calenderEventClick}
            />
          </div>
        </Col>
      </Fragment>
    )
}

export default DragCalendar