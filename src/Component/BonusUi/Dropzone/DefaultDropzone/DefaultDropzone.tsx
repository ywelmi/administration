import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { DefaultFileUploads } from '../../../../utils/Constant';
import { defaultFileUpload } from '../../../../Data/BonusUi/Dropzone/Dropzone';
import { FilePond } from 'react-filepond';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const DefaultDropzone = () => {
    const [files, setFiles] = useState([]);
  
    return (
      <Col lg="6">
        <Card>
          <CardHeaderCommon title={DefaultFileUploads} span={defaultFileUpload} />
          <CardBody>
            <FilePond files={files} onupdatefiles={() => setFiles} allowMultiple={true} maxFiles={1} labelIdle={'Drag & Drop your files or <span class="filepond--label-action text-danger text-decoration-none">Browse</span>'} />
          </CardBody>
        </Card>
      </Col>
    );
}

export default DefaultDropzone