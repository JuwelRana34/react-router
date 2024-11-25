import axios from "axios";
import Hero from "../Components/Hero/Hero";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const users = () => {
      axios
        .get("https://phones-collections.vercel.app/")
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    users();
  }, [user]);

  const handelDelete = (id) => {
    axios
      .delete(`https://phones-collections.vercel.app/delete/${id}`)
      .then(() => {
        const updateduser = user.filter((user) => user.id !== id);
        setUser(updateduser);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    axios
      .post("https://phones-collections.vercel.app/user", {
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        e.target.reset();
        //  alert('Data posted successfully:', response.data)
        setUser([...user, response.data]);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  return (
    <>
      <Hero />
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handelsubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>

      <ul className="text-center">
        {user.map((i, indexedDB) => (
          <li key={i._id}>
            {" "}
            <span
              className={`${
                indexedDB % 2 === 0 ? "text-green-500" : "text-violet-500"
              }`}
            >
              {i.name}
            </span>{" "}
            {i.email}{" "}
            <button
              className=" rounded-md bg-red-500 text-white py-2 px-3"
              onClick={() => handelDelete(i._id)}
            >
              delete
            </button>{" "}
            <Link to={`/update/${i._id}`} className="btn">
              Update
            </Link>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
