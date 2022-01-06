import React from 'react'

export const LoginScreen = ({history}) => {

    const handleClick = () => {
        // history.push('/marvel');
        history.replace('/marvel'); //replace in the browser's history /login for /marvel, thus if we go back we won't go to /login but to the previous visited url 
    }

    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr/>
            <button
                className='btn btn-primary'
                onClick={ handleClick }
            >
                Login
            </button>
        </div>
    )
}
