import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

const actions = {
  increment: () => ({ type: 'INCREMENT' }),
  decrement: () => ({ type: 'DECREMENT' })
}

const initialState = { counter: 1 }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { counter: state.counter + 1 }
    }
    case 'DECREMENT': {
      return { counter: state.counter - 1 }
    }
    default:
      return state
  }
}

const store = createStore(reducer)

class App extends React.Component {
  render () {
    return (
      <div>
        <span>{this.props.counter}</span><br />
        <button onClick={() => this.props.increment()}>Increment</button>
        <button onClick={() => this.props.decrement()}>Decrement</button>
      </div>
    )
  }
}

const Container = connect(
  function mapStateToProps (state) {
    return state
  },
  function mapDispatchToProps (dispatch) {
    return {
      increment: () => { dispatch(actions.increment()) },
      decrement: () => { dispatch(actions.decrement()) }
    }
  }
)(App)

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
)
