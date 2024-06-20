import { Card, CardBody, Col, Input } from 'reactstrap'
import { Btn, P } from '../../../../../AbstractElements'
import { ClipboardTextInput, Copy, Cut, CutAndCopyText, CutAndCopyTextPlaceholder } from '../../../../../utils/Constant'
import { useState } from 'react'
import CopyToClipboard from "react-copy-to-clipboard";
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader';

const ClipboardOnTextInput = () => {
  const [clipboardTextValue, setClipboardTextValue] = useState({ value: "", copied: false });
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={ClipboardTextInput} />
        <CardBody>
          <div className="clipboaard-container">
            <P className="f-16">{CutAndCopyText}</P>
            <Input id="clipboardExample1" type="text" placeholder={CutAndCopyTextPlaceholder} value={clipboardTextValue.value} onChange={({ target: { value } }) => setClipboardTextValue({ value, copied: false })} />
            <div className="mt-3 text-end">
              <CopyToClipboard text={clipboardTextValue.value} onCopy={(value) => setClipboardTextValue({ value, copied: true })}>
                <Btn color="primary" className="btn-clipboard me-1"><i className="fa fa-copy"></i> {Copy}</Btn>
              </CopyToClipboard>
              <CopyToClipboard text={clipboardTextValue.value} onCopy={() => setClipboardTextValue({ copied: true, value: "" })}>
                <Btn color="secondary" className="btn-clipboard-cut"><i className="fa fa-cut"></i> {Cut}</Btn>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ClipboardOnTextInput