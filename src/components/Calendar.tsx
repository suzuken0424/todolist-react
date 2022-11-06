import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)
const myEventsList = [
  {
    id: 0,
    title: 'My event',
    start: new Date(),
    end: new Date()
  }
]

const MyCalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      defaultView='day'
      toolbar={false}
      style={{ height: 500, width: 200 }}
      selectable={true}
    />
  </div>
)

export default MyCalendar
