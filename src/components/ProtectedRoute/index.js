import {Route} from "react-router-dom" 
import Cookies from "js-cookie"

const ProtectedRoute = (props) => {
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken === undefined){
        
    }
    return <Route {...props}/>
}
export default ProtectedRoute