 import PropTypes from 'prop-types'
import useAuth from '../../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, lodig} = useAuth();
    
    if(lodig){
        return <div className='flex justify-center items-center'>
            <span className="loading loading-spinner loading-lg inline-block"></span>
        </div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to='/login'></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;