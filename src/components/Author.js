import axios from "axios";
import React, { Component } from "react";
import Quote from './Quote';
import Navbar from "./Navbar";
class Author extends Component {

    componentDidMount() {
        let author = this.props.match.params.author;
        this.getQuotes(author).then((result) => {
            const data = result.data.data;
            this.setState({
                quotes: data
            });
        })
    }

    state = {
        quotes: null
    }

    async getQuotes(author) {
        return await axios
            .get('https://quote-garden.herokuapp.com/api/v3/quotes', {
                params: {
                    author: author
                }
            });
    }

    handleBackPressed = () => {
        this.props.history.push('/');
    }

    render() {
        const show = this.state.quotes === null ?
            (<span>Loading...</span>) :
            (<Quote author quotes={this.state.quotes} />);

        return (
            <>
                <Navbar name={ this.props.match.params.author } author onback={this.handleBackPressed}/>
                <section style={{paddingTop : 20, paddingBottom : 20}}>
                    {show}
                </section>
                <footer>
                    Ralph Placide @ DevChallenges.io
                </footer>
            </>
        );
    }
}

export default Author;
