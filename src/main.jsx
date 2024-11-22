import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Home, About, Contact, Posts, Post, postDatils, SinglePhonedata, PhoneData } from "./main";
import { apiData } from "./Pages/Contact.jsx";
import { postData} from "./main";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";
import axios from "axios";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="phone/:id" 
      element={<SinglePhonedata/>}
      loader={({params})=>{

        return axios.get(`https://phones-collections.vercel.app/phone/${params.id}`)
         .then(res=>  res.data)
         .catch(err=> err.message)
    }}
      
      />
      <Route path="phones" element={<PhoneData />} />
      <Route path="Contact" element={<Contact />} loader={apiData} />
      <Route path="Posts" 
      element={<Posts />}
      loader={postData}
      /> 
      <Route path="post/:postDtails"
       element={<Post/>}
      //  loader={({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postDtails}`)
      // }
      loader={({params})=> postDatils(params.postDtails)}
      />
        
      
      <Route path="*" element={<ErrorPage/>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
