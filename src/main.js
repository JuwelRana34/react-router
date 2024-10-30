import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Posts from "./Pages/Posts"
import Post from "./Pages/Post"

export const postData =async ()=>{

const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
return response.json()

}
export const postDatils = async (id)=>{
const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
return response.json()

}





export {Home, About, Contact, Posts, Post}