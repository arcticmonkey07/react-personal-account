import React, { useContext } from "react";
import app from "../base";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth";

const Home = ({ history }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>

      {currentUser ? (
        <div>
          <p>{currentUser.email}</p>
          <button
            onClick={() => {
              app.auth().signOut();
            }}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default withRouter(Home);
