import LogInImage from "../assets/images/login/login.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react"
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
  const [error,setError] = useState('')
  const {  createUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSignUp = (e) => {
    e.preventDefault()
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email,password)
    .then((result) => {
      const  user = result.user;
      navigate("/")
      console.log(user)
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
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className='text-2xl font-serif font-bold'>Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="name" placeholder="name" name='name' required className="input input-bordered" />
            </div>
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
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-warning">Sign Up</button>
            </div>
          </form>
          <p className='text-center mb-2 font-semibold'>Already have an account ? <Link className='text-amber-500' to="/login">Log In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;