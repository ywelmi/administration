import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { LiveAlerts, ShowLiveAlert } from '../../../../utils/Constant';
import { Alerts, Btn, P } from '../../../../AbstractElements';
import { liveAlertData } from '../../../../Data/Ui-Kits/Alert/AlertData';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const LiveAlert = () => {
  const [data, setData] = useState<string[]>([]);

  const dataShown = (key: number) => {
    setData(data.filter((item, index) => index !== key));
  };
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={LiveAlerts} span={liveAlertData} />
        <CardBody className="live-dark">
          {data.length > 0 &&
            data.map((item, index) => (
              <Alerts fade color="light-dark" className="alert-dismissible" key={index}>
                <P className="text-dark">Nice, you triggered this alert message!</P>
                <Btn close onClick={() => dataShown(index)}></Btn>
              </Alerts>
            ))}
          <Btn color="dark" onClick={() => setData(() => [...data, "Alerts"])}>{ShowLiveAlert}</Btn>
        </CardBody>
      </Card>
    </Col>
  )
}

export default LiveAlert