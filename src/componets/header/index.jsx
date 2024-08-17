import './styles.css'
import logo from '../../logo.svg'

export default function header() {
    return (
        <header>
             <img className='logo' src={logo} alt="" srcset="" />
            <nav >
            <a className='ancora' href="">link1</a>
            <a className='ancora' href="">link2</a>
            <a className='ancora' href="">link3</a>
            <a className='ancora' href="">link4</a>
            </nav>

            <button>try enter</button>
        </header>
  

    )
}