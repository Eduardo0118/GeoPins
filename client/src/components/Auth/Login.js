import React from "react";
import { GraphQLClient } from "graphql-request";
import { GoogleLogin } from "react-google-login";
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

const Login = ({ classes }) => {
  const ME_QUERY = `
    query{
      me {
        _id
        name
        email
        picture
      }
    }
  `;

  const onSuccess = async (googleUser) => {
    const idToken = googleUser.getAuthResponse().id_token;

    const client = new GraphQLClient("http://localhost:4000/graphql", {
      headers: { authorization: idToken },
    });

    await client.request(ME_QUERY);
  };

  return (
    <GoogleLogin
      clientId="160557168206-tupk2fms06s7oermp6o6lsiso9jokmlu.apps.googleusercontent.com"
      onSuccess={onSuccess}
      isSignedIn={true}
    />
  );
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default withStyles(styles)(Login);
