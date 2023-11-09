 import PropTypes from 'prop-types'
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, lodig} = useAuth();
    const location = useLocation()

    if(lodig){
        return <div className='flex justify-center items-center'>
            <span className="loading loading-spinner loading-lg inline-block"></span>
        </div>
    }

    if(!user){
        return <Navigate state={location.pathname} to='/login'/>
    }
    
    

    if(user?.email){
        return children;
    }

};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;