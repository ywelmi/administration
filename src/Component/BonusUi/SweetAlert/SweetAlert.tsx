import { Container, Row } from 'reactstrap'
import BasicExample from './BasicExample/BasicExample'
import TitleWithTextUnder from './TitleWithTextUnder/TitleWithTextUnder'
import InfoAlert from './InfoAlert/InfoAlert'
import WarningAlert from './WarningAlert/WarningAlert'
import PikachuAlert from './PikachuAlert/PikachuAlert'
import QuestionsAlert from './QuestionsAlert/QuestionsAlert'
import UsernameAlert from './UsernameAlert/UsernameAlert'
import SuccessMessage from './SuccessMessage/SuccessMessage'
import DangerAlert from './DangerAlert/DangerAlert'
import WarningMode from './WarningMode/WarningMode'
import AutoCloseTimer from './AutoCloseTimer/AutoCloseTimer'
import AjaxRequestMovie from './AjaxRequestMovie/AjaxRequestMovie'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BonusUi, SweetAlert } from '../../../utils/Constant'

const SweetAlertContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={SweetAlert} parent={BonusUi} />
      <Container fluid>
        <Row>
          <BasicExample />
          <TitleWithTextUnder />
          <InfoAlert />
          <WarningAlert />
          <PikachuAlert />
          <QuestionsAlert />
          <UsernameAlert />
          <SuccessMessage />
          <DangerAlert />
          <WarningMode />
          <AutoCloseTimer />
          <AjaxRequestMovie />
        </Row>
      </Container>
    </>
  )
}

export default SweetAlertContainer