import { GiPhone } from "react-icons/gi"
import { BsBag } from "react-icons/bs"

import "./styles.scss"

export const Header = ({ phone = "11 4191 4399", prodAmount, totalValue }) => {
  return (
    <header>
      <div className="phone">
        <GiPhone />
        <span>{phone}</span>
      </div>
      <span className="logo">AVIATO</span>
      <div className="bag">
        <BsBag />
        <div>
          <span>({prodAmount}) - </span>
          <b>R$ {totalValue.toFixed(2)}</b>
        </div>
      </div>
    </header>
  )
}
