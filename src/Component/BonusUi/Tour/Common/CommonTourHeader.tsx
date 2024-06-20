import React from 'react'
import { Col } from 'reactstrap'
import { H5, Image } from '../../../../AbstractElements'
import { WilliamJennings } from '../../../../utils/Constant'
import { dynamicImage } from '../../../../Service'
import { CommonTourHeaderProp } from '../../../../Types/BonusUi/BonusUiTypes'

const CommonTourHeader:React.FC<CommonTourHeaderProp> = ({ date, time }) => {
  return (
    <Col sm="8">
      <div className="d-flex">
        <Image className="img-thumbnail rounded-circle me-3" src={dynamicImage(`user/7.jpg`)} alt="Generic placeholder" />
        <div className="flex-grow-1 align-self-center">
          <H5 className="mt-0 user-name">{WilliamJennings}</H5>
          <div className="tour-wrapper">
            <span>{date}</span>
            <i className="tour-dot fa fa-circle"></i>
            <span className="txt-danger">{time}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default CommonTourHeader