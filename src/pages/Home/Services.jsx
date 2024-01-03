import { useState } from "react";
import { useEffect } from "react";


const Services = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    console.log(services)
    return (
        <div className="text-center my-4">
            <p className="text-red-500 text-8xl font-bold underline">Services</p>
            <h3 className="font-bold py-2 text-4xl ">Our Services Area</h3>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

        </div>
    );
};

export default Services;