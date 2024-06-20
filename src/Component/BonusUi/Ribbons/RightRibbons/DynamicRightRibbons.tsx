import { Fragment } from 'react'
import { rightRibbonDataList } from '../../../../Data/BonusUi/Ribbons/Ribbons'
import { RibbonProp } from '../../../../Types/BonusUi/BonusUiTypes'
import { Col } from 'reactstrap'
import { P } from '../../../../AbstractElements'

const DynamicRightRibbons = () => {
  return (
    <>
      {rightRibbonDataList.map(({ className, ribbonClass, title, span, icon }: RibbonProp, index) => (
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

export default DynamicRightRibbons