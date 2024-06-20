import { Fragment } from 'react'
import { Card, CardBody } from 'reactstrap'
import { Btn } from '../../../AbstractElements'
import CommonCardHeading from './CommonCardHeading'
import { DefaultType } from '../../../Types/Buttons/ButtonsTypes'
import CommonButtonsToolTip from './CommonButtonsToolTip'

const CommonButtons: React.FC<DefaultType> = ({ commonButtonsData, title, subTitle, className, raised }) => {
  return (
    <Card>
      <CommonCardHeading smallHeading={title} span={subTitle} />
      <CardBody>
        <div className="btn-showcase">
          {commonButtonsData.map((data, index) => (
            <Fragment key={index}>
              <Btn className={`${className ? className : ""} ${data.className ? data.className : ""} ${raised ? `btn-air-${data.color}` : ""}`} outline={data.outline} active={data.active} disabled={data.disabled} size={data.size ? data.size : ""} id={data.id ? data.id : ""} color={data.color}>
                {data.tittle}
              </Btn>
              {data.id && <CommonButtonsToolTip toolTipText={data.toolTipText ? data.toolTipText : ""} id={data.id ? data.id : ""} />}
            </Fragment>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export default CommonButtons