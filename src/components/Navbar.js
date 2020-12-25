import React from 'react';

const Navbar = ({author = false, onNewRandomQuote }) => {

    const first = author ? (
        <div>
            <button className='btn btn-arrow'>
                <span className='material-icons' style={{fontSize : 18}}>arrow_back</span>
            </button>
            <span>The author</span>
        </div>
    ) : null;

    const last = !author ? (
        <button onClick={() => onNewRandomQuote()} className='btn btn-white'>
            Random
            <span className='material-icons'>sync</span>
        </button>
    ) : null;

    return (
        <nav>
            {first}
            {last}
        </nav>
    );
}

export default Navbar;
