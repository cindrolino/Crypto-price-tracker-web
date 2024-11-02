import './Navbar.css'

const Navbar = () =>{
    return(
        <header className='header'>
            <div className="nav">
                <ul className="nav-menu">

                    <li><a href="/">Home</a></li>
                    <li><a href="/xo">X-O</a></li>
                    <li><a href="/ship-sink" >Ship sink</a></li>
                    <li><a href="/sudoku">Sudoku</a></li>
                    <li><a href='/contact' className="nav-contact">Contact</a></li>
                    <li><input type="text" placeholder='Search'/></li>

                </ul>
            </div>  
        </header>
    )
}
export default Navbar;