import { Card, CardBody, Col, Input } from 'reactstrap'
import { ClipboardOnTextAreas, Copy, Cut, CutCopyFromTextarea } from '../../../../../utils/Constant'
import { Btn, P } from '../../../../../AbstractElements'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useState } from 'react'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const ClipboardOnTextarea = () => {
  const clipBoardTextParagraph: string = "A web designer must always enhance their work since creating websites is a creative effort. Therefore, a web designer must be more imaginative to produce exceptional results. Blogs about web design assist web designers in learning about new technologies, offer lessons, news, direction for a freebie, and much more. These blogs allow web designers to stay creative and improve their abilities. Therefore, advice from web design blogs is required to improve your business.";
  const [clipBoardValues, setClipBoardValues] = useState({ value: clipBoardTextParagraph, copied: false });
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={ClipboardOnTextAreas} />
        <CardBody>
          <div className="clipboaard-container">
            <P className="f-16">{CutCopyFromTextarea}</P>
            <Input className='f-14' type="textarea" rows={3} spellCheck="false" value={clipBoardValues.value} onChange={({ target: { value } }) => setClipBoardValues({ value, copied: false })} />
            <div className="mt-3 text-end">
              <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
                <Btn className="btn-clipboard me-2" color="warning">
                  <i className="fa fa-copy"></i>{Copy}
                </Btn>
              </CopyToClipboard>
              <CopyToClipboard text={clipBoardValues.value} onCopy={() => setClipBoardValues({ copied: true, value: "" })}>
                <Btn className="btn-clipboard-cut" color="success">
                  <i className="fa fa-cut"></i>{Cut}
                </Btn>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ClipboardOnTextarea