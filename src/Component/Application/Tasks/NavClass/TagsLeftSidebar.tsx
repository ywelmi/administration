import { useCallback, useState } from 'react'
import { NavItem } from 'reactstrap';
import { Href, Tags } from '../../../../utils/Constant';
import { PlusCircle } from 'react-feather';
import { tagData } from '../../../../Data/Application/Tasks/Tasks';
import { Link } from 'react-router-dom';
import CreateTag from './CreateTag';
import { TasksPropsType } from '../../../../Types/Application/Tasks/Tasks';

const TagsLeftSidebar = ({activeTab,activeToggle}:TasksPropsType) => {
  const [tagModal, setTagModal] = useState(false);
  const tagToggle = () => setTagModal(!tagModal);
  const tagCallback = useCallback((modal: boolean) => {
    setTagModal(modal);
  }, []);
  return (
    <>
      <NavItem>
        <span className="main-title">
          {Tags}
          <span className="pull-right" onClick={tagToggle}>
            <PlusCircle />
          </span>
        </span>
      </NavItem>
      <CreateTag tagCallback={tagCallback} tagModal={tagModal} />
      {tagData.map((item) => (
        <NavItem key={item.id}>
          <Link
            to={Href}
            className={activeTab === item.activeTab ? "show" : ""}
            onClick={() => {
              activeToggle(item.activeTab);
            }}
          >
            <span className="title"> {item.title}</span>
          </Link>
        </NavItem>
      ))}
    </>
  )
}

export default TagsLeftSidebar