import { Container, Row } from 'reactstrap'
import DarkTheme from './DarkTheme/DarkTheme'
import LightTheme from './LightTheme/LightTheme'
import OutlineDarkAndLightAlerts from './OutlineDarkAndLightAlerts/OutlineDarkAndLightAlerts'
import AlertsWithIconsTextActions from './AlertsWithIconsandTextActions/AlertsWithIconsandTextActions'
import DismissingDarkAlerts from './DismissingDarkAlerts/DismissingDarkAlerts'
import DismissingLightAlerts from './DismissingLightAlerts/DismissingLightAlerts'
import LiveAlert from './LiveAlert/LiveAlert'
import LeftBorderAlert from './LeftBorderAlert/LeftBorderAlert'
import AdditionalContent from './AdditionalContent/AdditionalContent'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Alert, UiKits } from '../../../utils/Constant'

const AlertContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Alert} parent={UiKits} />
      <Container fluid>
        <Row>
          <DarkTheme />
          <LightTheme />
          <OutlineDarkAndLightAlerts />
          <AlertsWithIconsTextActions />
          <DismissingDarkAlerts />
          <DismissingLightAlerts />
          <LiveAlert />
          <LeftBorderAlert />
          <AdditionalContent />
        </Row>
      </Container>
    </>
  )
}

export default AlertContainer