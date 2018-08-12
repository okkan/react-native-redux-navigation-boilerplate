import {NavigationActions} from "react-navigation";
import {reduxStore} from "../../Root";

function navigationService() {
    this.openScreen = (routeName, params={}) => {
        return reduxStore.dispatch(NavigationActions.navigate({routeName, params, key: routeName}));
    };

    this.closeScreen = () => {
        return reduxStore.dispatch(NavigationActions.back());
    };

    this.backFrom = (key) => {
        return reduxStore.dispatch(NavigationActions.back(key));
    };

    this.resetScreen = (routeName, params = {}) => {
        return reduxStore.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName, params, key: routeName}),
            ]
        }));
    };


}

export default new navigationService();
