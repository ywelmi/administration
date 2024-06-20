import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { Btn, H6, P } from '../../../../../AbstractElements';
import { ClipboardOnParagraphs, Copy, CopyFromParagraph } from '../../../../../utils/Constant';
import CopyToClipboard from 'react-copy-to-clipboard';
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader';

const ClipboardOnParagraph = () => {
    const clipBoardParaGraph:string = "On that day, hopes and dreams were crushed. Even though it should have been anticipated, it nonetheless surprised me. The warning indicators have been disregarded in favour of the slim chance that it would actually occur. From a hopeful prospect, it had evolved into an unquestionable conviction that it must be fate. That was up until it wasn't, at which point all of the aspirations and dreams collapsed.";
    const [clipBoardValues, setClipBoardValues] = useState({ value: clipBoardParaGraph, copied: false });
  
    return (
      <Col sm="12" md="6">
        <Card>
          <CommonCardHeader title={ClipboardOnParagraphs} />
          <CardBody>
            <div className="clipboaard-container">
              <P className="f-16">{CopyFromParagraph}</P>
              <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
                <H6 className="border rounded card-body f-w-300">{clipBoardParaGraph}</H6>
              </CopyToClipboard>
              <div className="mt-3 text-end">
                <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
                  <Btn className="btn-clipboard" color="info">
                    <i className="fa fa-copy"></i> {Copy}
                  </Btn>
                </CopyToClipboard>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default ClipboardOnParagraph