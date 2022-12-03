import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import enUS from 'date-fns/locale/en-US'
import { useState } from 'react'
import { format, parse, startOfWeek, getDay, addHours } from 'date-fns'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

// todo（aliasを使うとエラーにはならないが、コード上ではワーニングが出てしまう）
import ShortTimeTasks from './ShortTimeTasks'
import LongTimeTasks from './LongTimeTasks'

type Event = {
  title: string
  start: Date
  end: Date
}
const now = new Date()

const eventsRes = [...Array(5)].map((_, i) => {
  return { title: 'event' + i, start: addHours(now, i + 1), end: addHours(now, i + 2) }
})
const shortTimeTasksRes = [...Array(5)].map((_, i) => {
  return {
    id: i,
    name: 'task' + i
  }
})
const longTimeTasksRes = [...Array(5)].map((_, i) => {
  return {
    id: i,
    name: 'task' + i,
    deadline: now,
    todolist: [...Array(5)].map((_, j) => {
      return {
        id: i * 10 + j,
        name: 'todo' + i + j
      }
    })
  }
})

const locales = {
  'en-US': enUS
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const today = format(now, 'yyyy年MM月dd日')

const MyCalendar = () => {
  const [events, setEvents] = useState<Event[]>([])

  const newEvent = () => {
    setEvents([
      ...events,
      {
        title: 'event1',
        start: now,
        end: now
      }
    ])
  }

  return (
    <div>
      <p>{today}</p>
      <div>
        <p>今日の予定</p>
        <Calendar
          localizer={localizer}
          events={eventsRes}
          startAccessor="start"
          endAccessor="end"
          defaultView="day"
          selectable
          onSelectSlot={newEvent}
          toolbar={false}
          style={{ height: 500, width: 300 }}
        />
      </div>
      <div>
        <p>今日の実績</p>
      </div>
      <div>
        <p>隙間タスク</p>
        <ShortTimeTasks shortTimeTasks={shortTimeTasksRes} />
      </div>
      <div>
        <p>じっくりタスク</p>
        <LongTimeTasks longTimeTasks={longTimeTasksRes} />
      </div>
    </div>
  )
}

export default MyCalendar
