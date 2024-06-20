import { CardBody, Table } from "reactstrap";
import { Code, FontSize, Heading } from "../../../../utils/Constant";
import HeadingsTableBody from "./HeadingsTableBody";

const HeadingsBody = () => {
  return (
    <CardBody>
      <div className="theme-scrollbar">
        <Table responsive className="mb-0 typography-table">
          <thead>
            <tr>
              <th className="pt-0">{Code}</th>
              <th className="pt-0">{FontSize}</th>
              <th className="pt-0">{Heading}</th>
            </tr>
          </thead>
          <HeadingsTableBody />
        </Table>
      </div>
    </CardBody>
  );
};

export default HeadingsBody;
