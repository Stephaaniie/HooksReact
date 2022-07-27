import { useContext } from "react"
import { UseContext } from "./context/UseContext"

export const HomePage = () => {
  const {user} = useContext(UseContext);  
  return (
      <>
          <h1>HomePage <small>{ user?.name }</small> </h1>
          <hr />
          <pre aria-label="pre">
            {JSON.stringify(user, null, 3)}
          </pre>
      </>
    )
  }
  