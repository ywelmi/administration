import { CardFooter, Table } from "reactstrap";
import { GridCommonCardFooterType } from "../../../../Types/Ui-Kits/UiKitsTypes";
import { Class, ValueOfClass } from "../../../../utils/Constant";

const GridCommonCardFooter:React.FC<GridCommonCardFooterType> = ({ className, valueClass }) => {
  return (
    <CardFooter>
      <div className="theme-scrollbar">
        <Table className="w-100" responsive>
          <tbody>
            <tr>
              <th>{Class}</th>
              <th>{ValueOfClass}</th>
            </tr>
            <tr>
              <td><code>{className}</code></td>
              <td>{valueClass}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </CardFooter>
  );
};

export default GridCommonCardFooter;