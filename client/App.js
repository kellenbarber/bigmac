import React from "react";

import Form from "./Form";
import getCountry from "./getCountry";

import "./styles.css";
import BigMac from "./img/bigmac.jpg";

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
            <div className={"bigMacApp"}>
                <Form country={this.state.country}/>
            </div>
        );
    }
}

export default App;