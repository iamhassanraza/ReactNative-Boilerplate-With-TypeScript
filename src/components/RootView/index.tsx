import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, {  ReactNode } from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

interface RootViewProps {
    children: ReactNode
}

export default function RootView(props: RootViewProps) {
        const insets = useSafeAreaInsets()
    return (
        <View style={{top:insets.top,paddingBottom:insets.bottom,flex:1,backgroundColor:"#F0F1F6"}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({})



// import React from 'react';
// import { View, StatusBar, Platform } from 'react-native';
// import { SafeAreaInsetsContext, useSafeAreaInsets } from 'react-native-safe-area-context';
// import { Colors } from 'theme';

// export default function RootView(props: any) {
//     const {
//         style,
//         children,
//         top,
//         bottom,
//         statusBar = Colors.primary,
//         barStyle = 'light-content',
//         background = Colors.lightBackground,
//     } = props;

//     const insets = useSafeAreaInsets()

    

//     return (
//         <View style={{ flex: 1, backgroundColor: statusBar }}>
//             <StatusBar
//                 translucent={true}
//                 barStyle={barStyle}
//                 backgroundColor={background}
//             />
//             <View
//                 style={{
//                     flex: 1,
//                     ...Platform.select({
//                         ios: {
//                             marginTop: top == 0 ? top : insets.top,
//                             paddingBottom: bottom == 0 ? bottom : insets.bottom,
//                         },
//                     }),
//                     backgroundColor: background,
//                     ...style,
//                 }}>

//                 {children}
//             </View>
//         </View >
//     );
// }
