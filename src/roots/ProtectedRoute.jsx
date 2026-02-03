import { Navigate, Outlet } from "react-router-dom";
import { useEffect , useState} from "react";
import axios from "axios";
const ProtectedRoute = () => {
 

    const [isAuth,setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        axios.get("https://localhost:7014/api/Auth/AuthUser",{
            withCredentials : true,
        })
        .then(() => {
            setIsAuth(true);
        })
        .catch(() => {
            setIsAuth(false);
        })
        .finally(() => setLoading(false));
    },[]);

     if (loading) return null; // ❗ IMPORTANT
    return isAuth ? <Outlet /> : <Navigate to="/login" replace />

};

export default ProtectedRoute;
