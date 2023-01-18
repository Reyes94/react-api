import { useEffect} from "react";

const MiApi = ({ setCharacters }) => {

    const getData = async () => {
        const response = await fetch("https://api.sampleapis.com/futurama/characters/");
        const data = await response.json();
        setCharacters(data)
    };

    useEffect(() => {
        getData()
    }, [])
}

export default MiApi

// await: permite hacer la promesa de petición de datos
// fetch: realiza el consumo http
// j.son: accede al cuerpo de la promesa y lo pasa a un dato que entienda JS
