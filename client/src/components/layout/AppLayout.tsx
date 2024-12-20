/* eslint-disable @typescript-eslint/no-explicit-any */

import { Grid } from "@mui/material";
import Title from "../shared/Title";
import Header from "./Header";
import ChatList from "./ChatList";
import { sampleChats } from "../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = () => (WrappedComponent: any) => {
  return (props: any) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e,_id,groupChat)=>{
      e.preventDefault();
      console.log("Delete Chat",_id,groupChat);
      
    }
    return (
      <>
        <Title />
        <Header />

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              newMessagesAlert={[{ count: 4, chatId: "1" }]}
              onlineUsers={["1", "2"]}
              handleDeleteChatOpen={handleDeleteChat}
            />
          </Grid>

          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>

          <Grid
            item
            md={4}
            lg={3}
            sx={{ display: { xs: "none", md: "block" },padding:"2rem",bgcolor:"rgba(0,0,0,0.85)" }}
            height={"100%"}
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
