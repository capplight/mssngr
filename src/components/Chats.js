import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();

  console.log(user);

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Unichat</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="ca9e60a4-2719-4d08-af27-678f69fa6c6c"
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
