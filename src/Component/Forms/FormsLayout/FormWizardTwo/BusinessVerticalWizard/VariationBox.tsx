import { Input } from 'reactstrap'
import { verticalBoxData } from '../../../../../Data/Forms/FormsLayout/FormsWizardTwo/FormsWizardTwo'
import { LI, UL } from '../../../../../AbstractElements'

const VariationBox = () => {
  return (
    <div className="variation-box mb-3">
      {verticalBoxData.map((data, index) => (
        <div className="selection-box" key={index}>
          <Input type="checkbox" />
          <div className="custom--mega-checkbox">
            <UL className="d-flex flex-column simple-list flex-row">
              <LI>{data.tittle}</LI>
              <LI className="txt-primary">{data.details}</LI>
            </UL>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VariationBox