import { classPrefixData, containerWidth, restGrid } from '../../../../Data/Ui-Kits/Grid/GridData'
import { ClassPrefix, CollapsedBreakpoints, GridBehavior, HorizontalAllTimes, MaxContainerWidth } from '../../../../utils/Constant'

const GridOptionTableBody = () => {
  return (
    <tbody>
      <tr>
        <th className="text-nowrap" scope="row">{GridBehavior}</th>
        <td>{HorizontalAllTimes}</td>
        <td colSpan={5}>{CollapsedBreakpoints}</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">{MaxContainerWidth}</th>
        {containerWidth.map((item, index) => (
          <td key={index}>{item}</td>
        ))}
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">{ClassPrefix}</th>
        {classPrefixData.map((item, index) => (
          <td key={index}><code>{item}</code></td>
        ))}
      </tr>
      {restGrid.map(({ title, td }, index) => (
        <tr key={index}>
          <th className="text-nowrap" scope="row">{title}</th>
          <td colSpan={6}>{td}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default GridOptionTableBody