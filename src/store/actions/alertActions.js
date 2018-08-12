export function showAlert(body,title) {
    return {
      type: 'SHOW_ALERT',
      body,
      title
    };
  }
  
  export function closeAlert() {
    return {
      type: 'CLOSE_ALERT'
    };
  }
  