import { Card, CardBody, Col, FormGroup, Input, Label } from 'reactstrap'
import { fileInputSubTitle } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { DefaultFileInputExamples, DisabledFileInputExample, FlatInputStyles, LargeFileInputExample, MultipleFilesInputExample, SmallFileInputExample } from '../../../../../utils/Constant'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const FileInput = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FlatInputStyles} span={fileInputSubTitle}/>
        <CardBody>
          <FormGroup>
            <Label>{DefaultFileInputExamples}</Label>
            <Input type="file" />
          </FormGroup>
          <FormGroup>
            <Label>{MultipleFilesInputExample}</Label>
            <Input type="file" multiple />
          </FormGroup>
          <FormGroup>
            <Label>{DisabledFileInputExample}</Label>
            <Input type="file" disabled />
          </FormGroup>
          <FormGroup>
            <Label>{SmallFileInputExample}</Label>
            <Input bsSize='sm' type="file" />
          </FormGroup>
          <div>
            <Label>{LargeFileInputExample}</Label>
            <Input bsSize='lg' type="file" />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FileInput