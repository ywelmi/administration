import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href, Next, Previous } from "../../../../../utils/Constant";
import { sizingPaginationDataList } from "../../../../../Data/BonusUi/Pagination/Pagination";

const DynamicPaginationSizing = () => {
  return (
    <>
      {sizingPaginationDataList.map(({ className, size }, index) => (
        <Pagination size={size} className={`pagination-info pagin-border-info ${className}`} key={index} >
          <PaginationItem>
            <PaginationLink href={Href} previous>
              {Previous}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={Href}>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={Href}>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={Href}>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={Href} next>
              {Next}
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      ))}
    </>
  );
};

export default DynamicPaginationSizing;
