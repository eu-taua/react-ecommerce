import { memo } from "react"
import { GrFacebook, GrTwitter, GrInstagram, GrTumblr, GrPinterest } from "react-icons/gr"
import "./styles.scss"

const BottomComponent = () => {
  return (
    <div className="bottom">
      <span>
        <b>COPIRIGHT © 2019</b>
      </span>
      <nav className="menu">
        <a>
          <span>FAQ</span>
        </a>
        <a>
          <span>MINHA CONTA</span>
        </a>
        <a>
          <span>MEUS PEDIDOS</span>
        </a>
      </nav>
      <nav className="social">
        <a>
          <GrFacebook />
        </a>
        <a>
          <GrTwitter />
        </a>
        <a>
          <GrInstagram />
        </a>
        <a>
          <GrTumblr />
        </a>

        <a>
          <GrPinterest />
        </a>
      </nav>
    </div>
  )
}

export const Bottom = memo(BottomComponent)
