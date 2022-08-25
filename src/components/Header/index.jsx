import { GiPhone } from "react-icons/gi"
import { BsBag } from "react-icons/bs"

import "./styles.scss"
import { Link } from "react-router-dom"

export const Header = ({ phone = "11 4191 4399", prodAmount, totalValue }) => {
  const navLinks = [
    {
      to: "/home",
      name: "HOME",
    },
    {
      to: "/category/camisas",
      name: "CAMISAS",
    },
    {
      to: "/category/blusas",
      name: "BLUSAS",
    },
    {
      to: "/category/calcas",
      name: "CALÇAS",
    },
    {
      to: "/category/acessorios",
      name: "ACESSÓRIOS",
    },
    {
      to: "/category/outlet",
      name: "OUTLET",
    },
  ]
  const NavHeader = () => {
    return (
      <nav className="header-nav">
        {navLinks.map(({ to, name }) => (
          <Link key={name} to={to}>
            {name}
          </Link>
        ))}
      </nav>
    )
  }

  return (
    <header>
      <div className="top">
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
      </div>
      <NavHeader />
    </header>
  )
}
