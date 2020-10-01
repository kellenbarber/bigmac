// Form.test.js

import React from "react";
import Form from "./Form";
import { configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it("should return null without props", () => {
    const form = shallow(<Form />);
    expect(form.type()).toEqual(null);
});