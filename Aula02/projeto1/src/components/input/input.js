import "./input.css";

const Search = () => {
    return (
        <form className="search">
            <input type="text" className="inputCentral"></input>
            <button className="buscar" type="submit"><i className="fa fa-search"></i></button>
        </form>
    
    )
}

export default Search;