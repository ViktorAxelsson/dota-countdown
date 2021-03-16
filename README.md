This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Dota Countdown
This is a simple webapp for keeping track of various events in a game of DOTA. A main timer runs and as events get closer they will start flashing to alert the player. The timer can be started from preset times using the "Start gametime xx:xx" buttons while in the lobby or from the custom time input field. Input must be on the format NN:NN where N are numbers.
If the timings in the game change the timings can be changed in the file config.json. All timings in the config.json file are in minutes.

### config.json
|Name|Value|
|---|---|
|BOUNTY_INTERVAL | Time in minutes between bounty rune spawns|
|POWER_RUNE_INTERVAL | Time between power rune spawns|
|TOME_INTERVAL | Time between tome availability in the shop|
|NEUTRAL_ITEM_INTERVALS | Array containing neutral item game time spawn times |
|OUTPOST_DELAY | Delay before outposts become available |
|OUTPOST_INTERVAL | Time between outpost bonuses after initial delay |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
