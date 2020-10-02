## Installation & Usage
Just run `npm install` to install dependencies. Run `npm run build && npm run start` on the first run to build & run the application. On subsequent occurrences you can just do `npm run start`.

## Calculations
I wasn't sure that I understood what the units in the provided price calculations represented since they didn't exactly match headers in the Big Mac csv data, and I don't have a good intuition for the prices of hamburgers in other countries. I went with the approach I did because the conversions approximately checked out when I compared them to the results I got at the [this website](https://fxtop.com/en/historical-currency-converter.php), and because the method was the same as what I was taught for converting units back in physics class. The results seem reasonable even if they're not always exactly what I would expect.

##  Design decisions: frontend
I opted against using redux or any other state management framework for this project since it's not too complicated, and although redux is pretty small it would still add some weight and boilerplate that we don't need. I used a class-based component for the root-level since I needed to make a call for location data on page load, and the `componentDidMount` method provided a good way to do that.

## Design decisions: backend
I used Express for the backend of this application since it's fairly standard, easy to read and reason about, and good for quick prototyping. 

I used Axios for calls to 3rd party services (github and ipvigilante) because I'd heard good things about the library and I wanted to learn something new in this project, and I really didn't want to use the native `http` package if I didn't have a compelling reason. It turned out to be a good server-side alternative to the Fetch API. I would definitely use it again. All calls to third party services are proxied through the backend.

As mentioned above the call for location data happens on `componentDidMount`, but the call for the Big Mac data occurs when the Express app starts listening. This makes it very likely that the request and any necessary processing will have occurred before the user enters a value and submits. The Big Mac data is cleaned - I only use the most recent values, and unnecessary fields are removed - and stored in memory so that additional calls are unnecessary.