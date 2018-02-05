import React from 'react';
import { View, ScrollView } from 'react-native';

import { Theme, NavigationPage, Label, ListRow,PullPicker } from 'teaset';

import us from '../mobx/userStorage'


// Theme.set(Theme.themes.black);
export default class Setting extends NavigationPage {


    static defaultProps = {
        ...NavigationPage.defaultProps,
        title: '主题',
        showBackButton: true,
    };
    changeTheme() {
        PullPicker.show(
            '选择主题',
            Object.keys(Theme.themes),
            -1,
            (item, index) => {
                Theme.set(Theme.themes[item]);
                this.navigator.popToTop();
            }
        );
    }

    renderPage() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ height: 20 }} />
                <ListRow title='选择主题' onPress={() => this.changeTheme()} topSeparator='full' bottomSeparator='full' />
            </ScrollView>
        );
    }

}