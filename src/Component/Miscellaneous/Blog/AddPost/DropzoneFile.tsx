import { BlogDropFilesHereOrClickToUpload } from '../../../../utils/Constant';
import { H6 } from '../../../../AbstractElements';
import { Form } from 'reactstrap';
import Dropzone, { IDropzoneProps } from 'react-dropzone-uploader';
import { toast } from 'react-toastify';

const DropzoneFile = () => {
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };
  
  const handleSubmit: IDropzoneProps['onSubmit'] = (allFiles) => {
    allFiles.forEach(f => f.remove())
    toast.success("Dropzone successfully submitted !");
  };
    
  const Data = () => {
    return (
      <div className="dz-message needsclick">
        <i className="icon-cloud-up fs-1 txt-primary"></i>
        <H6 className="mb-0">{BlogDropFilesHereOrClickToUpload}</H6>
      </div>
    );
  };

  return (
    <Form>
      <Dropzone getUploadParams={getUploadParams} onSubmit={handleSubmit} maxFiles={1} inputContent={<Data />}/>
    </Form>
  );
}

export default DropzoneFile