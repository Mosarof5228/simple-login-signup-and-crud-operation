import Swal from "sweetalert2";



const AddServiceDoctor = () => {
    const handleAddService = (event) => {
        event.preventDefault()
        const form = event.target;
        const serviceName = form.serviceName.value;
        const servicePhoto = form.photo.value;
        const email = form.email.value;
        const money = form.money.value;
        console.log(serviceName, servicePhoto, email)
        const service = { serviceName, servicePhoto, email,money };
        fetch('http://localhost:3000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Services Aded succesfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })


    }
    return (
        <form onSubmit={handleAddService} className="my-8 rounded-xl">
            <div style={{ boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)", }} className="px-10 py-14  border  w-11/12 mx-auto rounded-lg" >
                <div className="flex flex-col items-center leading-[50px] justify-center">

                    <h2 className="text-5xl text-center cursor-pointer font-extrabold read-only:  text-[#0060af] mt-4">This Page Is Only For Doctor </h2>
                    <h2 className="text-4xl text-center cursor-pointer font-bold text-[#0060af] mt-4 read-only:">Add A New Service</h2>
                    <p>Carefully Add The Service Information! </p>
                </div>
                <hr className="my-4 border" />
                <div className="space-y-5">
                    <h2 className="text-2xl font-semibold">Service Name</h2>
                    <input type="text" placeholder="Enter Service Name" name="serviceName" className="input input-bordered  input-lg w-full " />
                    <h2 className="text-2xl font-semibold">Email Address</h2>
                    <input type="text" placeholder="Enter Your Email" name="email" className="input input-bordered  input-lg w-full " />
                    <h2 className="text-2xl font-semibold">Booking Money</h2>
                    <input type="text" placeholder="Enter Booking Money" name="money" className="input input-bordered  input-lg w-full " />
                    <h2 className="text-2xl font-semibold">photo url</h2>
                    <input type="text" placeholder="Enter Photo Url" name="photo" className="input input-bordered input-lg w-full " />
                </div>


                <input className="color-[#fff] text-2xl text-white w-full mt-4 bg-[#0060AF] h-14 text-center rounded-md" type="submit" value="Book Now" />


            </div>

        </form>
    );
};

export default AddServiceDoctor;