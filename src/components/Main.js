import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux';
import * as alertActions  from '../store/actions/alertActions';

class Main extends Component {
    render() {
        return (

            <View style={styles.container}>
                <Text> {this.props.content.showAlert.toString()} : ShowAlertState</Text>
                <Button title={"Test"} onPress={this.props.testAction} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => ({
    content: state.alert,
});

const mapDispatchToProps = (dispatch) => {
    return {
        testAction: () => dispatch(alertActions.showAlert("Foo","bar"))

    }
};

export default AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);