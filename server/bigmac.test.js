// bigmac.test.js

import {
    parseBigMacCsvToObject
} from "./bigmac";;
import {
    expectedBigMacData
} from "./bigmacdata";

it("should correctly parse bigmac data return from github", async () => {
    const bigMacDataObject = await parseBigMacCsvToObject(expectedBigMacData);

    expect(typeof bigMacDataObject).toEqual("object");

    expect(bigMacDataObject.Vietnam.Country).toEqual("Vietnam");
    expect(bigMacDataObject.Vietnam.LocalPrice).toEqual("60000.0");
    expect(bigMacDataObject.Vietnam.DollarPPP).toEqual("12170.385395537525");
});
