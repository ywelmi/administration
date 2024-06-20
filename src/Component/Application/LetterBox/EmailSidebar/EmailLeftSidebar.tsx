import { Card, CardBody } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { ComposeEmail } from "../../../../utils/Constant";
import EmailNavMenu from "./EmailNavMenu";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { LetterBoxNavType } from "../../../../Types/Application/LetterBox/LetterBox";
import { setComposeEmail } from "../../../../ReduxToolkit/Reducer/LetterBoxSlice";

const EmailLeftSidebar: React.FC<LetterBoxNavType> = ({ navId, setNavId }) => {
  const {composeEmail} = useAppSelector((state)=>state.letterBox)
  const dispatch = useAppDispatch()
  return (
    <div className="email-left-aside">
      <Card>
        <CardBody>
          <div className="email-app-sidebar">
            <Btn color="primary" className="emailbox" onClick={()=>dispatch(setComposeEmail(!composeEmail))} >
              <i className="fa fa-plus" />
              {ComposeEmail}
            </Btn>
            <EmailNavMenu navId={navId} setNavId={setNavId}/>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EmailLeftSidebar;
