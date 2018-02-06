import React from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationPage, Label } from 'teaset';
import rs from '../mobx/roomStorage'
export default class OneRoom extends NavigationPage {

    static defaultProps = {
        ...NavigationPage.defaultProps,
        title: '房间',
        showBackButton: true,
    };
    constructor(props){
        super(props)
        this.state={}
    }
    componentDidMount() {
        this.setState({
            info: this.props.info,
        })
    }
    renderPage() {
        console.log(rs.getSelectRoom())
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
 
                <Text>aaaaa</Text>
            </View>
        );
    }

}