import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { IconsCommonProps } from "../../../Types/Icons/IconsTypes";
import { H4 } from "../../../AbstractElements";

const FontAwesomeCard: React.FC<IconsCommonProps> = ({
  iconType,
  title,
  parentCallback,
}) => {
  const getITag = (tag: string) => {
    parentCallback(tag);
  };

  return (
    <Card>
      <CardHeader>
        <H4 className="m-b-0">{title}</H4>
      </CardHeader>
      <CardBody>
        <Row className="icon-lists">
          {iconType.map((icon, i) => {
            return (
              <Col sm="6" md="4" xl="3" key={i} onClick={() => getITag(icon)}>
                <i
                  className={`fa ${
                    title === "Spinner Icons" ? "fa-spin" : ""
                  } fa-${icon}`}
                ></i>{" "}
                {"fa fa-"}
                {icon}
              </Col>
            );
          })}
        </Row>
      </CardBody>
    </Card>
  );
};

export default FontAwesomeCard;
