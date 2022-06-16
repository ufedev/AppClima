import { createContext, useState, useEffect } from "react"
import axios from "axios"
const ClimaContext = createContext()

const ClimaProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState({
    pais: "",
    ciudad: "",
  })
  const [alerta, setAlerta] = useState("")

  const [climaResultado, setClimaResultado] = useState({})
  const [cargando, setCargando] = useState(false)
  const [sinResult, setSinResult] = useState(false)
  function changeBusqueda(e) {
    setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
  }

  const handleBuscar = async (datos) => {
    setCargando(true)
    setSinResult(false)
    try {
      const apiID = import.meta.env.VITE_API_KEY
      const { pais, ciudad } = datos
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${apiID}`
      const { data } = await axios(url)
      const { lon, lat } = data[0]

      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiID}`
      const { data: clima } = await axios(urlClima) // data: clima se renombra la variable data por clima para que no se pise con la otra variable data creada mas arriba

      setClimaResultado(clima)
    } catch (err) {
      setSinResult("No hubo resultados")
    } finally {
      setCargando(false)
    }
  }

  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        changeBusqueda,
        handleBuscar,
        alerta,
        setAlerta,
        climaResultado,
        cargando,
        sinResult,
      }}
    >
      {children}
    </ClimaContext.Provider>
  )
}

export { ClimaProvider }
export default ClimaContext
