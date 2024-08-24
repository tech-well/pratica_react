import './styles.css'
import logo from '../../logo.svg'

export default function header() {
    return (
        <header>
             <img className='logo' src={logo} alt="" srcset="" />
            <nav >
            <a className='ancora' href="">link 1</a>
            <a className='ancora' href="">link 2</a>
            <a className='ancora' href="">link 3</a>
            <a className='ancora' href="">link 4</a>
            </nav>

            <button>try enter</button>
        </header>
  

    )
}