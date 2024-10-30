import { useState } from "react";
import userContext from "./context";

// eslint-disable-next-line react/prop-types
const ContextProvider = ({children})=>{
    const [ User, setUser] = useState('demo')
    return(
        <userContext.Provider value={ {User , setUser}}>
            {children}
        </userContext.Provider>
    )

}

export default ContextProvider;