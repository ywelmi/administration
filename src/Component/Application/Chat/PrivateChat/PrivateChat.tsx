import { Container, Row } from "reactstrap";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import { useEffect } from "react";
import axios from "axios";
import { chatApi, chatMemberApi } from "../../../../Api";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import UserChat from "./UserChat/UserChat";
import { setAllMembers, setChats } from "../../../../ReduxToolkit/Reducer/ChatSlice";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Chat, PrivateChat } from "../../../../utils/Constant";

const PrivateChatContainer = () => {
  const dispatch = useAppDispatch();
  const getChatMembersData = async () => {
    try {
      await axios.get(chatMemberApi).then((resp) => {
        dispatch(setAllMembers(resp.data));
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const getChatData = async () => {
    try {
      await axios.get(chatApi).then((resp) => {
        dispatch(setChats(resp.data));
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getChatData();
    getChatMembersData();
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={PrivateChat} parent={Chat} />
      <Container fluid>
        <Row className="g-0">
          <LeftSidebar />
          <UserChat   />
        </Row>
      </Container>
    </>
  );
};

export default PrivateChatContainer;
