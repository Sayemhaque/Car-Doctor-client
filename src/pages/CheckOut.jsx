import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData()
    const {title,price,} = service;
    return (
        <div>
            <h1>{title}</h1>
            <p>{price}</p>
        </div>
    );
};

export default CheckOut;