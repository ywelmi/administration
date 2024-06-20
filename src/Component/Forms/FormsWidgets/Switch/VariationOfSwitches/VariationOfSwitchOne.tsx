import { Fragment } from 'react'
import { Input, Label } from 'reactstrap'
import { variationSwitchDataList } from '../../../../../Data/Forms/FormsWidgets/Switch/Switch'
import { LI, P } from '../../../../../AbstractElements'

const VariationOfSwitchOne = () => {
  return (
    <>
      {variationSwitchDataList.map(({ id, inputClass, text,offData,onData }, index) => (
        <Fragment key={index}>
          <LI className="tg-list-item">
            <Input className={`tgl ${inputClass}`} id={id} type="checkbox" />
            <Label className="tgl-btn" data-tg-off={offData} data-tg-on={onData}  for={id}></Label>
          </LI>
          <LI>
            <P>{text}</P>
          </LI>
        </Fragment>
      ))}
    </>
  )
}

export default VariationOfSwitchOne