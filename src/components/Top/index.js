import Integrante from '../Integrante'
import './Top.css'

const Top = (props) =>{
    return(
        props.integrantes.length >0 ? <section className='top'>
            <h3 style={{borderColor : props.corPrimaria}}> {props.nome} </h3>
            <div className='integrantes'>
                {props.integrantes.map(integrante => <Integrante 
                key={integrante.nome} 
                nome = {integrante.nome} 
                corDeFundo = {props.corPrimaria}
                descricao = {integrante.descricao}
                imagem = {integrante.imagem} 
                />
                )}
                

            </div>
        </section>
        : ''
    )
}
export default Top