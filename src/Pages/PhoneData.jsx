import axios from "axios"
import { useState } from "react";
import { Link } from "react-router-dom";


function PhoneData() {
    const [phones ,setPhones] = useState([])

    axios.get('https://phones-collections.vercel.app/phones')
       .then((response) => {
            // handle success
            setPhones(response.data);
    
        })
       .catch((error) => {
            // handle error
            console.log(error);
        });
  return (
    <div className="">

            <div className="grid my-5 w-[80%] md:w-auto   gap-4 justify-self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {phones.map((phone) => (
                   
                    <div key={phone.id} className="card card-compact bg-base-100 w-full md:w-96 border hover:shadow-lg  pt-4">
                    <figure>
                      <img
                        src={phone.image}
                        alt={phone.name} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{phone.name}</h2>
                      
                      <div className="card-actions justify-end">
                        <Link to={`/phone/${phone.id}`} className="btn bg-blue-500 text-white hover:bg-blue-600">Buy Now</Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

    </div>
  )
}

export default PhoneData