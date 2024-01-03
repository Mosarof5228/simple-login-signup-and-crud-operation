

const ServiceCard = ({service}) => {
    console.log(service)
    const {serviceName,servicePhoto,money}=service;
    return (
    <div>
        <div className="card card-compact bg-base-100 shadow-xl">
<figure><img className="h-[300px] w-full" src={servicePhoto} alt="Service Photo" /></figure>
<div className="card-body">
<h2 className="card-title">{serviceName}</h2>
<p>Doctor is very much careful and take minimul cost for provide service.</p>
<p>Money: {money}</p>
<button className="btn btn-secondary">Book Now</button>
</div>
</div>
    </div>
    );
};

export default ServiceCard;