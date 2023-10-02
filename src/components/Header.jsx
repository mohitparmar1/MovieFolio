import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <Link to='/'><span className="logo-text" style={{textDecoration:"none"}}>MovieFolio.</span></Link>
        </div>
    </div>
  )
}

export default Header
