import { useAppDispatch, useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import { FormGroup, Input, Label } from 'reactstrap';
import { LI, UL } from '../../../../../AbstractElements';
import { modalOneDatas } from '../../../../../Data/Forms/FormsLayout/TwoFactor/TwoFactor';
import { getValue } from '../../../../../ReduxToolkit/Reducer/TwoFactorSlice';

const ModalOneData = () => {
  const { selectAuthenticatorMethodName } = useAppSelector((state) => state.twoFactor);
  const dispatch = useAppDispatch();

  return (
    <div className="authentication-options">
      <FormGroup check className="radio radio-primary ps-0">
        <UL className="radio-wrapper simple-list">
          {modalOneDatas.map((data, index) => (
            <LI key={index}>
              <Input onChange={(e) => dispatch(getValue(e.target.value))} id={data.tittle} type="radio" name="selectAuthenticatorMethodName" checked={selectAuthenticatorMethodName === data.tittle} value={data.tittle} />
              <Label className="form-check-label mb-0" for={data.tittle}>
                <i className={`fa ${data.iconClassName}`} />
                <span className="d-flex flex-column">
                  <span>{data.tittle}</span>
                  <span>{data.description}</span>
                </span>
              </Label>
            </LI>
          ))}
        </UL>
      </FormGroup>
    </div>
  );
}

export default ModalOneData