import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
    const {loginWithGoogle} = useContext(AuthContext)
    const handeLogInWithGoogle = () => {
        loginWithGoogle()
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
    }
    return (
        <div className="text-center mb-2"> 
            <div className="divider">or Login with</div>
            <button className="btn btn-circle font-bold" onClick={handeLogInWithGoogle}>
               G
            </button>
        </div>
    );
};

export default SocialLogin;