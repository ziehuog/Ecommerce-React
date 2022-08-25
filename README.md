### Redux
How
- managing global state
- easy to debug, predict
- catching data from server
Why: 
 - a sheer volume of state, and using every where
 - usually update state
 - complex logic code
 - a big project
 - debug
 => when you don't need => don't use
Architecture
- state management
- immutability(bat bien)

REDUCERS (in store)
- just a function with 2 params (state, action). Reducer will check action params to trigger logic updating state
rules: => PURE FUNCTION 
- new state always base on previous state
- cannot change state directly => return an object (immutability)
- don't have asynchronous code in reducer
- don't use build-in method like: random(), Date.now() => cannot predict
- don't use side effect like request server in reducer
ACTION
- an object {type: _, payload: _}
- action creator => a function to create an action => prevent duplicated object

DISPATCH
- is a function => take an action or action creator as a params => dispatch => update state in store

### Redux toolkit
- cover redux core
- contain package, function,... 
Why
- config
- prevent boilerplate
- packages
