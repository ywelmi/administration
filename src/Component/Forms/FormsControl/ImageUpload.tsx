import { useEffect, useState } from "react";
import { ImageListType, ImageType } from "react-images-uploading";
import ReactImageUploading from "react-images-uploading";
import { Button } from "reactstrap";

interface IImageUpload {
  multiple?: boolean;
  values: ImageListType;
  onAdd?: (i: ImageType) => void;
  onUpdate?: (im: ImageType, idx: number) => void;
  onDelete?: (i: number) => Promise<void>;
  maxNumber?: number;
}

const ImageUpload = ({
  multiple = false,
  maxNumber = 10,
  values = [],
  onAdd,
  onUpdate,
  onDelete,
}: IImageUpload) => {
  const [images, setImages] = useState(values);

  useEffect(() => {
    console.log({ values });
    setImages(values);
  }, [values]);

  const handleOnChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    const preImagesNum = images.length;
    if (addUpdateIndex?.length) {
      if (addUpdateIndex[0] < preImagesNum) {
        // update
        if (onUpdate) {
          addUpdateIndex.forEach((i) => {
            onUpdate(imageList[i], i);
          });
        }
      } else {
        if (onAdd) {
          addUpdateIndex.forEach((i) => {
            onAdd(imageList[i]);
          });
        }
      }
    }
    setImages(imageList as never[]);
  };

  return (
    <div className="App">
      <ReactImageUploading
        multiple={multiple}
        value={images}
        onChange={handleOnChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="">
            {onAdd ? (
              <Button
                type="button"
                color="primary"
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Nhấn hoặc thả ảnh...
              </Button>
            ) : null}
            &nbsp;
            {multiple ? (
              <Button type="button" onClick={onImageRemoveAll}>
                Xóa tất cả ảnh
              </Button>
            ) : null}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="100" />
                <div className="flex gap-2">
                  {onUpdate ? (
                    <Button type="button" onClick={() => onImageUpdate(index)}>
                      Cập nhật
                    </Button>
                  ) : null}
                  {onDelete ? (
                    <Button
                      type="button"
                      onClick={async () => {
                        if (onDelete) {
                          await onDelete?.(index).then(() =>
                            onImageRemove(index)
                          );
                          return;
                        }
                        onImageRemove(index);
                      }}
                    >
                      Xóa ảnh
                    </Button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </ReactImageUploading>
    </div>
  );
};

export { ImageUpload };
