import { Col, Form, FormGroup, Input } from 'reactstrap'
import { H3, Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { KnowledgebaseHelpQue, KnowledgebasePlaceholder } from '../../../../utils/Constant'
import { Search } from 'react-feather'

const KnowledgebaseHelp = () => {
  return (
    <Col xs="12">
      <div className="knowledgebase-bg">
        <Image className="bg-img-cover bg-center" src={dynamicImage(`knowledgebase/bg_1.jpg`)} alt="looginpage"/>
      </div>
      <div className="knowledgebase-search">
        <div>
          <H3 className="f-w-600">{KnowledgebaseHelpQue}</H3>
          <Form onSubmit={(e)=>e.preventDefault()} className="form-inline" method="get">
            <FormGroup className="w-100 m-0">
              <Search/>
              <Input className="w-100 border-0 shadow-none" type="text" placeholder={KnowledgebasePlaceholder}/>
            </FormGroup>
          </Form>
        </div>
      </div>
    </Col>
  )
}

export default KnowledgebaseHelp