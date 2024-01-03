import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    console.log(services)
    return (
        <div className="text-center my-4">
            <p className="text-red-500 text-6xl font-bold underline">Doctor Services</p>
            <h3 className="font-bold py-2 text-4xl ">Our Services Area</h3>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
           <h2 className="text-2xl font-semibold mt-4">Total Service: {services.length}</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {
                services.map(service=><ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
           </div>
        </div>
    );
};

export default Services;