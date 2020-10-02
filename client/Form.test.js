// Form.test.js

import React from "react";
import Form from "./Form";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it("should return null without props", () => {
    const form = shallow(<Form />);
    expect(form.type()).toEqual(null);
});

it("should return render header correctly with 'United States' as country prop", () => {
    const form = shallow(<Form country={"United States"}/>);
    expect(form.type()).not.toEqual(null);
    expect(form.find(".countryHeader").text()).toEqual("You are in the United States");
});

it("should return render header correctly with 'Canada' as country prop", () => {
    const form = shallow(<Form country={"Canada"}/>);
    expect(form.type()).not.toEqual(null);
    expect(form.find(".countryHeader").text()).toEqual("You are in Canada");
});