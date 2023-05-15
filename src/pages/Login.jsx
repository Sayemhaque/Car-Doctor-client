import { Link, useNavigate } from 'react-router-dom';
import LogInImage from '../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import SocialLogin from '../components/SocialLogin/SocialLogin';
const Login = () => {
 const {logIn} = useContext(AuthContext)
 const [error,setError] = useState("")
 const navigate = useNavigate()
    const handleLogin = (e) => {
     e.preventDefault()
     const form = e.target;
     const email = form.email.value;
     const password = form.password.value;
     logIn(email,password)
     .then((result) => {
      console.log(result.user)
      navigate("/")
     })
     .catch(error => setError(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
            <img src={LogInImage} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  border-2 border-gray-300">
            <form onSubmit={handleLogin} className="card-body">
                <h1 className='text-2xl font-serif font-bold'>Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' required className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                <p className="text-red-500">{error}</p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <button type='submit' className="btn btn-warning">Login</button>
              </div>
            </form>
            <p className='text-center  font-semibold'>New to this webiste ? <Link className='text-amber-500' to="/register">Sing Up</Link></p>
            <SocialLogin/>
          </div>
        </div>
      </div>
    );
};

export default Login;