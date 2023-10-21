/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../Router/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const ExtraLogin = () => {


    const {signInGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = (media) =>{
        media()
        .then(res=> {
            swal("Welcome!", "Login Successful", "success");
            navigate(location?.state ? location.state : '/' );
          })
        .catch(err => {
            swal("Invalid!", "Provide right email/password", "error");
          })
    }



    return (
        <div>
            <div className="divider">
                <h2 className="font-medium">login with</h2>
            </div>
            <div className="flex justify-center">
                <button onClick={()=> {handleGoogleLogin(signInGoogle)}} className="btn btn-success btn-sm">Google</button>
            </div>
        </div>
    );
};

export default ExtraLogin;