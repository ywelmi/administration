import { Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";

const InvoiceBackImage = () => {
  return (
    <td>
      <Image className="banner-image" src={dynamicImage("email-template/invoice-1/1.png")} alt="background"/>
    </td>
  );
};

export default InvoiceBackImage;
