import { useState } from "react"
import MiApi from "./components/MiApi"
import Navbar from "./components/Navbar"
import CardList from "./components/CardList"
import Footer from "./components/Footer"



const App = () => {

  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState("")

  return (
    <>
      <MiApi setCharacters={setCharacters} />
      <Navbar setSearch={setSearch} />
      <p className="title">Characters</p>
      <CardList characters={characters} search={search}/>
      <Footer/>
    </>
  )
}

export default App
