import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import TableRow from './TableRow';

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(error => console.log(error))
    }, [user?.email])
    return (
        <div className="overflow-x-auto md:max-w-5xl mx-auto py-24">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Service Name</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {orders.length < 1 ? <h2 className='text-center font-bold'>No orders</h2>
                   : 
                   orders.map(order =>   <TableRow key={order._id} order={order}/>)    
                }
                  
                </tbody>
            </table>
        </div>
    );
};

export default Orders;