import { Bottom } from "./Bottom"
import "./styles.scss"

import { Top } from "./Top"
export const Header = props => {
  return (
    <header>
      <Top {...props} />
      <Bottom />
    </header>
  )
}
