import { Card, CardBody, Col } from 'reactstrap'
import { Blockquote } from '../../../../utils/Constant'
import { blockquoteData } from '../../../../Data/Ui-Kits/Typography/Typography'
import StaticBlockQuote from './StaticBlockQuote'
import DynamicBlockquote from './DynamicBlockquote'
import CardHeaderCommon from '../../CardHeaderCommon'

const BlockQuoteCart = () => {
  return (
    <Col sm="12">
      <Card className="overflow-hidden">
        <CardHeaderCommon title={Blockquote} span={blockquoteData} />
        <CardBody>
          <StaticBlockQuote />
          <DynamicBlockquote />
        </CardBody>
      </Card>
    </Col>
  )
}

export default BlockQuoteCart