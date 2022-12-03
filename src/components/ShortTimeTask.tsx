import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Checkbox from '@mui/material/Checkbox'

type ShortTimeTask = {
  id: number
  name: string
}

const ShortTimeTask = (shortTimeTasks: ShortTimeTask[]) => {
  return (
    <>
      <TableContainer>
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox color="primary" />
              </TableCell>
              <TableCell>タスク名</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shortTimeTasks.map((shortTimeTask: ShortTimeTask) => {
              return (
                <TableRow key={shortTimeTask.id}>
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" />
                  </TableCell>
                  <TableCell>{shortTimeTask.name}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ShortTimeTask
