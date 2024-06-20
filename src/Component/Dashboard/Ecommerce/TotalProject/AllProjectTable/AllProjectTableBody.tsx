import { allProjectTableBodyData } from "../../../../../Data/Dashboard/Ecommerce/Ecommerce";
import ProjectComment from "./ProjectComment";
import ProjectUserName from "./ProjectUserName";
import ProjectDate from "./ProjectDate";
import ProjectAssigned from "./ProjectAssigned";
import ProjectStatus from "./ProjectStatus";
import ProjectDropdown from "./ProjectDropdown";

const AllProjectTableBody = () => {
  return (
    <tbody>
      {allProjectTableBodyData.map((data, i) => (
        <tr key={i}>
          <td>
            <ProjectComment data={data} />
          </td>
          <td>
            <ProjectUserName data={data} />
          </td>
          <td>
            <ProjectDate data={data} />
          </td>
          <td>
            <ProjectAssigned data={data} />
          </td>
          <td>
            <ProjectStatus data={data} />
          </td>
          <td>
            <ProjectDropdown />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AllProjectTableBody;
