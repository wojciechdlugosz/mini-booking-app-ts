import Hotel from "./Hotel/Hotel"

// @ts-nocheck
const Hotels = () => {
  return (
    <div className="container">
      <div style={{border: '1px solid #cdcdcd', padding: '10px'}}>
        <h2>Oferty:</h2>
        <Hotel />
        <Hotel />
        <Hotel />
      </div>
    </div>
  )
}

export default Hotels