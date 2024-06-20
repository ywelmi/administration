import { Card, CardBody, Col, Row } from 'reactstrap'
import { CustomProgressBars, GettingStarted } from '../../../../utils/Constant'
import { Fragment } from 'react'
import { H6, Progressbar } from '../../../../AbstractElements'
import { customProgressData, customProgressList } from '../../../../Data/Ui-Kits/Progress/Progress'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const CustomProgressBarsCart = () => {
  return (
    <Card>
      <CardHeaderCommon title={CustomProgressBars} span={customProgressData} />
      <CardBody className="progress-showcase">
        <Row>
          <Col>
            <H6 className="mb-2">{GettingStarted}</H6>
            <Progressbar color="dark" value="0" className="text-center mb-4"></Progressbar>
            {customProgressList.map(({ color, value, title, text }, index) => (
              <Fragment key={index}>
                <H6 className="mb-2">{title}</H6>
                <Progressbar color={color} striped animated value={value} className=" mb-4">
                  {text}
                </Progressbar>
              </Fragment>
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default CustomProgressBarsCart