import React from 'react';

import Counter from './components/Counter/Counter';
import ActionButton from './components/ActionButtons/ActionButton';

import users from './users.json';

import './App.css';

class App extends React.Component {
  state = {
    users,
    isSortingAscending: true,
  };

  handleSortUsersByName = () => {
    this.state.isSortingAscending ? (
      this.state.users.sort((user1, user2) => user1.name.localeCompare(user2.name))
    ) : (
      this.state.users.sort((user1, user2) => user2.name.localeCompare(user1.name))
    );

    this.setState({ users: this.state.users, isSortingAscending: !this.state.isSortingAscending });
  };

  displayContacts = () => {
    console.log(this.state.users)
    const usersJSX = this.state.users.map((user, idx) => {
      return (
        <div key={`user-${idx + 1}`}>
          <h2>Name: {user.name}</h2>
          <p>Age: {user.age}</p>
          <p>Catch Phrase: {user.catchPhrase}</p>
        </div>
      );
    });

    return usersJSX;
  }

  render() {
    console.log('RENDERIZOU NOVAMENTE O APP')
    return (
      <div className="App">
        <h1 className="alguma-classe">Our First Counter App</h1>

        <ActionButton isAscending={this.state.isSortingAscending} sortUsersByName={this.handleSortUsersByName} />
      
        {this.displayContacts()}
      </div>
    );
  }
}

export default App;
