import React from 'react'
import { Colors } from 'theme'
import {
    StackNavigationOptions,
} from '@react-navigation/stack';
import { fontsFamily, fontSize } from 'theme/fonts';


const defaultNavigation = (): StackNavigationOptions => {
    return {
        headerStyle: {
            backgroundColor: Colors.primary,
            elevation: 0,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontFamily: fontsFamily.primaryBold,
            color: Colors.white,
            fontSize: fontSize.headerTitle

        },
        //ICON COLOR
        headerLeftLabelVisible: false,

        headerTintColor: Colors.white,
        cardStyle: {
            //screen styles below header
            backgroundColor: Colors.white
        },
    }
}


const emptyNavigation = {
    title: null,
    headerStyle: {
        backgroundColor: Colors.white,
        elevation: 0,
        shadowColor: 'transparent',
    },
    header: null,
}

export {
    defaultNavigation,
    emptyNavigation,
}
