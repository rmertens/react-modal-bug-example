import React, {PropTypes} from 'react';
import ModalComponent from './ModalComponent';
import {connect} from 'react-redux';

/*
 * Following http://stackoverflow.com/questions/35623656/how-can-i-display-a-modal-dialog-in-redux-that-performs-asynchronous-actions/35641680
 */

const MODAL_COMPONENTS = {
  'ADD_ACCOUNT': ModalComponent
  /* TODO other modals */
};

const ModalRoot = ({modalType, modalProps, dispatch}) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  const closeFn = () => {
    console.log('closeFn called');
    dispatch({
      type: 'HIDE_MODAL'
    });
  };
  const fullProps = Object.assign({closeFn}, modalProps);
  return <SpecificModal {...fullProps} />;
};

ModalRoot.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  state => state.modal
)(ModalRoot)
