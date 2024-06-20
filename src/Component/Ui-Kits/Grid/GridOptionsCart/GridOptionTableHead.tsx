import { P } from '../../../../AbstractElements'
import { gridOptionHeader } from '../../../../Data/Ui-Kits/Grid/GridData'

const GridOptionTableHead = () => {
  return (
    <thead>
      <tr>
        <th></th>
        <th className="text-center">
          <P>Extra small</P>
          <small>&lt;576px</small>
        </th>
        {gridOptionHeader.map(({ title, small, className }, index) => (
          <th className="text-center" key={index}>
            <P>{title}</P>
            <small className={className ? className : ""}>{small}</small>
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default GridOptionTableHead