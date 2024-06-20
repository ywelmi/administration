import { Col, FormGroup, Label, Row } from 'reactstrap';
import { ActualFileUpload, DropFileUploadText, DropFilesHereOrClickToUpload, UploadProjectFiles } from '../../../../utils/Constant';
import { Dropzone, FileMosaic, ExtFile } from "@dropzone-ui/react";
import { H6 } from '../../../../AbstractElements';
import { useState } from 'react';

const UploadProjectFile = () => {
  const [files, setFiles] = useState<ExtFile[]>([]);
  const updateFiles = (incomingFiles: ExtFile[]) => {
    setFiles(incomingFiles);
  };
  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };

  return (
    <Row>
      <Col>
        <FormGroup>
          <Label check>{UploadProjectFiles}</Label>
          <Dropzone onChange={updateFiles} value={files} maxFiles={1} header={false} footer={false} minHeight="80px" label="Drag'n drop files here or click to Browse">
            {files.map((file: ExtFile) => (
              <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
            ))}
            {files.length === 0 && (
              <div className="dz-message needsclick p-5">
              <i className="icon-cloud-up fs-1 txt-primary"></i>
              <H6 className="f-w-700 mb-1">{DropFilesHereOrClickToUpload}</H6>
              <H6 className="note needsclick">
                {DropFileUploadText}<strong>not</strong>{ActualFileUpload}
              </H6>
            </div>
            )}
          </Dropzone>
        </FormGroup>
      </Col>
    </Row>
  );
}

export default UploadProjectFile