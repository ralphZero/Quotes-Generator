import React from 'react';
import sheet from './Quote.module.css';
import { Link } from 'react-router-dom';

const Quote = ({author = false, quotes}) => {

    const show = author ? null : (
        <Link className={sheet.quoteAuthor} to={'/'+quotes[0].quoteAuthor}>
            <div>
                {quotes[0].quoteAuthor}
                <small>{quotes[0].quoteGenre}</small>
            </div>
            <span className='material-icons'>arrow_right_alt</span>
        </Link>
    );

     const list = quotes.map((quote) => {
         return (
            <div className={sheet.quoteBox}>
                {quote.quoteText}
            </div>
         )
     })

    return (
        <div className={sheet.container}>
            { list }
            { show }
        </div>
    );
}

export default Quote;
