import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddNewBookMarkInterFace } from '../../../../Types/Application/Bookmark/Bookmark';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { EditBookmark } from '../../../../utils/Constant';
import EditBookmarkModalForm from './EditBookmarkModalForm';
import { setEditModal, setEditRow, updateBookMark } from '../../../../ReduxToolkit/Reducer/BookmarkTabSlice';

const EditBookmarkModal = () => {
    const { editRow, editModal } = useAppSelector((state) => state.bookmarkTab);
    const dispatch = useAppDispatch();
    const {register,handleSubmit,formState: { errors },setValue} = useForm<AddNewBookMarkInterFace>();
  
    useEffect(() => {
      if (editRow) {
        setValue("url", editRow.website_url || "");
        setValue("title", editRow.title || "");
        setValue("desc", editRow.desc || "");
      }
    }, [editRow, setValue]);
  
    const editToggle = () => {
      dispatch(setEditModal());
      dispatch(setEditRow({}));
    };
  
    const updateNewBookmark = (id: number | undefined, data: AddNewBookMarkInterFace) => {
      dispatch(updateBookMark({ id: id, data: data }));
    };
  
    const updateBookMarkData: SubmitHandler<AddNewBookMarkInterFace> = (data) => {
      dispatch(setEditModal());
      updateNewBookmark(editRow?.id, data);
    };
  return (
    <Modal isOpen={editModal} toggle={editToggle} size="lg" className='modal-bookmark'>
      <ModalHeader toggle={editToggle}>{EditBookmark}</ModalHeader>
      <ModalBody>
        <EditBookmarkModalForm errors={errors} register={register} handleSubmit={handleSubmit} editToggle={editToggle} updateBookMarkData={updateBookMarkData}/>
      </ModalBody>
    </Modal>
  )
}

export default EditBookmarkModal