import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import ModalRoot from './ModalRoot';

class Template extends Component {

  open() {
    this.props.dispatch({
      type: 'SHOW_MODAL',
      modalType: 'ADD_ACCOUNT',
      modalProps: {}
    });
  }

  render() {
    
    return (
      <span>
        <ModalRoot />
        <span>
          Not open
          <button onClick={this.open.bind(this)}>open</button>
        </span>
      </span>
    );
  }
}

export default connect()(Template);


