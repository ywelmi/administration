import { CardBody } from "reactstrap";
import { Href } from "../../../../utils/Constant";
import { CommonTagCardBodyType } from "../../../../Types/Ui-Kits/UiKitsTypes";
import { Link } from "react-router-dom";
import { Badges } from "../../../../AbstractElements";

const CommonTagAndPillsCardBody:React.FC<CommonTagCardBodyType> = ({ data, number,pill } ) => {
  return (
    <CardBody>
      <div className="badge-spacing">
        <>
          {data &&
            data.map(({ className, text}, index) => (
              <Badges pill={pill} color={text} className={`text-capitalize ${className}`} key={index}>
                {text}
              </Badges>
            ))}
          {number &&
            number.map(({ className, text,icon }, index) => (
              <Link to={Href} className={`badge ${className}`} key={index}>
                {text && text} {icon && icon}
              </Link>
            ))}
        </>
      </div>
    </CardBody>
  );
};

export default CommonTagAndPillsCardBody;