import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { LI, UL } from "../../../../../AbstractElements";
import StarredEmailContent from "./StarredEmailContent";
import { Fragment } from "react";
import { TabPane } from "reactstrap";

const StarredContent = () => {
  const { inboxEmail } = useAppSelector((state) => state.letterBox);
  return (
    <TabPane tabId="3" >
      <div className="mail-body-wrapper">
        <UL className="simple-list">
          {inboxEmail.length > 0
            ? inboxEmail.map((data, i) => (
                <Fragment key={i}>
                  {data.star && (
                    <LI className="inbox-data" >
                      <StarredEmailContent data={data} i={i} />
                    </LI>
                  )}
                </Fragment>
              ))
            : "NO Starred Data"}
        </UL>
      </div>
    </TabPane>
  );
};

export default StarredContent;
