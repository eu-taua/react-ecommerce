import { memo } from "react"
import "./styles.scss"

const TopComponent = () => {
  const Widget = ({ itens }) => {
    return (
      <nav className="widget">
        {itens.map(item => (
          <a key={item}>
            <span>{item}</span>
          </a>
        ))}
      </nav>
    )
  }
  const SingupNews = () => {
    return (
      <div className="signup-news">
        <span>CADASTRE-SE E RECEBA NOSSAS NOVIDADES</span>
        <div className="buton-input">
          <input />
          <button>CADASTRAR</button>
        </div>
      </div>
    )
  }
  return (
    <div className="top">
      <Widget itens={["CONTATO", "FRETES E ENTREGA", "COMO COMPRAR", "TROCAS E DEVOLUÇÕES"]} />
      <Widget itens={["SOBRE", "NA MÍDIA", "SEGURANÇA", "POLÍTICAS"]} />
      <SingupNews />
    </div>
  )
}

export const Top = memo(TopComponent)
