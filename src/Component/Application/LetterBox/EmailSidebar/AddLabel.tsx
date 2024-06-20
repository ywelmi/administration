import { NavItem, NavLink } from "reactstrap";
import { AddLabelHeading } from "../../../../utils/Constant";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setModal } from "../../../../ReduxToolkit/Reducer/LetterBoxSlice";

const AddLabel = () => {
  const {modal} = useAppSelector((state)=>state.letterBox)
  const dispatch = useAppDispatch()
  return (
    <NavItem>
      <NavLink onClick={()=>dispatch(setModal(!modal))}>
        <i className="fa fa-plus" />
        {AddLabelHeading}
      </NavLink>
    </NavItem>
  );
};

export default AddLabel;
