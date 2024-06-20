import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, Col } from 'reactstrap'
import { H4, H5, H6, P } from '../../../../AbstractElements'
import { RihoTheme } from '../../../../utils/Constant'
import { CommonCardProp } from '../../../../Types/BonusUi/BonusUiTypes'

const CommonCard:React.FC<CommonCardProp>= ({ data }) => {
  return (
    <>
      <Col xl="4" sm={data.sm}>
        <Card className="height-equal">
          <CardHeader className={data.headerClass}>
            <H4 className={data.headingClass}>{data.title}</H4>
          </CardHeader>
          <CardBody className={data.bodyClass}>
            <H5 className="pb-2">{data.text}</H5>
            <P className="mb-0">{data.span}</P>
          </CardBody>
          <CardFooter className={data.footerClass}>
            <H6 className="mb-0 text-end">{RihoTheme}</H6>
          </CardFooter>
        </Card>
      </Col>
    </>
  )
}

export default CommonCard