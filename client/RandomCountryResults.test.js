// RandomCountryResults.test.js

import React from "react";
import RandomCountryResults from "./RandomCountryResults";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const data = {
    "Country":"Australia",
    "LocalPrice":"5.3",
    "DollarPrice":"3.743655",
    "DollarPPP":"1.0750507099391482"
};

it("should correctly compute the big macs", () => {
    const randomCountryResults = shallow(<RandomCountryResults bigMacData={data} amount={123}/>);
    expect(randomCountryResults.find(".numberOfBigMacs").text()).toEqual("You could buy 32 Big Macs in Australia with 123!");
});

it("should correctly compute the local value", () => {
    const randomCountryResults = shallow(<RandomCountryResults bigMacData={data} amount={123}/>);
    expect(randomCountryResults.find(".localValue").text()).toEqual("Your 123 is worth about 174.13 in Australia.");
});