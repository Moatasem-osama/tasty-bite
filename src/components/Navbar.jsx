import logo from '../assets/Logo.png'
import react from '../assets/react.svg'
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
        <ul className="elements">
            <li><a href="#home">Home</a></li>
            <li><a href="#recipes">Recipes</a></li>
            <li><a href="#about">About</a></li>
        </ul>
      <img className='react' src={react} alt="react" />
    </div>
  )
}
