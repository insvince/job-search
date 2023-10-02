import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './tabs.style';
import { SIZES } from '../../../constants';

const Tabs = ({ activeTab, tabs, setActiveTab }) => {
    const TabButton = ({ name, activeTab, onHandleSearchType }) => (
        <TouchableOpacity
            style={styles.btn(name, activeTab)}
            onPress={onHandleSearchType}>
            <Text style={styles.btnText(name, activeTab)}>{name}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={tabs}
                renderItem={({ item }) => (
                    <TabButton
                        name={item}
                        activeTab={activeTab}
                        onHandleSearchType={() => setActiveTab(item)}
                    />
                )}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item}
                contentContainerStyle={{ columnGap: SIZES.small / 2 }}
                horizontal
            />
        </View>
    );
};

export default Tabs;
