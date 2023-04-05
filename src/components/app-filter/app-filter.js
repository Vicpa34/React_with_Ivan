import "./app-filter.css";


const AppFilter = () => {
  return(
    <div className="btn-group">
      <button
        className="btn btn-light"
        type="button">
          Vse sotrudniki
        </button>

        <button
        className="btn btn-outline-light"
        type="button">
          Sotrudniki na povishenie
        </button>

        <button
        className="btn btn-outline-light"
        type="button">
          Z/p bolshe 1000 usd
        </button>
    </div>
  )
} 

export default AppFilter;