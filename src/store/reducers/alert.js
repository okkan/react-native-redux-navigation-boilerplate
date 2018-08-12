const alert = (state = {showAlert: false}, action) => {
    switch (action.type) {
      case 'SHOW_ALERT':
        return {showAlert: true, body: action.body, title:action.title};
      case 'CLOSE_ALERT':
        return {showAlert: false};
      default:
        return state;
    }
  };
  
  export default alert;
  