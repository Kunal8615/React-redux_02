import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <h1>More Component</h1>
    </div>
  );
}

export default Profile;
