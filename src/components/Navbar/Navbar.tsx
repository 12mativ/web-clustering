import NavbarView from "./NavbarView"
import {NavbarProps} from "./types"

function Navbar({width="100%", height}: NavbarProps) {
  return (
    <NavbarView width={width} height={height}/>
  )
}

export default Navbar