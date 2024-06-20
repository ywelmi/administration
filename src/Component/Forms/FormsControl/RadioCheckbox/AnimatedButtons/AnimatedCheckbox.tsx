import { Fragment } from 'react'
import { Col, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { InstagramAnimated, WhatIsYourFavoriteSocialMedia } from '../../../../../utils/Constant'
import { animatedSocialData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const AnimatedCheckbox = () => {
  return (
    <Col sm="6">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{WhatIsYourFavoriteSocialMedia}</H6>
        <Label className="d-block" for='chk-ani' check></Label>
        <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
        {InstagramAnimated}
        {animatedSocialData.map(({ id, text, defaultChecked }, index) => (
          <Fragment key={index}>
            <Label className="d-block" for={id} check></Label>
            <Input className="checkbox_animated" id={id} type="checkbox" defaultChecked={defaultChecked} />
            {text}
          </Fragment>
        ))}
      </div>
    </Col>
  )
}

export default AnimatedCheckbox