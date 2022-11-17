import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)
const myEventsList = [
  {
    id: 0,
    title: 'aaa',
    start: moment({ hours: 8 }).toDate(),
    end: moment({ hours: 9 }).toDate()
  }
]

const handleSelectSlot = () => {
  console.log(22222)
  myEventsList.push({
    id: 1,
    title: 'test',
    start: moment({ hours: 10 }).toDate(),
    end: moment({ hours: 11 }).toDate()
  })
}

const MyCalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      defaultView="day"
      onSelectSlot={handleSelectSlot}
      selectable
      toolbar={false}
      style={{ height: 500, width: 200 }}
    />
  </div>
)

export default MyCalendar
