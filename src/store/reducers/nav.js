import { RootNavigator } from '../../_core/navigator/reduxNav';

const nav = (state = null, action) => {
    let nextState;
    switch (action.type) {
        default:
            return nextState = RootNavigator.router.getStateForAction(action, state);
    }
};

export default nav;
