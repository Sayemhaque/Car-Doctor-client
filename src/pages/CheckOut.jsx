import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider"
import { orderServiceDb } from "../api/api";

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const navigate = useNavigate()
    const { title, price, img, _id } = service;
    console.log(service)

    const handleOrder = (e) => {
        e.preventDefault()
        const form = e.target;
        const serviceName = title;
        const customerName = user?.displayName;
        const email = user?.email;
        const due = price;
        const date = form.date.value;
        const message = form.message.value;
        const serviceImg = img;
        const serviceId = _id;
        const orderInfo = { customerName, email, due, date, message, serviceImg, serviceName, serviceId }
        orderServiceDb(orderInfo)
        navigate("/")
        form.reset()
    }
    return (
        <div className="md:max-w-5xl mx-auto px-5">
            <h3 className="text-3xl font-bold text-center py-2">Booink service: {title}</h3>
            <div className=" flex flex-col justify-center min-h-[70vh]  bg-base-200">
                <form onSubmit={handleOrder} className="grid grid-cols-2 px-12 gap-5">
                    <div className="form-control">
                        <input type="text" placeholder="name" required defaultValue={user?.displayName} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="date" placeholder="data" required name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="your phone" required defaultValue={user?.email} name="your phone" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="due" required defaultValue={" $" + price} name="your email" className="input input-bordered" />
                    </div>
                    <div className="col-span-2">
                        <textarea name="message" required placeholder="write your message here" className="focus:outline-none border border-gray-200 w-full p-3" id="" cols="30" rows="10"></textarea>
                        <button className="btn btn-warning btn-block mt-8">CONFIRM ORDER</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;