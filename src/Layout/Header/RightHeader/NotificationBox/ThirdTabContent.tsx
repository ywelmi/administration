import { Btn, FeatherIcons, H6, Image, LI, UL } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import { Href, OrderTotal } from "../../../../utils/Constant";
import { Input, InputGroup } from "reactstrap";
import { cartData } from "../../../../Data/Layout/Header";
import { dynamicImage } from "../../../../Service";

const ThirdTabContent = () => {
  return (
    <div className="cart-dropdown mt-4">
        <UL className="simple-list">
            {cartData.map((data,i)=>(
                <LI className="pr-0 pl-0 pb-3" key={i}>
                    <div className="media">
                        <Image className="img-fluid b-r-5 me-3 img-60" src={dynamicImage(`other-images/${data.image}`)} alt="cart" />
                        <div className="media-body">
                            <Link className="f-light f-w-500" to={`${process.env.PUBLIC_URL}/ecommerce/products`}> {data.title} </Link>
                            <div className="qty-box">
                                <InputGroup>
                                    <span className="input-group-prepend">
                                        <Btn className="quantity-left-minus"> - </Btn>
                                    </span>
                                    <Input className="input-number" type="text" name="quantity" defaultValue={1}/>
                                    <span className="input-group-prepend">
                                        <Btn className="quantity-right-plus" >+</Btn>
                                    </span>
                                </InputGroup>
                            </div>
                            <H6 className="font-primary">${data.amount}</H6>
                        </div>
                        <div className="close-circle">
                            <Link className="bg-danger" to={Href}>
                                <FeatherIcons iconName="X" />
                            </Link>
                        </div>
                    </div>
                </LI>
            ))}
            <LI className="mb-3 total">
                <Link to={Href}>
                    <H6 className="mb-0">
                        {OrderTotal} : <span className="f-right">$1195.00</span>
                    </H6>
                </Link>
            </LI>
        </UL>
    </div>
  );
};

export default ThirdTabContent;