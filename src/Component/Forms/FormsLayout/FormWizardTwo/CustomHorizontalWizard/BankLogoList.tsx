import React from 'react'
import { BankLogoListProp } from '../../../../../Types/Forms/FormsLayout/FormsWizardTwo';
import { useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import { Col, FormGroup, Input, Label } from 'reactstrap';
import { H6, Image, LI, UL } from '../../../../../AbstractElements';
import { ChooseBanks } from '../../../../../utils/Constant';
import { dynamicImage } from '../../../../../Service';
import { popularBankList } from '../../../../../Data/Forms/FormsLayout/FormsWizardTwo/FormsWizardTwo';

const BankLogoList :React.FC<BankLogoListProp> = ({ getUserData }) => {
    const { bankDetailsForm } = useAppSelector((state) => state.formWizardTwo);
    const { bankName } = bankDetailsForm;
    
    return (
      <Col xs="12">
        <H6>{ChooseBanks}</H6>
        <div className="bank-selection">
          <FormGroup check className="radio radio-primary ps-0">
            <UL className="radio-wrapper d-flex flex-row mb-3 simple-list">
              {popularBankList.map((data, index) => (
                <LI key={index}>
                  <Input id={data.bankName} type="radio" name="bankName" value={data.bankName} checked={bankName === data.bankName} onChange={getUserData} />
                  <Label className="form-check-label" for={data.bankName} check>
                    <Image src={dynamicImage(`forms/${data.imageName}`)} alt={data.bankName} className='mx-auto' />
                    <span className='text-nowrap'>{data.bankName}</span>
                  </Label>
                </LI>
              ))}
            </UL>
          </FormGroup>
        </div>
      </Col>
    );
  };

export default BankLogoList