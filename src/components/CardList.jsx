import Card from "./Card"

const CardList = ({ characters, search }) => {

    return (
        <div className="container col-10">
            <div className="row">
                {characters
                    .sort((a, b) => a.name.first.localeCompare(b.name.first))
                    .filter((item) => (item.name.first + " " + item.name.last).toLowerCase().includes(search.toLowerCase()))
                    .map((item) => (
                        <Card character={item} key={item.id} />
                    ))}
            </div>
        </div>
    )
}

export default CardList

//item: representación de cada uno de los elementos
//.sort: ordena el contenido, comparando 2 elementos
//.filter: filtra por la condición dada
//.includes(): toma cada letra ingresada para la búsqueda
//.map: itera los datos del array
//si filter va antes del map, se itera el arreglo creado con filter