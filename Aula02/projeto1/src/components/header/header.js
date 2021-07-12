import "./header.css";




const Header = ({listaLink}) => {
    console.log("listando props de Header", listaLink);
    return (
      <div className="container-header">

        <div id="logo"><i className="fas fa-jedi"></i> Cinemateca</div>
        
        
        <div className="estilo-links">
          {
            listaLink.map((link)=> {
              return <button className="botao"><a href="{link.id}" key={link.id} className={link.label}>{link.label}</a></button>
            })
          }
        </div>
      </div>
    );
  };

export default Header;