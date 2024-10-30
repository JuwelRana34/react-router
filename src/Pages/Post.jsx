import { Link, useLoaderData } from "react-router-dom"



function Post() {
    const {id, title, body}= useLoaderData()

  return (
    <div className="card bg-orange-200 text-gray-800 w-4/6 mx-auto my-5">
  <div className="card-body">
    <h2 className="card-title">{id}</h2>
    <p className="text-xl font-semibold capitalize">{title}</p>
    <p>{body}</p>
    <div className="card-actions justify-end">
      <Link to='/Posts'><button className="btn">Back to Posts</button></Link>
    </div>
  </div>
</div>
  )
}

export default Post