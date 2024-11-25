import axios from "axios"
import { useLoaderData, useNavigate } from "react-router-dom";


function Update() {
 const {data} = useLoaderData()
 const {_id, email} = data
  const navigate = useNavigate()

    const handelUpdate =(e)=>{
        e.preventDefault();
        const {name, email} = e.target
        axios.put(`https://phones-collections.vercel.app/users/${_id}`, {
         email: email.value,
         name: name.value,
         
       })
       .then((res) => {
            console.log('User updated successfully',res)
            e.target.reset(),
            navigate('/')
       })
      }


  return (
    <div>
    <h2>update user:</h2>
    <form className="text-center space-y-4  pb-5" onSubmit={handelUpdate}>
      <input className="border p-2 focus:outline-none rounded-md" type="text" name="name" placeholder="name" required />
<br />
      <input className="border p-2 focus:outline-none rounded-md" type="text" name="email" defaultValue={email} placeholder="email" required />
     <br /> <button className="btn ">Update</button>
    </form>
    {email}
    
   </div>
  
  )
}

export default Update