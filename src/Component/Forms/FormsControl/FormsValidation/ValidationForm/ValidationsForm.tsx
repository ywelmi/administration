import { ErrorMessage, Field, Form } from 'formik'
import { Col, FormFeedback, FormGroup, Label, Row } from 'reactstrap'
import { Btn, H6 } from '../../../../../AbstractElements'
import { AgreeCondition, ChooseFiles, City, Description, FirstName, LooksGood, MarkFirstNamePlaceholder, PasswordValidation, PayMethodTitle, SelectThemeTitle, State, SubmitButton, TextAreaPlaceHolder, Zip } from '../../../../../utils/Constant'
import { validationFormStateList, validationRadioList, validationStateList } from '../../../../../Data/Forms/FormsControl/FormsValidation/FormsValidation'
import { FormValidationsProp } from '../../../../../Types/Forms/FormsControl/FormValidation/FormValidation'

const FormValidations: React.FC<FormValidationsProp> = ({ errors, submitErrors, setSubmitError }) => {
  return (
    <Form className="custom-input">
      <Row>
        <Col sm="12">
          <FormGroup>
            <Label check>{FirstName}</Label>
            <Field name="firstname" type="text" className={`form-control ${submitErrors && `${errors.firstname ? "is-invalid" : "is-valid"}`}`} placeholder={MarkFirstNamePlaceholder} />
            <ErrorMessage name="firstname" component="span" className="invalid-feedback" />
            <FormFeedback valid>{LooksGood}</FormFeedback>
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label check>{PasswordValidation}</Label>
            <Field name="password" type="text" className={`form-control ${submitErrors && `${errors.password ? "is-invalid" : "is-valid"}`}`} />
            <ErrorMessage name="password" component="span" className="invalid-feedback" />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label check>{State}</Label>
            <Field name="state" as="select" className={`form-control ${submitErrors && `${errors.state ? "is-invalid" : "is-valid"}`}`}>
              {validationFormStateList.map((item, index) => (<option value={item} key={index}>{item}</option>))}
            </Field>
            <ErrorMessage name="state" component="span" className="invalid-feedback" />
            <FormFeedback valid>{LooksGood}</FormFeedback>
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label check>{City}</Label>
            <Field name="city" type="text" className={`form-control ${submitErrors && `${errors.city ? "is-invalid" : "is-valid"}`}`} />
            <ErrorMessage name="city" component="span" className="invalid-feedback"></ErrorMessage>
            <FormFeedback valid>{LooksGood}</FormFeedback>
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label check>{Zip}</Label>
            <Field name="zip" type="text" className={`form-control ${submitErrors && `${errors.zip ? "is-invalid" : "is-valid"}`}`} />
            <ErrorMessage name="zip" component="span" className="invalid-feedback"></ErrorMessage>
            <FormFeedback valid>{LooksGood}</FormFeedback>
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <div className="card-wrapper border rounded-3 checkbox-checked">
              <H6 className="sub-title">{PayMethodTitle}</H6>
              <div className="radio-form">
                {validationRadioList.map(({ id, text }, index) => (
                  <FormGroup check key={index}>
                    <Field className="form-check-input" id={`validationFormCheck${id}`} type="radio" name="payment" value={text} />
                    <Label for={`validationFormCheck${id}`} className={`${submitErrors && ` ${errors.payment ? "text-danger" : "text-success"}`}`} check>{text}</Label>
                  </FormGroup>
                ))}
              </div>
            </div>
          </FormGroup>
        </Col>
        <Col sm="12">
          {/* <FormGroup>
            <Field as="select" name="theme" className={'form-select'} className={ `${submitErrors && `${errors.theme ? "is-invalid" : "is-valid"}`}`}>
              <option defaultValue="">{SelectThemeTitle}</option>
              {validationStateList.map((item, index) => (<option value={item} key={index}>{item}</option>))}
            </Field>
            <ErrorMessage name="theme" component="span" className="invalid-feedback" />
          </FormGroup> */}
          <FormGroup>
            <Field as="select" name="theme" className={`form-select ${submitErrors && `${errors.theme ? "is-invalid" : "is-valid"}`}`} >
              <option defaultValue="">{SelectThemeTitle}</option>
              {validationStateList.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option> 
              ))}
            </Field>
            <ErrorMessage name="theme" component="span" className="invalid-feedback" />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label check>{ChooseFiles}</Label>
            <Field name="file" className={`form-control ${submitErrors && `${errors.file ? "is-invalid" : "is-valid"}`}`} type="file" />
            <ErrorMessage name="file" component="span" className="invalid-feedback"></ErrorMessage>
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label check>{Description}</Label>
            <Field as="textarea" name="description" className={`form-control ${submitErrors && `${errors.description ? "is-invalid" : "is-valid"}`}`} placeholder={TextAreaPlaceHolder}></Field>
            <ErrorMessage name="description" className="invalid-feedback" component="span" />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup check>
            <Field name="terms" className={`form-check-input ${submitErrors && ` ${errors.terms ? "text-danger" : "text-success"}`}`} id="invalidCheck" type="checkbox" value="Agree to terms and conditions" />
            <Label for='invalidCheck' className={`${submitErrors && ` ${errors.terms ? "text-danger" : "text-success"}`}`} check>{AgreeCondition}</Label>
          </FormGroup>
        </Col>
        <Col sm="12">
          <Btn color="primary" type="submit" onClick={() => setSubmitError(true)}>{SubmitButton}</Btn>
        </Col>
      </Row>
    </Form>
    )
}
export default FormValidations