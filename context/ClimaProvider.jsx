import { createContext, useState, useEffect } from "react"

const ClimaContext = createContext()

const ClimaProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState({
    pais: "",
    ciudad: "",
  })
  const [alerta, setAlerta] = useState("")
  function changeBusqueda(e) {
    setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
  }

  const handleBuscar = () => {}

  return (
    <ClimaContext.Provider
      value={{ busqueda, changeBusqueda, handleBuscar, alerta, setAlerta }}
    >
      {children}
    </ClimaContext.Provider>
  )
}

export { ClimaProvider }
export default ClimaContext
