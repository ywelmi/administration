import { Nav, NavItem } from 'reactstrap'
import { Btn, LI } from '../../../../AbstractElements'
import { Href, NewBookmark, Tags, Views } from '../../../../utils/Constant'
import { Bookmark, PlusCircle } from 'react-feather'
import { sideBarData, sideBarData2 } from '../../../../Data/Application/Bookmark/Bookmark'
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks'
import BookmarkModal from './BookmarkModal'
import ModalTag from './ModalTag'
import { Link } from 'react-router-dom'
import { setAddModal, setTagModal, updateActiveTabs } from '../../../../ReduxToolkit/Reducer/BookmarkTabSlice'

const NavTab = () => {
  const { activeTabs } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const onHandleClick = (id: string) => {dispatch(updateActiveTabs(id));};
  return (
    <Nav className="main-menu" role="tablist">
      <NavItem>
        <Btn className="d-block w-100 btn-mail" color='primary' onClick={()=>dispatch(setAddModal())}>
          <Bookmark className="me-2"/>{NewBookmark}
          <BookmarkModal />
        </Btn>
      </NavItem>
      <NavItem>
        <span className="main-title f-w-500">{Views}</span>
      </NavItem>
      {sideBarData.map((data, index) => (
        <LI key={index}>
          <Link className={`show ${activeTabs === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} to={Href}>
            <span className="title f-w-400"> {data.tittle}</span>
          </Link>
        </LI>
      ))}
      <LI><hr /></LI>
      <LI>
        <span className="main-title f-w-500">{Tags}
          <span className="pull-right" onClick={()=>dispatch(setTagModal())}>
            <Link to={Href}><PlusCircle /></Link>
          </span>
        </span>
      </LI>
      <ModalTag />
      {sideBarData2.map((data, index) => (
        <LI key={index}>
          <Link className={`show ${activeTabs === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} to={Href}>
            <span className="title f-w-400"> {data.tittle}</span>
          </Link>
        </LI>
      ))}
    </Nav>
  )
}

export default NavTab