import { Card, CardBody, Col } from 'reactstrap';
import { SingleFileUploads } from '../../../../utils/Constant';
import { fileUploadData } from '../../../../Data/BonusUi/Dropzone/Dropzone';
import { toast } from 'react-toastify';
import Dropzone, { IDropzoneProps } from 'react-dropzone-uploader';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const SingleFileupload = () => {
    const getUploadParams = () => {
        return { url: "https://httpbin.org/post" };
      };
    
      const handleSubmit: IDropzoneProps["onSubmit"] = (allFiles) => {
        allFiles.forEach((f) => f.remove());
        toast.success("Dropzone successfully submitted !");
      };
    
    
      return (
        <Col lg="6">
          <Card>
            <CardHeaderCommon title={SingleFileUploads} span={fileUploadData} />
            <CardBody>
              <Dropzone getUploadParams={getUploadParams} onSubmit={handleSubmit} maxFiles={1} />
            </CardBody>
          </Card>
        </Col>
      );
}

export default SingleFileupload