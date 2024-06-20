import { Container, Row } from 'reactstrap'
import BadgesContextualVariationsCart from './BadgesContextualVariationsCart/BadgesContextualVariationsCart'
import PillsContextualVariationsCart from './PillsContextualVariationsCart/PillsContextualVariationsCart'
import NumberOfBadgeCard from './NumberofBadgeCard/NumberofBadgeCard'
import NumberOfPillsTagCart from './NumberOfPillsTagCart/NumberOfPillsTagCart'
import BadgeTagsWithIconsCart from './BadgeTagsWithIconsCart/BadgeTagsWithIconsCart'
import RoundedPillsWithIconsCart from './RoundedPillsWithIconsCart/RoundedPillsWithIconsCart'
import BadgeHeadingsExampleCart from './BadgeHeadingsExampleCart/BadgeHeadingsExampleCart'
import BadgesAsPartButtonsCart from './BadgesAsPartButtonsCart/BadgesAsPartButtonsCart'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { TagAndPills, UiKits } from '../../../utils/Constant'

const TagAndPillsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={TagAndPills} parent={UiKits} />
      <Container fluid>
        <Row>
          <BadgesContextualVariationsCart />
          <PillsContextualVariationsCart />
          <NumberOfBadgeCard />
          <NumberOfPillsTagCart />
          <BadgeTagsWithIconsCart />
          <RoundedPillsWithIconsCart />
          <BadgeHeadingsExampleCart />
          <BadgesAsPartButtonsCart />
        </Row>
      </Container>
    </>
  )
}

export default TagAndPillsContainer