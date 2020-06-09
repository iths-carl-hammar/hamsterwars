import React from 'react';

const UserStatus = ({ isLoggedIn }) => (
    <div>
        User is {isLoggedIn ? '' : 'not '}logged in.
    </div>
)

export default UserStatus;