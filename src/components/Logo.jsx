import { NavLink } from "react-router"

const Logo = props => {
    const { className = "", link = '/', ...rest } = props

    return (
        <NavLink to={link}>
            <button type="button" className={`max-w-[200px] block cursor-pointer`} {...rest}>
                <img src="/public/logo.png" alt="" />
            </button>
        </NavLink>
    )
}

export default Logo