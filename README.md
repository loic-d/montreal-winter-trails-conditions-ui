#  Montreal Open Data winter trails conditions React Native App

Work in progress.

This React Native App displays the current Montreal winter trails conditions fetched from [a simple NodeJS REST application](https://github.com/loic-d/montreal-winter-trails-conditions-service/).
You can set-up your own back-end data service and extend this application to display any kind of data.
For faster development, [Ignite](https://github.com/infinitered/ignite) as been used. Ignite is a great React Native boilerplate that provides useful features (Routing, UI Components & styles, Testing, API wrapper, I18n, CLI) to get you up and running quickly.

The App contains 3 screens:
* Home
* List of trails
* Trail details

## How to Setup

* Install [React Native](https://facebook.github.io/react-native/) if you don't have it on your machine yet

* If you want to use the Montreal winter trails conditions data service, you will first have to [set-up and run the project locally](https://github.com/loic-d/montreal-winter-trails-conditions-service/) and generate an applicationID on [Open Weather App(]http://openweathermap.org/)

* `git clone git@github.com:loic-d/montreal-winter-trails-conditions-ui.git`

* `cd montreal-winter-trails-conditions-ui`

* `npm install`

* In `/App/Config/AppSettings.js`, replace your Open Weather Map ApplicationID

* To build for iOS, run `react-native run-ios`

* To build for Android, run Genymotion and `react-native run-android`
