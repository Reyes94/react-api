const Card = ({ characters, search }) => {

    return (
        <div className="container col-10">
            <div className="row">
                {characters
                    .sort((a, b) => a.name.first.localeCompare(b.name.first))
                    .filter((item) => (item.name.first + " " + item.name.last).toLowerCase().includes(search.toLowerCase()))
                    .map((item) => (
                        <div key={item.id} className="card-group col-sm-6 col-md-4 col-lg-3">
                            <div className="card m-1">
                                <img src={item.images.main} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{item.name.first} {item.name.last}</h5>
                                    <p className="card-text"><b>Species:</b> {item.species}</p>
                                    <p className="card-text"><b>Quote:</b> {item.sayings[0]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )}

    export default Card

//item: representación de cada uno de los elementos
//.sort: ordena el contenido, comparando 2 elementos
//.filter: filtra por la condición dada
//.includes(): toma cada letra ingresada para la búsqueda
//.map: itera los datos del array
//si filter va antes del map, se itera el arreglo creado con filter