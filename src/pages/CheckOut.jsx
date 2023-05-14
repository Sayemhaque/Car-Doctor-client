import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import {AuthContext} from "../provider/AuthProvider"

const CheckOut = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    const { title, price, } = service;
 
    const handleOrder = (e) => {
        e.preventDefault()
    }
    return (
        <div className="md:max-w-5xl mx-auto px-5">
            <h3 className="text-3xl font-bold text-center py-2">Booink service: {title}</h3>
            <div className=" flex flex-col justify-center min-h-[70vh]  bg-base-200">
                <form onSubmit={handleOrder} className="grid grid-cols-2 px-12 gap-5">
                <div className="form-control">
          <input type="text" placeholder="name" defaultValue={user?.displayName} name="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="date" placeholder="data" name="date" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="your phone" name="your phone" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="due" defaultValue={" $" + price} name="your email" className="input input-bordered" />
        </div>
      <div className="col-span-2">
      <textarea name="" className="w-full" id="" cols="30" rows="10"></textarea>
      <button className="btn btn-warning btn-block">CONFIRM ORDER</button>
      </div>
     
                </form>
            </div>
        </div>
    );
};

export default CheckOut;