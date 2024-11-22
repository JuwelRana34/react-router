import { useContext, useEffect, useState } from "react"
import userContext from "../context"

function About() {
// const [name , setName] = useState('')
const {User , setUser} = useContext(userContext)


  return (
    <div>
      <h1> About</h1>
      <p>{User}</p>
     
     <input type="text" className="border" onChange= {(e)=> setUser(e.target.value) } />
    </div>
  )
}

export default About