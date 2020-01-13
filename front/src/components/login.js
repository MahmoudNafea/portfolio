import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <h1>Please login</h1>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" placeholder="Username" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <button type="submit"> Login</button>
            </form>

            <button>Login with google</button>
        </div>
    )
}

export default LoginPage