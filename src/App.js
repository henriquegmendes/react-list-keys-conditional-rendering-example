import React from 'react';

import ActionButton from './components/ActionButtons/ActionButton';
import FilterActions from './components/FilterActions/FilterActions';
import CreateNewUserForm from './components/CreateNewUserForm/CreateNewUserForm';

import users from './users.json';

import './App.css';

class App extends React.Component {
  state = {
    allUsers: users,
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
  };

  filterUsers = (userName) => {
    const filteredUsers = this.state.allUsers.filter(user => user.name.toLowerCase().includes(userName.toLowerCase()));

    this.setState({ users: filteredUsers });
  };

  addUser = userInfo => {
    this.setState({ users: [...this.state.users, userInfo], allUsers: [...this.state.allUsers, userInfo] }, () => {
      this.filterUsers('');
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="alguma-classe">Our First Counter App</h1>

        <CreateNewUserForm addUser={this.addUser} />

        <FilterActions filterUsers={this.filterUsers} />

        <ActionButton isAscending={this.state.isSortingAscending} sortUsersByName={this.handleSortUsersByName} />
      
        {this.displayContacts()}
      </div>
    );
  }
}

export default App;
