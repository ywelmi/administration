import { CardHeader } from "reactstrap";
import CardHeaderDropDown from "./CardHeaderDropDown";
import { H4 } from "../../../AbstractElements";
import { PropsTypes } from "../../../Types/Widgets/CommonCardHeaderType";
const CommonCardHeader = ({
  headClass,
  title,
  titleClass,
  mainTitle,
  firstItem,
  secondItem,
  thirdItem,
  subClass,
}: PropsTypes) => {
  return (
    <CardHeader className={headClass}>
      <div className={`header-top ${subClass}`}>
        <H4 className={titleClass}>{title}</H4>
        {mainTitle && (
          <div className="card-header-right-icon">
            <CardHeaderDropDown
              firstItem={firstItem}
              secondItem={secondItem}
              thirdItem={thirdItem}
              mainTitle={mainTitle}
            ></CardHeaderDropDown>
          </div>
        )}
      </div>
    </CardHeader>
  );
};

export default CommonCardHeader;
