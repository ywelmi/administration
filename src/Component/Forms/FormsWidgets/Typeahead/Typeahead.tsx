import { Container, Row } from 'reactstrap'
import BasicTypeAhead from './BasicTypeAhead/BasicTypeAhead'
import PreFetch from './PreFetch/PreFetch'
import BloodHound from './BloodHound/BloodHound'
import RemoteTypeAhead from './RemoteTypeAhead/RemoteTypeAhead'
import CustomTemplates from './CustomTemplates/CustomTemplates'
import MultipleSectionsWithHeaders from './MultipleSectionsWithHeaders/MultipleSectionsWithHeaders'
import ScrollableDropdownMenu from './ScrollableDropdownMenu/ScrollableDropdownMenu'
import RtlSupport from './RtlSupport/RtlSupport'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { FormsWidgets, Typeahead } from '../../../../utils/Constant'

const TypeaheadContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Typeahead} parent={FormsWidgets} />
      <Container fluid>
        <div className="typeahead typeahead-wrapper">
          <Row>
            <BasicTypeAhead />
            <PreFetch />
            <BloodHound />
            <RemoteTypeAhead />
            <CustomTemplates />
            <MultipleSectionsWithHeaders />
            <ScrollableDropdownMenu />
            <RtlSupport />
          </Row>
        </div>
      </Container>
    </>
  )
}

export default TypeaheadContainer