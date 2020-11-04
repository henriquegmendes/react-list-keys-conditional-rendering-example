import React, { Component } from 'react';

import { Button, Modal } from 'react-bootstrap';

class CreateNewUserForm extends Component {
  state = {
    showModal: false,

    form: {
      name: '',
      age: '',
      catchPhrase: '',
    }
  }

  handleClose = () => this.setState({ showModal: false });

  handleShow = () => this.setState({ showModal: true });

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      form: { ...this.state.form, [name]: value },
    })
  }

  handleCreateUser = (event) => {
    this.props.addUser(this.state.form);

    this.setState({
      form: {
        name: '',
        age: '',
        catchPhrase: '',
      }
    })

    this.handleClose();
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Add new user
        </Button>

        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Criar novo Usuário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div>
                <input type="text" name="name" placeholder="Nome do novo usuário" value={this.state.form.userName} onChange={this.handleChange} />
              </div>

              <div>
                <input type="number" name="age" placeholder="Idade do novo usuário" value={this.state.form.age} onChange={this.handleChange} />
              </div>

              <div>
                <input type="text" name="catchPhrase" placeholder="Frase do novo usuário" value={this.state.form.catchPhrase} onChange={this.handleChange} />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleCreateUser}>
              Create User
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CreateNewUserForm;
