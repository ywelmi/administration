import { Link } from 'react-router-dom'
import { addProjectsAndUploadData } from '../../../../../Data/Application/Users/UsersProfile/UsersProfile'
import { Delete, Edit, Href, Update } from '../../../../../utils/Constant'
import { Btn } from '../../../../../AbstractElements'

const AddProjectsAndUploadTableBody = () => {
  return (
    <tbody>
      {addProjectsAndUploadData.map((data, index) => (
        <tr key={index}>
          <td>
            <Link className="text-inherit" to={Href}>
              {'Untrammelled Prevents'}
            </Link>
          </td>
          <td>{data.date}</td>
          <td>
            <span className={`status-icon ${data.statusClass}`} /> {data.status}
          </td>
          <td>{data.price}</td>
          <td className="text-end">
            <Btn size='sm' color='primary' href={Href}>
              <i className="fa fa-pencil" /> {Edit}
            </Btn>
            <Btn size='sm' color='transparent' href={Href}>
              <i className="fa fa-link" /> {Update}
            </Btn>
            <Btn size='sm' color='danger' href={Href}>
              <i className="fa fa-trash" /> {Delete}
            </Btn>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

export default AddProjectsAndUploadTableBody