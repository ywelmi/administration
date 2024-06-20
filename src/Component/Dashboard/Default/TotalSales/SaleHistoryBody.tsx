import { LI, UL } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import { saleHistoryBodyData } from "../../../../Data/Dashboard/Default";

const SaleHistoryBody = () => {
  return (
    <UL className="simple-list">
        {saleHistoryBodyData.map((data,i)=>(
            <LI className="sale-history-card" key={i}>
                <div className="history-price">
                    <Link className="f-w-500 f-14  mb-0" to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                        {data.title}
                    </Link>
                    <span className="mb-0 txt-primary f-w-600 f-16">{data.amount}</span>
                </div>
                <div className="state-time">
                    <span className="f-w-500 f-14 f-light mb-0">{data.state}</span>
                    <span className="f-w-400 f-14 f-light">{data.time}</span>
                </div>
            </LI> 
        ))}
    </UL>
  );
};

export default SaleHistoryBody;
