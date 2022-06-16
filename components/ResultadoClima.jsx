import useClima from "../hooks/useClima"

const ResultadoClima = () => {
  const { climaResultado } = useClima()

  const { name } = climaResultado

  const k = 273
  return (
    <div className="contenedor clima">
      <h3>La temperatura actual de {name} es:</h3>
      <p>
        {parseInt(climaResultado.main.temp - k)}
        <span>&#8451;</span>
      </p>
      <div className="temp_min_max">
        <p>
          Min: {parseInt(climaResultado.main.temp_min - k)}
          <span>&#8451;</span>
        </p>
        <p>
          Max: {parseInt(climaResultado.main.temp_min - k)}
          <span>&#8451;</span>
        </p>
      </div>
    </div>
  )
}

export default ResultadoClima
