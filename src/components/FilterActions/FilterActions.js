import React, { Component } from 'react';

class FilterActions extends Component {
  state = {
    userName: '',
  };

  handleSearchUsers = (event) => {
    this.setState({ userName: event.target.value }, () => {
      this.props.filterUsers(this.state.userName);
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="userName"
          value={this.state.userName}
          placeholder="Filtrar pelo nome do usuário"
          onChange={(event) => this.handleSearchUsers(event) }
        />
      </div>
    );
  }
}

export default FilterActions;
