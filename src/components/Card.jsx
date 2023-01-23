const Card = ({ character }) => {

    return (
        <div className="card-group col-sm-6 col-md-4 col-lg-3">
            <div className="card m-1"  style={{ width: "18rem" }}>
                <img src={character.images.main} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{character.name.first} {character.name.last}</h5>
                    <p className="card-text"><b>Species:</b> {character.species}</p>
                    <p className="card-text"><b>Quote:</b> {character.sayings[0]}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
