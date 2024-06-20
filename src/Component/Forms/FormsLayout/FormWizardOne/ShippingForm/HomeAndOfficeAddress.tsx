import { Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { homeAndOfficeData } from '../../../../../Data/Forms/FormsLayout/FormWizardOne/FormWizardOne'
import { H6 } from '../../../../../AbstractElements'
import { ShippingInformationCommonProps } from '../../../../../Types/Forms/FormsLayout/FormWizardOne';

const HomeAndOfficeAddress :React.FC<ShippingInformationCommonProps> = ({radioBoxValues,getUserData,}) => {
  const { address } = radioBoxValues;
  return (
    <Row className="g-3">
      {homeAndOfficeData.map((data, index) => (
        <Col xxl="4" sm="6" key={index}>
          <div className="card-wrapper border rounded-3 h-100 light-card">
            <div className="collect-address">
              <div className="d-flex gap-2 align-items-center">
                <FormGroup check className="radio radio-primary">
                  <Input id={data.value} type="radio" name="address" value={data.value} checked={address === data.value} onChange={getUserData}/>
                  <Label className="form-check-label mb-0" for={data.value}>{data.label}</Label>
                </FormGroup>
              </div>
              <div className="card-icon">
                <i className="fa fa-pencil" />
                <i className="fa fa-trash-o" />
              </div>
            </div>
            <div className="shipping-address">
              <H6>{data.name}</H6>
              <span>Address: {data.address}</span>
              <span>Contact: {data.contact}</span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default HomeAndOfficeAddress