# Router History

## CheeZJokes Exercise

App generates jokes using the ICanHazDadJoke API for users to view and vote on. Refactor the app to use functional components with hooks.

### App Details

1. Displays a loading spinner until joke data is returned from the API.
2. Fetches 5 unique jokes then the spinner disappears.
3. Lists 5 jokes along with a “vote-up” button, a “vote-down” button, and the net score (up - down) for each joke. Users can vote, and the net score updates.

### Further Study

Add the following features:

- Store the list of jokes and their votes in local storage. When users visit the app, it should show saved jokes, rather than fetching new jokes.
- User should still be able to generate new jokes via a generate button. New jokes should replace the ones in local storage.
- Add reset button to reset the vote counts and clear out local storage.
- Add "lock" button to keep locked jokes on the page when requesting new jokes.

## React History Notes

### Class Components (Old)

- createReactClass, class extends React.Component
- Use constructor to accept props and define state
- Use `this` and bind functions to constructor
- Call render() to render component
- componentDidMount(), componentDidUpdate(), etc.
- Use class fields
- Define static defaultProps
- Used mixins
- Higher Order Components(HOC)
- Render props

### Function Components (New)

- Hooks use functions instead of classes
- Use closure to store state, refs, etc.
