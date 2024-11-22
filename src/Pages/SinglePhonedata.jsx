import { Link, useLoaderData } from "react-router-dom"

function SinglePhonedata() {
    const phone = useLoaderData()
 
  return (
    <div>
        <div key={phone.id} className="card card-compact bg-base-100 w-96 border mx-auto my-8 hover:shadow-lg  pt-4">
                    <figure>
                      <img
                        src={phone.image}
                        alt={phone.name} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title justify-center ">{phone.name}</h2>
                      <p className="text-justify">{phone.description}</p>
                      <h2 className="text-lg font-semibold bg-clip-text  text-transparent bg-gradient-to-r from-blue-500 to-red-800"> Price: $ {phone.price}</h2>
                      
                    </div>
                  </div>
    </div>
  )
}

export default SinglePhonedata