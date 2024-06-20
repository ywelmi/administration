import { Card, CardBody, Col, Input, InputGroup } from "reactstrap";
import { ButtonsWithDropdown, ButtonsWithDropdownTitle } from "../../../../../utils/Constant";
import ButtonDropdownList from "./ButtonDropdownList";
import CommonCardHeader from "../../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { buttonWithDropForth, buttonWithDropOne, buttonWithDropThird, buttonWithDropTwo, buttonWithDropdownData } from "../../../../../Data/Forms/FormsControl/InputGroup/InputGroup";

const ButtonsWithDropdowns = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={ButtonsWithDropdown} span={buttonWithDropdownData}/>
        <CardBody className="main-custom-form card-wrapper input-group-wrapper">
          <InputGroup>
            <ButtonDropdownList color="info" outline={true} title={ButtonsWithDropdownTitle} divider={true} options={buttonWithDropOne}/>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" />
            <ButtonDropdownList color="danger" outline={true} title={ButtonsWithDropdownTitle} divider={true} options={buttonWithDropTwo}/>
          </InputGroup>
          <InputGroup>
            <ButtonDropdownList color="secondary" title={ButtonsWithDropdownTitle} divider={true} options={buttonWithDropThird} />
            <Input type="text" />
            <ButtonDropdownList color="primary" title={ButtonsWithDropdownTitle} divider={true} options={buttonWithDropForth} />
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ButtonsWithDropdowns;
