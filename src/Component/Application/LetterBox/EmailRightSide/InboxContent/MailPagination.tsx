import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href } from "../../../../../utils/Constant";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setPage } from "../../../../../ReduxToolkit/Reducer/LetterBoxSlice";

const MailPagination = () => {
  const {page} = useAppSelector((state)=> state.letterBox)
  const dispatch = useAppDispatch()
  const handlePagination = (value:boolean) => {
    dispatch(setPage(value))
  }
  return (
    <Pagination className="mail-pagination pagination-primary">
      <PaginationItem >
        <PaginationLink href={Href} previous/>
      </PaginationItem>
      <PaginationItem active={!page ? true : false} onClick={()=>handlePagination(false)}>
        <PaginationLink href={Href}>1</PaginationLink>
      </PaginationItem>
      <PaginationItem active={page ? true : false} onClick={()=>handlePagination(true)}>
        <PaginationLink href={Href}>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={Href} next />
      </PaginationItem>
    </Pagination>
  );
};

export default MailPagination;
