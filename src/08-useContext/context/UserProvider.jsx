import { useState } from "react"
import { UseContext } from "./UseContext"

export const UserProvider = ({children}) => {
    const [user, setUser] = useState();

    return (
    <UseContext.Provider value={{user, setUser}}>
        {children}
    </UseContext.Provider>
    )
}
