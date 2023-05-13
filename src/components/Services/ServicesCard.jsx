/* eslint-disable react/prop-types */

const ServicesCard = ({service}) => {
    const {title,img,price} = service;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="font-bold">Price : <span className="text-amber-500">{price}$</span></p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;