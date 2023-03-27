import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { StoreState } from 'store/states/root/RootState';
import Navigator from 'utils/Navigator';
import { MainRoutes } from './HomeStack';
import { Colors } from 'theme';

type CustomDrawerItemProps = {
    label: string;
    onPress: () => void;
    isFocused: boolean
};

const CustomDrawerItem: React.FC<CustomDrawerItemProps> = ({ label, onPress, isFocused }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.drawerItem, isFocused && styles.focusedContainer]}>
            <Text style={[styles.drawerItemText, isFocused && styles.focusedText]}>{label}</Text>
        </TouchableOpacity>
    );
};

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
    const { state, navigation } = props;

    const types = useSelector((state: StoreState) => state.machines.types)
    console.log({ types })



    return (
        <View style={styles.drawerContainer}>
            <DrawerContentScrollView {...props}>
                <CustomDrawerItem isFocused={state.routeNames[state.index] === MainRoutes.Dashboard}
                    label={MainRoutes.Dashboard} onPress={() => { Navigator.navigate(MainRoutes.Dashboard) }} />
                <CustomDrawerItem isFocused={state.routeNames[state.index] === MainRoutes.ManageCategories}
                    label={MainRoutes.ManageCategories} onPress={() => { Navigator.navigate(MainRoutes.ManageCategories) }} />
                {types.map((item, index) => {
                    return <CustomDrawerItem
                        isFocused={state.routeNames[state.index] === MainRoutes.CategoryDetails && state.routes[state.index].params?.params?.categoryName === item.categoryName}
                        key={index} label={item.categoryName}
                        onPress={() => { Navigator.navigate(MainRoutes.CategoryDetails, { params: item }) }} />
                })}

            </DrawerContentScrollView>
        </View>
    );
};



const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        marginTop: 15,
        paddingHorizontal: 10
    },
    drawerItem: {
        padding: 15,
    },
    drawerItemText: {
        fontSize: 16,
        fontWeight: "500"
    },
    focusedContainer: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
    },
    focusedText: {
        color: Colors.white
    }
});

export default CustomDrawerContent;
