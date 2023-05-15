import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import TableRow from './TableRow';
import { deleteOrder } from '../../api/api';

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    const [error,setError] = useState("")

    useEffect(() => {
        fetch(`https://car-doctor-server-one-indol.vercel.app/orders?email=${user?.email}`,{
            method:"GET",
            headers:{
                authorization:`Bearer  ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error) {
                    setOrders(data)
                }
                else{
                    setError(data.message)
                }
            })
            .catch(error => console.log(error))
    }, [user?.email])

    
  const handleDeleteOrder = (id) => {
    const proceed = confirm("Do you want to delete ?")
    deleteOrder(id,proceed)
    const remaining = orders.filter(order => order._id !== id)
    setOrders(remaining)
 }
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
                <tbody >
                    {/* row 1 */}
                    {error  ? <h2 className='text-center text-white bg-red-400  font-bold'>{error}</h2>
                   : 
                   orders.map(order =>   <TableRow handleDeleteOrder={handleDeleteOrder} key={order._id} order={order}/>)    
                }
              </tbody>
            </table>
        </div>
    );
};

export default Orders;