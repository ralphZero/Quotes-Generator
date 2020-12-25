import axios from "axios";
import React, { Component } from "react";
import Quote from './Quote';
import Navbar from "./Navbar";
class Home extends Component {

    componentDidMount() {
        this.getRandomQuote().then((result) => {
            const data = result.data.data;
            console.log(data.quoteText);
            this.setState({
                randomQuote: data
            });
        })
    }

    state = {
        randomQuote: null
    }

    async getRandomQuote() {
        return await axios
            .get('https://quote-garden.herokuapp.com/api/v3/quotes', {
                params: {
                    limit: 1,
                    page: Math.floor(Math.random() * 72672)
                }
            });
    }

    handleNewRandomQuote = () => {
        this.getRandomQuote().then((result) => {
            const data = result.data.data;
            console.log(data);
            this.setState({
                randomQuote: data
            });
        })
    }

    render() {
        const show = this.state.randomQuote === null ? (<span>Loading...</span>) : (<Quote quotes={this.state.randomQuote} />);
        return (
            <>
                <Navbar onNewRandomQuote={this.handleNewRandomQuote} />
                <section>
                    { show }
                </section>
                <footer>
                    Ralph Placide @ DevChallenges.io
                </footer>
            </>
        );
    }
}

export default Home;
