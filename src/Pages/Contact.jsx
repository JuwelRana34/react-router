import { Link, useLoaderData } from "react-router-dom"

function Contact() {
  const data = useLoaderData()
  console.log(data)
  return (
    <>
    <div className="flex justify-evenly items-center bg-green-50 container mx-auto">
      <img className="w-32 h-32" src={data.
avatar_url} alt=""  />
      <h1>flowers: {data.followers}</h1>
    </div>
    <div className="text-center">
      
      Portfolio:<Link to={data.blog} className="text-lg font-semibold text-blue-500 "> Juwel Rana</Link>
      
      <p></p>
    </div>

    
    </>
  )
}

export default Contact

 export const apiData = async ()=>{
   const response =  await fetch('https://api.github.com/users/JuwelRana34')
   return response.json()
 }
