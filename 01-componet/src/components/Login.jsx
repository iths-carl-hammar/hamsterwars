import React from 'react';

const Login = ({ isLoggedIn, doLogIn, doLogOut }) => (
    <div>
        {isLoggedIn
            ? (<> Click to log out:
                <button onClick={doLogOut}>log out</button> </>)
            : (<>Click to log in:
                <button onClick={doLogIn}>log in</button> </>
            )
        }
    </div>
)

export default Login;