import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { BookMarkData } from '../../../../Types/Application/Bookmark/Bookmark';
import { Card, Col, Row } from 'reactstrap';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
import { Link } from 'react-router-dom';
import SweetAlert from "sweetalert2";
import { Href } from '../../../../utils/Constant';
import DescriptionData from './DescriptionData';
import NoBookmarksFoundComponent from './NoBookmarksFoundComponent';
import { setBookmark, setEditModal, setEditRow, setRemoveBookmark } from '../../../../ReduxToolkit/Reducer/BookmarkTabSlice';

const DataLoop = () => {
    const { bookmark } = useAppSelector((state) => state.bookmarkTab);
    const dispatch = useAppDispatch();
  
    const addToFavourites = (data: BookMarkData) => {
      if (data.fillStar === false) {
        const newBookMarkData = bookmark.map((item) => (item.id === data.id ? { ...item, fillStar: true } : item));
        dispatch(setBookmark(newBookMarkData));
      } else {
        const newBookMarkData = bookmark.map((item) => (item.id === data.id ? { ...item, fillStar: false } : item));
        dispatch(setBookmark(newBookMarkData));
      }
    };
  
    const onHandleClick = (data: BookMarkData) => {
      dispatch(setEditModal());
      dispatch(setEditRow(data));
    };
  
    const removeFromBookmark = (bookmarkId: number) => {
      SweetAlert.fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ok",
        cancelButtonText: "cancel",
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          dispatch(setRemoveBookmark(bookmarkId));
          SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
        } else {
          SweetAlert.fire("Your imaginary file is safe!");
        }
      });
    };
    return (
      <Row id="bookmarkData">
        {bookmark.length > 0 ? (
          bookmark.map((data, index) => (
            <Col xxl="3" xl="4" md="4" lg="3" sm="6" key={index} className="box-col-4">
              <Card className="card-with-border bookmark-card o-hidden">
                <div className="details-website">
                  <Image className="img-fluid" src={`${dynamicImage(data.image)}`} alt="image" />
                  <div className={`favourite-icon favourite_0 ${data.fillStar ? "favourite" : ""}`} onClick={() => addToFavourites(data)}>
                    <Link to={Href}>
                      <i className="fa fa-star"></i>
                    </Link>
                  </div>
                  <DescriptionData data={data} onHandleClick={onHandleClick} removeFrombookmark={removeFromBookmark} />
                </div>
              </Card>
            </Col>
          ))
        ) : (
          <NoBookmarksFoundComponent />
        )}
      </Row>
    )
}

export default DataLoop