import React from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationPage, Label } from 'teaset';

export default class OneRoom extends NavigationPage {

    static defaultProps = {
        ...NavigationPage.defaultProps,
        title: '房间',
        showBackButton: true,
    };
    
    componentDidMount() {
        this.setState({
            info: this.props.info,
        })
    }
    renderPage() {
        console.log('111')
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                
                <Button title='click' onPress={() => { console.info(this) }} ></Button>
                <Button title='click' onPress={() => { console.info(this.props) }} ></Button>
            </View>
        );
    }

}