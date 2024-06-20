import { CardHeader } from 'reactstrap'
import { H4 } from '../../../../../AbstractElements'
import { RowsSelectionAndDeletions } from '../../../../../utils/Constant'

const RowSelectionAndDeletionHeader = () => {
  return (
    <CardHeader>
      <H4 className="mb-3">{RowsSelectionAndDeletions}</H4>
      <span>
        It can be useful to provide the user with the option to select rows in a DataTable. This can be done by using a click event to add / remove a class on the table rows. The{" "}
        <code className="api" title="DataTables API method">
          rows().data()
        </code>
        method can then be used to get the data for the selected rows. In this case it is simply counting the number of selected rows, but much more complex interactions can easily be developed.
      </span>
    </CardHeader>
  )
}

export default RowSelectionAndDeletionHeader