import { Link } from "react-router-dom";
import { Badges, Image, LI } from "../../../../AbstractElements";
import { Href } from "../../../../utils/Constant";
import { topProductBodyData } from "../../../../Data/Dashboard/OnlineCourse";
import { dynamicImage } from "../../../../Service";

const TopProductBody = () => {
  return (
    <>
      {topProductBodyData.map((data, i) => (
        <LI className="d-flex top-product gap-2" key={i}>
          <div>
            <Image className="img-fluid product-img" src={dynamicImage(`dashboard-3/product/${data.image}`)} alt="product" />
          </div>
          <div className="w-100 d-flex justify-content-between align-items-center">
            <div className="product-details">
              <div>
                <Badges pill color="light" className="text-dark">{data.badge}</Badges>
              </div>
              <Link className="f-10 f-w-500  line-clamp" to={`${process.env.PUBLIC_URL}/ecommerce/products`}>{data.title}</Link>
              <span className="f-10 f-w-500 txt-primary">{data.amount}</span>
            </div>
            <div className="product-items">
              {data.quantity.map((item,i)=>(
                <div className="common-space gap-1" key={i}>
                  <span className="f-10 f-w-500 f-light">{item.subTitle} :</span>
                  <span className="f-10 f-w-500">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </LI>
      ))}
    </>
  );
};

export default TopProductBody;