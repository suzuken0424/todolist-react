import { useState } from 'react'
import { format } from 'date-fns'

import Checkbox from '@mui/material/Checkbox'
import Collapse from '@mui/material/Collapse'
import Box from '@mui/material/Box'
// table
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
// icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

type Todo = {
  id: number
  name: string
}
type LongTimeTask = {
  id: number
  name: string
  deadline: Date
  todolist: Todo[]
}

const Row = (props: { longTimeTask: LongTimeTask }) => {
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
        <TableCell>{format(props.longTimeTask.deadline, 'yyyy年MM月dd日')}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {props.longTimeTask.todolist.map((todo: Todo) => {
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

const LongTimeTasks = (props: { longTimeTasks: LongTimeTask[] }) => {
  return (
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
          {props.longTimeTasks.map((longTimeTask) => (
            <Row key={longTimeTask.id} longTimeTask={longTimeTask} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LongTimeTasks
