import { ChangeEvent, useState } from 'react';
import { H6, P } from '../../../../../AbstractElements'
import { SavedAddress, ShippingInformation, ShippingMethod } from '../../../../../utils/Constant'
import { BillingFormProp } from '../../../../../Types/Forms/FormsLayout/FormWizardOne';
import { toast } from 'react-toastify';
import HomeAndOfficeAddress from './HomeAndOfficeAddress';
import ShippingMethods from './ShippingMethods';

const ShippingFormContent :React.FC<BillingFormProp> = ({ callbackActive }) => {
    const [radioBoxValues, setRadioBoxValues] = useState({address: "",shippingMethod: "",});
    const { address, shippingMethod } = radioBoxValues;
  
    const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name;
      const value = event.target.value;
      setRadioBoxValues({ ...radioBoxValues, [name]: value });
    };
  
    const handleNextButton = () => {
      if (address !== "" && shippingMethod !== "") {
        callbackActive(3);
      } else {
        toast.error("Please fill all field after press next button");
      }
    };
  return (
    <>
      <H6>{ShippingInformation}</H6>
      <P className="f-light">Fill up the following information to send you the order</P>
      <div className="shipping-title">
        <H6 className="mb-2">{SavedAddress}</H6>
      </div>
      <HomeAndOfficeAddress radioBoxValues={radioBoxValues} getUserData={getUserData}/>
      <H6 className="mt-4 mb-2">{ShippingMethod}</H6>
      <ShippingMethods radioBoxValues={radioBoxValues} getUserData={getUserData} handleNextButton={handleNextButton}/>
    </>
  )
}

export default ShippingFormContent