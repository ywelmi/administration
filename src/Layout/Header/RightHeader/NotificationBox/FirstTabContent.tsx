import { Btn, FeatherIcons, H6, Image, LI, SVG, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { Href } from "../../../../utils/Constant";
import { Input, InputGroup } from "reactstrap";
import { userNotification } from "../../../../Data/Layout/Header";

const FirstTabContent = () => {
  return (
    <div className="user-message">
      <div className="cart-dropdown notification-all">
        <UL className="simple-list">
          <LI className="pr-0 pl-0 pb-3 pt-3">
            <div className="media">
              <Image className="img-fluid b-r-5 me-3 img-60" src={dynamicImage("other-images/receiver-img.jpg")} alt="receiver"/>
              <div className="media-body">
                <Link className="f-light f-w-500" to={`${process.env.PUBLIC_URL}/ecommerce/products`}>Men Blue T-Shirt</Link>
                <div className="qty-box">
                  <InputGroup>
                    <span className="input-group-prepend">
                      <Btn className="quantity-left-minus"> - </Btn>
                    </span>
                    <Input className="input-number" type="text" name="quantity" defaultValue={1} />
                    <span className="input-group-prepend">
                      <Btn className="quantity-right-plus"> + </Btn>
                    </span>
                  </InputGroup>
                </div>
                <H6 className="font-primary">$695.00</H6>
              </div>
              <div className="close-circle">
                <Link className="bg-danger" to={Href}>
                  <FeatherIcons iconName="X" />
                </Link>
              </div>
            </div>
          </LI>
        </UL>
      </div>
      <UL className="simple-list">
        {userNotification.map((data,i)=>(
          <LI key={i}>
            <div className="user-alerts">
              <Image className="user-image rounded-circle img-fluid me-2" src={dynamicImage(`dashboard/user/${data.image}`)} alt="user"/>
              <div className="user-name">
                <div>
                  <H6>
                    <Link className="f-w-500 f-14" to={`${process.env.PUBLIC_URL}/users/userprofile`} >{data.name}</Link>
                  </H6>
                  <span className="f-light f-w-500 f-12">
                    {data.detail}
                  </span>
                </div>
                <div>
                  <SVG iconId="more-vertical" />
                </div>
              </div>
            </div>
          </LI>
        ))}
      </UL>
    </div>
  );
};

export default FirstTabContent;
