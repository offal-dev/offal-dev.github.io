import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user, getTokenSilently } = useAuth0();

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }


  const callApi = async () => {
    try {
      const token = await getTokenSilently();

      console.log(token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>

      <button onClick={callApi}>Get Access Token</button>
    </Fragment>
  );
};

export default Profile;