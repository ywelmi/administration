import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { P } from "../../AbstractElements";
import { SampleCards, SamplePage } from "../../utils/Constant";
import { samplePageData } from "../../Data/OtherPage/OtherPage";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import CommonCardHeader from "../../CommonElements/CommonCardHeader/CommonCardHeader";

const SamplePageContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={SamplePage} parent={SamplePage} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={SampleCards} span={samplePageData} />
              <CardBody>
                <P>Sample-page is a generic term used to refer to a basic, placeholder, or example page that developers or designers use as a starting point for building or testing a website or application. It is not an official or standard term but rather a descriptive name commonly used in web development and design contexts A sample page typically contains basic elements like headings, paragraphs, images, buttons, and links. It may also include placeholder text or images to represent content that will be replaced with actual content in the final version.</P>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SamplePageContainer;
