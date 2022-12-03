import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import React, { useState } from 'react'
import { parse } from 'date-fns'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

type Events = {
  title: string
  start: Date
  end: Date
}

const resEvents = [
  {
    title: 'event1',
    start: '2022-12-03 09:00:00',
    end: '2022-12-03 10:00:00'
  }
]

const parseEvents = resEvents.map((event) => {
  return {
    title: event.title,
    start: parse(event.start, 'yyyy-MM-dd HH:mm:ss', new Date()),
    end: parse(event.end, 'yyyy-MM-dd HH:mm:ss', new Date())
  }
})

const MyCalendar = () => {
  const [events, setEvents] = useState<Events[]>(parseEvents)
  const newEvent = () => {
    setEvents([
      ...events,
      {
        title: 'Hello React',
        start: new Date(2022, 11, 18, 8),
        end: new Date(2022, 11, 18, 11)
      }
    ])
  }

  return (
    <div>
      <div></div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="day"
        onSelectSlot={newEvent}
        selectable
        toolbar={false}
        style={{ height: 500, width: 200 }}
      />
    </div>
  )
}

export default MyCalendar
