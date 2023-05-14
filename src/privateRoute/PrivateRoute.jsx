/* eslint-disable react/prop-types */
import  { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    if(loading){
        return <p className='text-2xl'>Loading....</p>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;