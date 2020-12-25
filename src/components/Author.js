import axios from "axios";
import React, { Component } from "react";
import Quote from './Quote';
import Navbar from "./Navbar";
class Author extends Component {

    componentDidMount() {
        this.getQuote().then((result) => {
            const data = result.data.data[0];
            console.log(data.quoteText);
            this.setState({
                randomQuote: data
            });
        })
    }

    state = {
        randomQuote: null
    }

    async getQuotes() {
        return await axios
            .get('https://quote-garden.herokuapp.com/api/v3/quotes', {
                params: {
                    
                }
            });
    }

    handleNewRandomQuote = () => {
        this.getRandomQuote().then((result) => {
            const data = result.data.data[0];
            console.log(data);
            this.setState({
                randomQuote: data
            });
        })
    }

    render() {
        const show = this.state.randomQuote === null ? (<span>Loading...</span>) : (<Quote quote={this.state.randomQuote} />);
        return (
            <>
                <Navbar onNewRandomQuote={this.handleNewRandomQuote} />
                <section>
                    {show}
                </section>
                <footer>
                    Ralph Placide @ DevChalenges.io
                </footer>
            </>
        );
    }
}

export default Author;
