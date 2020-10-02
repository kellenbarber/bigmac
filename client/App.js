// App.js

import React from "react";

import Form from "./Form";
import LocalResults from "./LocalResults";
import RandomCountryResults from "./RandomCountryResults";
import getCountry from "./getCountry";

import "./styles.css";
import BigMac from "./img/bigmac.jpg";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country : "",
            bigMacData: {},
            value: null
        };

        this.updateBigMacs = this.updateBigMacs.bind(this);
        this.updateCurrencyAmount = this.updateCurrencyAmount.bind(this);
    }

    componentDidMount() {
        getCountry().then(country => {
            this.setState({
                country: country
            });
        });
    }

    updateBigMacs(data) {
        const bigMacs = JSON.parse(data); 
        this.setState({
            bigMacData: bigMacs
        });
    }

    updateCurrencyAmount(amount) {
        this.setState({
            value: amount
        });
    }

    render() {
        const {
            value,
            country,
            bigMacData
        } = this.state;
        return (
            <div className={"bigMacApp"}>
                {
                    country ? (
                        <Form
                            country={country}
                            updateBigMacs={this.updateBigMacs}
                            updateCurrencyAmount={this.updateCurrencyAmount}
                        />
                    ) : null
                }
                {
                    bigMacData.CurrentCountry ? (
                        <LocalResults
                            bigMacData={bigMacData.CurrentCountry}
                            amount={value}    
                        />
                    ) : null
                }
                {
                    bigMacData.RandomCountry ? (
                        <RandomCountryResults
                            bigMacData={bigMacData.RandomCountry}
                            amount={value}
                        />
                    ) : null
                }
            </div>
        );
    }
}

export default App;