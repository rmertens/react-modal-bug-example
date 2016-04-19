import React, {PropTypes} from 'react';
import {reduxForm} from 'redux-form'
import Modal from 'react-modal';

export const fields = [ 'bank', 'universe'];

const AddAccountModal = ({closeFn, handleSubmit, fields: {bank}}) => {
  return (
    <Modal
      isOpen={true}
      onRequestClosed={closeFn}
    >
      <p>
        <form onSubmit={handleSubmit}>
          <select
            {...bank}
            // required syntax for reset form to work
            // undefined will not change value to first empty option
            // when resetting
            value={bank.value || ''}>
            <option value="0"> </option>
            <option value="1">Option 1</option>
          </select>
        </form>
      </p>
      <button onClick={closeFn}>close</button>
    </Modal>
  )};

AddAccountModal.propTypes = {
  closeFn: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'add_account',
  fields
})(AddAccountModal)
