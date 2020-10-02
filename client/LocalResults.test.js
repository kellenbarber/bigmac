// LocalResults.test.js

import React from "react";
import LocalResults from "./LocalResults";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const data = {
    "Country":"United States",
    "LocalPrice":"4.93",
    "DollarPrice":"4.93",
    "DollarPPP":"1.0"
};

it("should render null without props", () => {
    const localResults = shallow(<LocalResults />);
    expect(localResults.type()).toEqual(null);
});

it("should render with props", () => {
    const localResults = shallow(<LocalResults bigMacData={data} amount={123}/>);
    expect(localResults.type()).not.toEqual(null);
});

it("should correctly compute the big macs", () => {
    const localResults = shallow(<LocalResults bigMacData={data} amount={123}/>);
    expect(localResults.find(".localResults h2").text()).toEqual("You could buy 24 of Big Macs in your country.");
});