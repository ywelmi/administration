import { Container } from 'reactstrap'
import LeftRibbons from './LeftRibbons/LeftRibbons'
import RightRibbons from './RightRibbons/RightRibbons'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BonusUi, Ribbons } from '../../../utils/Constant'

const RibbonsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Ribbons} parent={BonusUi} />
      <Container fluid>
        <LeftRibbons />
        <RightRibbons />
      </Container>
    </>
  )
}

export default RibbonsContainer