import { Container, Row } from 'reactstrap'
import HeadingCart from './HeadingCart/HeadingCart'
import ColorCart from './ColorCart/ColorCart'
import FontWeightCart from './FontWeightCart/FontWeightCart'
import ListingCard from './ListingCard/ListingCard'
import DisplayCart from './DisplayCart/DisplayCart'
import InlineTextCart from './InlineTextCart/InlineTextCart'
import TextColorCart from './TextColorCart/TextColorCart'
import BlockQuoteCart from './BlockQuoteCart/BlockQuoteCart'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Typography, UiKits } from '../../../utils/Constant'

const TypographyContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Typography} parent={UiKits} />
      <Container fluid>
        <Row>
          <HeadingCart />
          <ColorCart />
          <FontWeightCart/>
          <ListingCard />
          <DisplayCart />
          <InlineTextCart />
          <TextColorCart />
          <BlockQuoteCart />
        </Row>
      </Container>
    </>
  )
}

export default TypographyContainer