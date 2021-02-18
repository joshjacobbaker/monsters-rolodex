import { Component } from 'react'
import { CardList } from './components/card-list/card-list.component.jsx'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [
        { name: 'Frankenstein', id: 'asdfdasf' },
        { name: 'Boogie Monster', id: 'afadsfasd' },
        { name: 'Lockness Monster', id: 'afdadsfads' }
      ]
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {
    return (
      <div className='App'>
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    )
  }
}

export default App
