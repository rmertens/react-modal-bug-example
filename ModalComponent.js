import React from 'react';
import Modal from 'react-modal';
/*
const ModalComponent = ({closeFn}) => {
	return (
    <Modal
      isOpen={true}
      onRequestClose={closeFn}
      closeTimeoutMS={100}
      shouldCloseOnOverlayClick={true}
    >
      <h1>Modal Content</h1>
      <p>Etc.</p>
      <button onClick={closeFn}>close</button>
    </Modal>
)};

export default ModalComponent;
*/
const ModalComponent = ({closeFn}) => {
  return (
    <Modal
      isOpen={true}
      onRequestClosed={closeFn}
      closeTimeoutMS={100}
      shouldCloseOnOverlayClick={true}
    >
      <h1>Modal Content</h1>
      <p>Etc.</p>
      <button onClick={closeFn}>close</button>
    </Modal>
  )};

export default ModalComponent;
