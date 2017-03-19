#  Montreal Open Data winter trails conditions React Native App

(Project not fully completed: missing tests, code cleanup and refactoring, etc.)

This React Native App displays the current Montreal winter trails conditions fetched from [a simple NodeJS RESTful service](https://github.com/loic-d/montreal-winter-trails-conditions-service/).
You can set-up your own back-end data service and extend this application to display any kind of data.
For faster development, [Ignite](https://github.com/infinitered/ignite) was used. Ignite is a great React Native boilerplate that provides useful features (Routing, UI Components & styles, Testing, API wrapper, I18n, CLI) to get you up and running quickly.

The App contains 3 screens:
* Home
* List of trails
* Trail details

![alt text](https://cloud.githubusercontent.com/assets/3925905/20248105/1764a9e8-a9ab-11e6-9e5b-a307befcc735.png "Home Screen")
![alt text](https://cloud.githubusercontent.com/assets/3925905/20248106/176d45bc-a9ab-11e6-8385-e3eac3e8291e.png "Trails List Screen")
![alt text](https://cloud.githubusercontent.com/assets/3925905/20248107/176dd90a-a9ab-11e6-88fd-d178b0aa2fd1.png "Trail Details Screen")

## How to Setup

* Install [React Native](https://facebook.github.io/react-native/) if you don't have it yet

* If you want to use the Montreal winter trails conditions data service, you will first have to [set-up and run the project locally](https://github.com/loic-d/montreal-winter-trails-conditions-service/) and generate an applicationID on [Open Weather App](http://openweathermap.org/)

* `git clone git@github.com:loic-d/montreal-winter-trails-conditions-ui.git`

* `cd montreal-winter-trails-conditions-ui`

* `npm install`

* In `/App/Config/AppSettings.js`, replace your Open Weather Map ApplicationID

* To build for iOS, run `react-native run-ios`

* To build for Android, run Genymotion and `react-native run-android`
