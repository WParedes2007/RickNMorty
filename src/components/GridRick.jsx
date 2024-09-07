import React from 'react'

export const GridRick = ({ char }) => {
  return (
    <>
      <div className="d-flex flex-row row row-cols-6">
        {
          char && char.map((char) => (
            <div className="row mt-4">
                        <div className="container bg-dark text-light card col-md-3 mb-4" style={{width: "18rem"}}>
                        <img className="card-img-top" src={`${char.image}`} alt={char.name}/>
                        <div className="card-body">
                        <h2 className="card-title">{char.name}</h2>
                        <h3 className="card-text">{char.species}</h3>
                        </div>
                        </div>
            </div>
          ))
        }
      </div>
    </>
  )
}