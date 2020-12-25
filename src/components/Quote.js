import React from 'react';
import sheet from './Quote.module.css';

const Quote = ({author=false, quote }) => {

    const show = author ? null : (
        <button className={sheet.quoteAuthor}>
            <div>
                {quote.quoteAuthor}
                <small>{quote.quoteGenre}</small>
            </div>
            <span className='material-icons'>arrow_right_alt</span>
        </button>
    );

    return (
        <div className={sheet.container}>
            <div className={sheet.quoteBox}>
                {quote.quoteText}
            </div>
            { show }
        </div>
    );
}

export default Quote;
