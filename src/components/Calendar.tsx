import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import enUS from 'date-fns/locale/en-US'
import { useState } from 'react'
import { format, parse, startOfWeek, getDay, addHours } from 'date-fns'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Checkbox from '@mui/material/Checkbox'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import Box from '@mui/material/Box'

import ShortTimeTasks from '@/components/ShortTimeTasks'

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
    deatline: now,
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

const Row = (props: { longTimeTask: any }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <TableRow key={props.longTimeTask.id}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{props.longTimeTask.name}</TableCell>
        <TableCell>{format(props.longTimeTask.deatline, 'yyyy年MM月dd日')}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {props.longTimeTask.todolist.map((todo: any) => {
                    return (
                      <TableRow key={todo.id}>
                        <TableCell padding="checkbox">
                          <Checkbox color="primary" />
                        </TableCell>
                        <TableCell>{todo.name}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

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
        <TableContainer>
          <Table aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>タスク名</TableCell>
                <TableCell>期限</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {longTimeTasksRes.map((longTimeTask) => (
                <Row key={longTimeTask.id} longTimeTask={longTimeTask} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default MyCalendar
