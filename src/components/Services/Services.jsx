import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [sevices,setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-one-indol.vercel.app/services")
    .then(res => res.json())
    .then(data => setServices(data))
  } , [])
    return (
        <section className="py-12 bg-base-200">
             <div className="md:max-w-5xl mx-auto">
             <h3 className="text-2xl text-center font-bold text-amber-400">Our Services</h3>
               <h3 className="text-4xl mt-3 text-center font-bold">Our Services Area</h3>
               <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-8">
              {sevices.map(service => <ServicesCard key={service._id} service={service}/>)}
              </div>
             </div>
              
        </section>
    );
};

export default Services;