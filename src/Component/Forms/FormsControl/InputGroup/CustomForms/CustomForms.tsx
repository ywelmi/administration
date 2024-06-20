import { Card, CardBody, Col, InputGroup, InputGroupText } from "reactstrap";
import { CustomForm, CustomFormSubmit, FavoriteChocolatesTitle, FavoriteColorsTitle, FavoriteThemeTitle, OptionsFormGroup, PixelstrapThemeTitle } from "../../../../../utils/Constant";
import { Btn } from "../../../../../AbstractElements";
import CustomFormSelect from "./CustomFormSelect";
import CommonCardHeader from "../../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { chocolateData, colorData, customFormData, favoriteThemeData, pixelData } from "../../../../../Data/Forms/FormsControl/InputGroup/InputGroup";

const CustomForms = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={CustomForm} span={customFormData} />
        <CardBody className="common-flex main-custom-form">
          <InputGroup>
            <InputGroupText>{OptionsFormGroup}</InputGroupText>
            <CustomFormSelect inputId="inputGroupSelect01" title={PixelstrapThemeTitle} options={pixelData} />
          </InputGroup>
          <InputGroup>
            <CustomFormSelect inputId="inputGroupSelect02" title={FavoriteColorsTitle} options={colorData} />
            <InputGroupText>{OptionsFormGroup}</InputGroupText>
          </InputGroup>
          <InputGroup>
            <Btn color="secondary" outline>
              <i className="icofont icofont-credit-card"></i>
            </Btn>
            <CustomFormSelect inputId="inputGroupSelect03" title={FavoriteChocolatesTitle} options={chocolateData} />
          </InputGroup>
          <InputGroup>
            <CustomFormSelect inputId="inputGroupSelect04" title={FavoriteThemeTitle} options={favoriteThemeData}/>
            <Btn color="secondary" outline> {CustomFormSubmit}</Btn>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomForms;
