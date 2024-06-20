import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { PreviewImage } from '../../../../utils/Constant';
import { FilePond } from 'react-filepond';
import { imagePreviewData } from '../../../../Data/BonusUi/Dropzone/Dropzone';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const ImagePreview = () => {
    const [files, setFiles] = useState([]);

    return (
      <Col lg="6">
        <Card>
          <CardHeaderCommon title={PreviewImage} span={imagePreviewData} />
          <CardBody>
            <FilePond files={files} allowReorder={true} allowMultiple={true} maxFiles={1} onupdatefiles={() => setFiles} labelIdle='Drag & Drop your files or <span class="filepond--label-action text-danger text-decoration-none">Browse</span>' />
          </CardBody>
        </Card>
      </Col>
    );
}

export default ImagePreview