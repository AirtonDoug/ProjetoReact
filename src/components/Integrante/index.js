import './Integrante.css'

const Integrante =(props)=>{
    return(
        <div className="integrante">
            <div className="cabecalho">
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.descricao}</h5>
            </div>
        </div>
    )
}
export default Integrante