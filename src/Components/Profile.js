import React, { useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base";
import { AuthContext } from "../Auth";
import Contacts from "./Contacts";

const Profile = ({ history }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>{currentUser.email}</p>
      <button
        onClick={() => {
          app.auth().signOut();
        }}
      >
        Sign out
      </button>

      <Contacts />
    </div>
  );
};

export default withRouter(Profile);
