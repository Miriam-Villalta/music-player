

const Header = () => {
    return(
<header className="hder">
    <div className="icon-search">
        <div className="icon-search--icon">
            <img src="src\images\1280px-Deezer_logo.svg.png" alt="deezer logo" className="icon-search--icon__logo"/>
        </div>
        <div className="icon-search--search">
            <img src="src\images\lupa.png" alt="lens" className="icon-search--search__lens"/>
            <input type="text" name="Barra de buscador" className="icon-search--search__input" placeholder="Search artists"/>
        </div>
    </div>

    <nav className="nav-bar">
        <a href="" className="nav-bar--a">Home</a>
        <a href="" className="nav-bar--discover">Discover</a>
        <a href="" className="nav-bar--a">Recents</a>
        <a href="" className="nav-bar--a">Library</a>
        <a href="" className="nav-bar--a">User
            {/*<img src="" alt=""/>*/}
        </a>
    </nav>
</header>)
};

export default Header;