import { toast } from 'react-toastify';
import { Card, CardBody, Col } from 'reactstrap';
import { MultiFileUploads } from '../../../../utils/Constant';
import Dropzone,{ IDropzoneProps }  from 'react-dropzone-uploader';
import { fileUploadData } from '../../../../Data/BonusUi/Dropzone/Dropzone';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const MultiFileUpload = () => {
    const getUploadParams = () => {
        return { url: "https://httpbin.org/post" };
      };
      
      const handleSubmit: IDropzoneProps['onSubmit'] = (allFiles) => {
        allFiles.forEach((f) => f.remove());
        toast.success("Dropzone successfully submitted !");
      };
    
      return (
        <Col lg="6">
          <Card>
            <CardHeaderCommon title={MultiFileUploads} span={fileUploadData} />
            <CardBody>
              <Dropzone getUploadParams={getUploadParams} onSubmit={handleSubmit} />
            </CardBody>
          </Card>
        </Col>
      );
}

export default MultiFileUpload