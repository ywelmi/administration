import { Col, Input } from 'reactstrap'
import { H5, LI, P, UL } from '../../../../../AbstractElements'
import { UpgradeSpanText, UpgradeTitle } from '../../../../../utils/Constant'
import { upgradeVariationData } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption';

const VariationCheckboxUpgrade = () => {
  const upgradeParagraph = "Select the theme that best suits your requirements, and you're ready to go!";
  return (
    <Col xl="8" md="7">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <section className="main-upgrade">
          <div>
            <i className="fa fa-rocket"></i>
            <H5 className="mb-2">
              {UpgradeTitle} <span className="txt-primary">{UpgradeSpanText}</span>
            </H5>
            <P className="text-muted mb-2">{upgradeParagraph}</P>
          </div>
          <div className="variation-box">
            {upgradeVariationData.map(({id,check,text,sales},index) => (
              <div className="selection-box" key={index}>
                <Input id={`feature${id}`} type="checkbox" defaultChecked={check} />
                <div className="custom--mega-checkbox">
                  <UL className='simple-list'>
                    <LI>{text}</LI>
                    <LI className="txt-primary">{sales}</LI>
                  </UL>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Col>
  )
}

export default VariationCheckboxUpgrade