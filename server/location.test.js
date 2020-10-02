// location.test.js

import getLocationData from "./location";
import axios from "axios";

jest.mock("axios");

it("returns United States with known ip address", async () => {
    axios.get.mockResolvedValue({
        "data": {
        "status": "success",
        "data": {
            "ipv4": "67.183.246.10",
            "continent_name": "North America",
            "country_name": "United States",
            "subdivision_1_name": "Washington",
            "subdivision_2_name": null,
            "city_name": "Spokane",
            "latitude": "47.65670",
            "longitude": "-117.37850"
        }
    }});

    const country = await getLocationData();
    expect(country).toEqual("United States");
});

it("throws an error with an invalid IP address", async () =>  {
    axios.get.mockRejectedValue("Error: Request failed with status code 400");

    const error = await getLocationData("jhsdfsdf");
    expect(error).toEqual("There was a problem getting the IP Address");
});