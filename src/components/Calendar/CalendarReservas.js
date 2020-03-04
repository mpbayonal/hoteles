import React from 'react'
import {Calendar, momentLocalizer, Views} from 'react-big-calendar'
import events from './events'
import ExampleControlSlot from './ExampleControlSlot'
import moment from "moment";
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'

require('globalize/lib/cultures/globalize.culture.es')

const propTypes = {}

const DragAndDropCalendar = withDragAndDrop(Calendar)

class CalendarReservas extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      culture: 'es',
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, "days")),
          title: "Some title"
        }
      ]
    }

    this.moveEvent = this.moveEvent.bind(this)



  };

  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    const { events } = this.state

    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
          ? { ...existingEvent, start, end }
          : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  handleSelect = ({ start, end }) => {
    const title = "Nueva Reserva"
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }

  render() {


    const localizer = momentLocalizer(moment)

    return (
      <div>

        <DragAndDropCalendar
          selectable
          popup
          localizer={localizer}
          events={this.state.events}

          style={{ height: 500 }}
          defaultView={Views.MONTH}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={event => alert(event.title)}
          onEventDrop={this.moveEvent}
          resizable
          onSelectSlot={this.handleSelect}
          onEventResize={this.resizeEvent}
          onDragStart={console.log}
          culture={'es'}
        />
      </div>
    )
  }

}

CalendarReservas.propTypes = propTypes

export default CalendarReservas
