import { useContext } from "react"
import { UseContext } from "./context/UseContext"

export const LoginPage = () => {
  const { user, setUser } = useContext(UseContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label="pre">
        {JSON.stringify(user, null, 3)}
      </pre>
      <button className="btn btn-primary" onClick={() => setUser({ id: 123, name: 'Juan', email: 'juan@google.com' })}>
        Establecer usuario
      </button>
    </>
  )
}
