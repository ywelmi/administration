import { Container, Row } from 'reactstrap'
import KnowledgebaseHelp from './KnowledgebaseHelp/KnowledgebaseHelp'
import Article from '../Faq/Article/Article'
import FAQFeaturesTutorial from '../Faq/FAQFeaturesTutorial/FAQFeaturesTutorial'
import ArticleVideo from '../Faq/ArticleVideo/ArticleVideo'
import CategoryData from './CategoryData/CategoryData'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Knowledgebase } from '../../../utils/Constant'

const KnowledgebaseContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Knowledgebase} parent={Knowledgebase} />
      <Container fluid>
        <Row>
          <KnowledgebaseHelp />
          <Article />
          <CategoryData />
          <FAQFeaturesTutorial />
          <ArticleVideo /> 
        </Row>
      </Container>
    </>
  )
}

export default KnowledgebaseContainer