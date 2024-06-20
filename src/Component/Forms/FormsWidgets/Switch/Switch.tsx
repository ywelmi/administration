import { Container, Row } from 'reactstrap'
import CustomSwitch from './CustomSwitch/CustomSwitch'
import IconsSwitch from './IconsSwitch/IconsSwitch'
import UnCheckedSwitch from './UnCheckedSwitch/UnCheckedSwitch'
import BordersWithIcons from './BordersWithIcons/BordersWithIcons'
import DisabledOutlineSwitch from './DisabledOutlineSwitch/DisabledOutlineSwitch'
import VariationOfSwitches from './VariationOfSwitches/VariationOfSwitches'
import SwitchSizing from './SwitchSizing/SwitchSizing'
import SwitchWithIcons from './SwitchWithIcons/SwitchWithIcons'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { FormsWidgets, Switch } from '../../../../utils/Constant'

const SwitchContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Switch} parent={FormsWidgets} />
      <Container fluid>
        <Row>
          <CustomSwitch />
          <IconsSwitch />
          <UnCheckedSwitch />
          <BordersWithIcons />
          <DisabledOutlineSwitch />
          <VariationOfSwitches />
          <SwitchSizing />
          <SwitchWithIcons />
        </Row>
      </Container>
    </>
  )
}

export default SwitchContainer