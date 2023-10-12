// Profile.js

import React from 'react';
import { UseAuthContext } from '../../hooks/UseAuthContext';

const Profile = () => {
  const { user } = UseAuthContext();

  return (
    <div className="profile wrapper">
      <h2>Profile Page</h2>
      {user && (
        <div className="profile-info">
          <img src={user.photoURL} alt="Profile" />
          <h3>Name: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <p>UID: {user.uid}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
