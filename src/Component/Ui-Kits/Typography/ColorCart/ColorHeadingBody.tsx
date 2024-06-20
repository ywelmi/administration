import { CardBody, Table } from 'reactstrap'
import { Code, Heading } from '../../../../utils/Constant'
import ColorHeadingTableBody from './ColorHeadingTableBody'

const ColorHeadingBody = () => {
  return (
    <CardBody>
      <div className="theme-scrollbar">
        <Table responsive className="mb-0 typography-table">
          <thead>
            <tr>
              <th className="pt-0">{Code}</th>
              <th className="pt-0">{Heading}</th>
            </tr>
          </thead>
          <ColorHeadingTableBody />
        </Table>
      </div>
    </CardBody>
  )
}

export default ColorHeadingBody