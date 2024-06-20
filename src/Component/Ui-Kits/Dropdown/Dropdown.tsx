import { Container, Row } from 'reactstrap'
import BasicDropdown from './BasicDropdown/BasicDropdown'
import RoundedDropdown from './RoundedDropdown/RoundedDropdown'
import SplitDropdown from './SplitDropdown/SplitDropdown'
import HeadingDropdown from './HeadingDropdown/HeadingDropdown'
import WithInputType from './WithInputType/WithInputType'
import DarkDropdown from './DarkDropdown/DarkDropdown'
import UniqueDropdown from './UniqueDropdown/UniqueDropdown'
import JustifyContents from './JustifyContents/JustifyContents'
import Alignments from './Alignments/Alignments'
import HelperCard from './HelperCard/HelperCard'
import DividerDropdown from './DividerDropdown/DividerDropdown'
import DropdownSizing from './DropdownSizing/DropdownSizing'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Dropdown, UiKits } from '../../../utils/Constant'

const DropdownContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Dropdown} parent={UiKits} />
      <Container fluid>
        <Row>
          <BasicDropdown />
          <RoundedDropdown />
          <SplitDropdown />
          <HeadingDropdown />
          <WithInputType />
          <DarkDropdown />
          <UniqueDropdown />
          <JustifyContents />
          <Alignments />
          <HelperCard />
          <DividerDropdown />
          <DropdownSizing />
        </Row>
      </Container>
    </>
  )
}

export default DropdownContainer