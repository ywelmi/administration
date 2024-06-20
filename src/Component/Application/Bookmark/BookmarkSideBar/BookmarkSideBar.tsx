import { Card, CardBody, Col, Media } from 'reactstrap'
import { Btn, H6, Image, P } from '../../../../AbstractElements'
import { BookmarkFilter, Href } from '../../../../utils/Constant'
import { dynamicImage } from '../../../../Service'
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks'
import NavTab from './NavTab'
import { setBookmarkFilter } from '../../../../ReduxToolkit/Reducer/BookmarkTabSlice'

const BookmarkSideBar = () => {
  const {bookmarkFilter} = useAppSelector((state)=>state.bookmarkTab)
  const dispatch = useAppDispatch()
  return (
    <Col xl="3" className="box-col-6">
      <div className="md-sidebar">
        <Btn tag="a" color="primary" className="md-sidebar-toggle" href={Href} onClick={()=>dispatch(setBookmarkFilter())}>{BookmarkFilter}</Btn>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${bookmarkFilter ? "open" : ""}`}>
          <div className="email-left-aside">
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  <Media>
                    <div className="media-size-email">
                      <Image className="me-3 rounded-circle" src={dynamicImage("user/user.png")} alt="user" />
                    </div>
                    <Media body>
                      <H6 className="f-w-600">{'MARK JECNO'}</H6>
                      <P>Markjecno@gmail.com</P>
                    </Media>
                  </Media>
                  <NavTab />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default BookmarkSideBar