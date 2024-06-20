import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Instructions, SecondExample } from '../../../../utils/Constant';
import { H3, P } from '../../../../AbstractElements';
import { useState } from 'react';
import { SimpleMdeReact } from "react-simplemde-editor";
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon';

const MdeExampleTwo = () => {
    const [value, setValue] = useState("");
    const handelChange = (newValue: string) => setValue(newValue)
    const mdeEditorText = "Enter text in the area on the left. For more info, click the ? (help) icon in the menu.";
  
    return (
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeaderCommon title={SecondExample} />
              <CardBody>
                <Row className="editor_container">
                  <Col md="6">
                    <SimpleMdeReact id="editor_container" options={{ autofocus: true, spellChecker: false }} onChange={handelChange} />
                  </Col>
                  <Col md="6" className="reader">
                    <H3>{Instructions}</H3>
                    <P>{mdeEditorText}</P>
                    <br />
                    {value}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}

export default MdeExampleTwo