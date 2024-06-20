import { currentCartFooter } from '../../../../../../Data/Forms/FormsLayout/FormWizardOne/FormWizardOne'

const CurrentCartTableFooter = () => {
  return (
    <tfoot>
      {currentCartFooter.map((data, index) => (
        <tr key={index}>
          <td>{data.footerTittle}</td>
          <td colSpan={2}>${data.price} </td>
        </tr>
      ))}
    </tfoot>
  )
}

export default CurrentCartTableFooter