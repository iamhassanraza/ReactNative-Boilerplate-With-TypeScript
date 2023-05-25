import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Tab, TabView, Text } from 'react-native-elements';
import { Colors } from 'theme';
import { fontsFamily } from 'theme/fonts';
import metrics from 'theme/metrics';

interface CustomTabProps {
    tabs: string[];
    handleTabChange: (index: number) => void
    selectedIndex: number
}

const CustomTab: React.FC<CustomTabProps> = ({ tabs, handleTabChange, selectedIndex }) => {


    return (
            <View style={styles.tabContainer}>
                {tabs.map((tab, index) => (
                    <TouchableOpacity
                        onPress={() => handleTabChange(index)}
                        key={index}
                        style={[
                            styles.tabItem,
                            selectedIndex === index && styles.selectedTabItem,
                        ]}
                    >
                        <Text style={[styles.text, selectedIndex === index && styles.selectedText,]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        // borderWidth: 1,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        padding: 6,
        borderRadius: 10,
        marginVertical:metrics.defaultMargin
    },
    tabItem: {
        flex: 1,


        padding: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedTabItem: {
        borderRadius: 5,
        backgroundColor: Colors.primary,
    },
    text: {
        fontFamily: fontsFamily.primaryBold,
        color: Colors.grey
    },
    selectedText: {
        color: Colors.white
    }
});

export default CustomTab;
