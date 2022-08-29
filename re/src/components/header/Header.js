import { NavLink } from "react-router-dom"
import logo from "../../assets/image/logo.svg"
import HeaderStyled from "./HeadeStyled"

const Header = () => {
    return (
        <HeaderStyled>
        <NavLink to='/'>
        <img src={logo}/>
         </NavLink>
        <NavLink to='/about'>About </NavLink>
        <NavLink to='/posts'>Posts </NavLink>
        </HeaderStyled>
    )
}
export default Header