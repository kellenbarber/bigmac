import React from "react";

import Form from "./Form";
import getCountry from "./getCountry";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country : ""
        };
    }

    componentDidMount() {
        getCountry().then(country => {
            this.setState({
                country: country
            });
        })
    }

    render() {
        return (
            <Form country={this.state.country}/>
        );
    }
}

export default App;