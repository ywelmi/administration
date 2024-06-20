import { H5, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Href, OrderConfirmed, OrderID } from '../../../../../utils/Constant'
import { Link } from 'react-router-dom'

const SubmitShippingForm = () => {
  return (
    <div className="order-confirm">
        <Image src={dynamicImage(`gif/dashboard-8/successful.gif`)} alt="popper"/>
        <H5>{OrderConfirmed}</H5>
        <P className="mb-0">An email with your orders specifics will be sent to you as order confirmation.</P>
        <P className="text-center f-w-500 mt-2">{OrderID}:
          <Link className="text-decoration-underline" to={Href}>GE34598</Link>
        </P>
    </div>
  )
}

export default SubmitShippingForm