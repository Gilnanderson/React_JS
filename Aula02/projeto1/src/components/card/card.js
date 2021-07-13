import "./card.css";
import filme from "./filme.jpg";

const Card = ({listaCard}) => {
    return (
        <div className="cards">{
            listaCard.map((card) => {
                return (
                    
                <div className="card">
                    <div className="poster"><img src={filme} alt="poster do filme"/></div>
                    <div className="info" key={card.id}><p>{card.nome}</p><p>{card.nota}</p><p>{card.tempo}</p></div>
                </div>
                )
            })
        }
            
        </div>
    )
}

export default Card;