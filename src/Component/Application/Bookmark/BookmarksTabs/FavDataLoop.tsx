import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { BookMarkData } from '../../../../Types/Application/Bookmark/Bookmark';
import { Card, Col, Row } from 'reactstrap';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
import { Link } from 'react-router-dom';
import { Href } from '../../../../utils/Constant';
import NoBookmarksFoundComponent from './NoBookmarksFoundComponent';
import FavDescriptionData from './FavDescriptionData';
import { setBookMarkList, setBookmark } from '../../../../ReduxToolkit/Reducer/BookmarkTabSlice';

const FavDataLoop = () => {
    const { bookmark, bookMarkList } = useAppSelector((state) => state.bookmarkTab);
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      const updatedList = bookmark.filter((data) => data.fillStar === true);
      dispatch(setBookMarkList(updatedList));
    }, [bookmark, dispatch]);
  
    const removeFromFavorite = (item: BookMarkData) => {
      const updatedBookMark = bookmark.map((data) => (data.id === item.id ? { ...data, fillStar: false } : data));
      dispatch(setBookmark(updatedBookMark));
    };
    return (
      <Row>
        {bookMarkList.length > 0 ? (
          bookMarkList.map((myBookData: BookMarkData) => (
            <Col xxl="3" md="4" className="col-ed-4" key={myBookData.id}>
              <Card className="card-with-border bookmark-card o-hidden">
                <div className="details-website">
                  <Image className="img-fluid" src={`${dynamicImage(myBookData.image)}`} alt="Image" />
                  <div className={`favourite-icon favourite_0 ${myBookData.fillStar ? "favourite" : ""}`}>
                    <Link to={Href}>
                      <i className="fa fa-star" onClick={() => removeFromFavorite(myBookData)}></i>
                    </Link>
                  </div>
                  <FavDescriptionData myBookData={myBookData} />
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

export default FavDataLoop