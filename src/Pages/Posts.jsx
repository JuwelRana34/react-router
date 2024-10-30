import { Link, useLoaderData} from "react-router-dom"

function Posts() {
   const data = useLoaderData()

  console.log(data)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {data.map(post=>{
        const { title , body , id} = post
        return <div key={id}  className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
            <Link to={`/post/${id}`} className="btn btn-primary">see details</Link>
          </div>
        </div>
      </div>
      })}
      
    </div>
  )
}

export default Posts