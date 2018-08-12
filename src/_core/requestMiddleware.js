import * as alertActions from '../store/actions/alertActions';

export default function requestMiddleware() {
    return ({dispatch}) => next => action => {
        if (action.type) {
            const loading = /.*\_LOADING$/;
            const success = /.*\_SUCCESS$/;
            const error = /.*\_ERROR$/;

            console.log("action:", action.type);
            if (action.type.match(loading)) {
                dispatch(loadingActions.showLoading());
                console.log("loading");
            } else if (action.type.match(success)) {
                dispatch(loadingActions.closeLoading());
                console.log("success", action.payload);
            } else if (action.type.match(error)) {
                dispatch(loadingActions.closeLoading());
                dispatch(alertActions.showAlert(action.payload.message));
                console.log("error", action);
            }
        }
        return next(action)
    }
}
