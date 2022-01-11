import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    
    const { dispatch } = useContext(AuthContext);        

    const handleLogin = () => {
        // history.push('/marvel');

        const lastPath = localStorage.getItem('lastPath') || '/marvel';

        dispatch({
            type: types.login,
            payload: {
                name: 'Javier'
            }
        });

        history.replace( lastPath ); //replace in the browser's history /login for /marvel, thus if we go back we won't go to /login but to the previous visited url 
    }

    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr/>
            <button
                className='btn btn-primary'
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
