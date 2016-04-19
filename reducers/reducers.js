import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const initialModalState = {
  modalType: null,
  modalProps: {}
};

function modal(state = initialModalState, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      };
    case 'HIDE_MODAL':
      return initialModalState;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  modal,
  form: formReducer
});

export default rootReducer;