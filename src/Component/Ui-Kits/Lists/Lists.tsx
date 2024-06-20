import { Container, Row } from 'reactstrap'
import DefaultLists from './DefaultLists/DefaultLists'
import ActiveLists from './ActiveLists/ActiveLists'
import FlushLists from './FlushLists/FlushLists'
import ContextualClasses from './ContextualClasses/ContextualClasses'
import HorizontalLists from './HorizontalLists/HorizontalLists'
import CustomContentLists from './CustomContentLists/CustomContentLists'
import ListsWithCheckbox from './ListsWithCheckbox/ListsWithCheckbox'
import ListsWithRadios from './ListsWithRadios/ListsWithRadios'
import ListsWithNumbers from './ListsWithNumbers/ListsWithNumbers'
import JavaScriptBehavior from './JavaScriptBehavior/JavaScriptBehavior'
import NumberedBadgeLists from './NumberedBadgeLists/NumberedBadgeLists'
import DisabledLists from './DisabledLists/DisabledLists'
import ScrollableLists from './ScrollableLists/ScrollableLists'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Lists, UiKits } from '../../../utils/Constant'

const ListsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Lists} parent={UiKits} />
      <Container fluid>
        <Row>
          <DefaultLists />
          <ActiveLists />
          <FlushLists />
          <ContextualClasses />
          <HorizontalLists />
          <CustomContentLists />
          <ListsWithCheckbox />
          <ListsWithRadios />
          <ListsWithNumbers />
          <JavaScriptBehavior />
          <NumberedBadgeLists />
          <DisabledLists />
          <ScrollableLists />
        </Row>
      </Container>
    </>
  )
}

export default ListsContainer