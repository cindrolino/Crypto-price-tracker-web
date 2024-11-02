import './Feed.css'

const Feed = () =>{
    return(
        <>
        <div className='feed-h1'>
            <h1>Welcome to the Game Arena!</h1>
            <p><b>Here you can choose between 3 games</b></p>
        </div>
        <div className='images'>

            <div className='image-container'>
                <a href="/xo">
                <img className = "xo" src="./src/assets/tic-tac-to.jpg" 
                alt="tic-tac-toe"
                width="450"
                height="450"/></a>
                <a href="/sudoku">Tic-tac-toe</a>
            </div>

            <div className='image-container'>
                <a href="/sink-ship"><img className='ship' 
                src="./src/assets/sink-ship.png" 
                alt="sink-ship"
                width="450"
                height="450" /></a>
                <a href="/sudoku">Sink ship</a>
            </div>

            <div className='image-container'>
                <a href="/sudoku">
                <img className='sudoku' src="./src/assets/sudoku.jpg" 
                alt="sudoku" 
                width="450"
                height="450"
                title='sudoku'/></a>
                <a href="/sudoku">Sudoku</a>
            </div>

        </div>
        </>
    )
}
export default Feed;