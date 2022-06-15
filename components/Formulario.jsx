import useClima from "../hooks/useClima"

const Formulario = () => {
  const { busqueda, changeBusqueda, handleBuscar, setAlerta } = useClima()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios")
      return
    }
    setAlerta("")
    handleBuscar()
  }

  return (
    <div className="contenedor">
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            onChange={changeBusqueda}
            value={busqueda.ciudad}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">Pais</label>
          <select
            name="pais"
            id="pais"
            value={busqueda.pais}
            onChange={changeBusqueda}
          >
            <option value="">--Seleccione un País--</option>
            <option value="AR">Argentina</option>
            <option value="MX">México</option>
            <option value="CO">Colombia</option>
            <option value="US">Estados Unidos</option>
            <option value="ES">España</option>
          </select>
        </div>
        <input type="submit" value="Buscar" />
      </form>
    </div>
  )
}

export default Formulario
