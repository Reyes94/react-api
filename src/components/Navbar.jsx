const Navbar = ({ setSearch }) => {

  return (

    <nav className="navbar navbar-dark sticky-top color-nav">
      <div className="container-fluid">
        <a className="navbar-brand">FUTURAMA</a>
        <div className="col-4 mx-auto my-1" role="search">
          <input className="form-control w-100" onChange={(e) => setSearch(e.target.value.trim())} type="search" placeholder="Search character" aria-label="Search" />
        </div>
      </div>
    </nav>

  )
}

export default Navbar