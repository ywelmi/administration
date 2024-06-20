import { Fragment } from 'react'
import { leftRibbonsDataList } from '../../../../Data/BonusUi/Ribbons/Ribbons'
import { Col } from 'reactstrap'
import { RibbonProp } from '../../../../Types/BonusUi/BonusUiTypes'
import { P } from '../../../../AbstractElements'

const DynamicLeftRibbons = () => {
  return (
    <>
      {leftRibbonsDataList.map(({ className, ribbonClass, title, span, icon }: RibbonProp, index) => (
        <Col sm="6" xl="4" key={index}>
          <div className={`border border-1 height-equal ${className ? className : ""}`}>
            <div className={`ribbon ${ribbonClass}`}>
              {title && title}
              {icon && icon}
            </div>
            <P>
              {span.map(({ spanText, text }, index) => (
                <Fragment key={index}>
                  {text && text}
                  {spanText && <em className="txt-danger">{spanText}</em>}
                </Fragment>
              ))}
            </P>
          </div>
        </Col>
      ))}
    </>
  )
}

export default DynamicLeftRibbons