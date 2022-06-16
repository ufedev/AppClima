import Formulario from "./Formulario"
import ResultadoClima from "./ResultadoClima"
import Spinner from "./Spinner"
import useClima from "../hooks/useClima"

const AppClima = () => {
  const { cargando, sinResult, climaResultado } = useClima()

  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? (
          <Spinner />
        ) : sinResult ? (
          <p>{sinResult}</p>
        ) : climaResultado?.name ? (
          <ResultadoClima />
        ) : (
          <p>Aquí se mostrara la busqueda</p>
        )}
      </main>
    </>
  )
}

export default AppClima
