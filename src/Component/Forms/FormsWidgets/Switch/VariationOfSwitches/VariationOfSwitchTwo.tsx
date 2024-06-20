import { Fragment } from 'react'
import { variationSwitchList } from '../../../../../Data/Forms/FormsWidgets/Switch/Switch'
import { Input, Label, Media } from 'reactstrap'
import { LI, P } from '../../../../../AbstractElements'

const VariationOfSwitchTwo = () => {
  return (
    <>
      {variationSwitchList.map(({ flexClass, text, color }, index) => (
        <Fragment key={index}>
          <LI className="tg-list-item">
            <Media>
              <Media body className={`text-end ${flexClass}`}>
                <Label className="switch mb-0 square-checked">
                  <Input type="checkbox" defaultChecked />
                  <span className={`switch-state bg-${color} rounded-2`}></span>
                </Label>
              </Media>
            </Media>
          </LI>
          <LI>
            <P>{text}</P>
          </LI>
        </Fragment>
      ))}
    </>
  )
}

export default VariationOfSwitchTwo