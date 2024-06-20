import { H6, P, SVG } from "../../../../../../AbstractElements";
import { useState } from "react";
import { Dropzone, ExtFile, FileMosaic } from "@dropzone-ui/react";
import { DragFilesHere } from "../../../../../../utils/Constant";
import { useDispatch } from "react-redux";
import { setFormValue } from "../../../../../../ReduxToolkit/Reducer/AddProductSlice";

const ProductGallery = () => {
  const [files, setFiles] = useState<ExtFile[]>([]);
  const dispatch = useDispatch()
  const updateFiles = (incomingFiles: ExtFile[]) => {
    setFiles(incomingFiles);
    dispatch(setFormValue({name:"fileName1",value:incomingFiles[0].file?.name}))
  };
  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };
  return (
    <div className="product-upload">
      <P>Product Gallery</P>
      <Dropzone onChange={(files)=>updateFiles(files)} value={files} maxFiles={1} header={false} footer={false} minHeight="80px" name="fileName1">
        {files.map((file: ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
        ))}
        {files.length === 0 && (
          <div className="dz-message">
            <SVG iconId="file-upload1" />
            <H6>{DragFilesHere}</H6>
            <span className="note">Add Product Gallery Images</span>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default ProductGallery;
