import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import metrics, { SCREEN_WIDTH } from 'theme/metrics'
import AlertCard from 'components/AlertCard'

const NotificationAlerts = [
    {
        id: 1,
        title: 'Rent',
        description: 'A unique identifier assigned to the transaction for tracking purposes.',
    },
    {
        id: 2,
        title: 'Rent',
        description: 'A unique identifier assigned to the transaction for tracking purposes.',
    },
    {
        id: 3,
        title: 'Rent',
        description: 'A unique identifier assigned to the transaction for tracking purposes.',
    },
    {
        id: 4,
        title: 'Rent',
        description: 'A unique identifier assigned to the transaction for tracking purposes.',
    },
]

export default function NotificationAlertList() {




    const renderItem = ({ item }: { item: typeof NotificationAlerts[number] }) => <View
        style={{ width: SCREEN_WIDTH * 0.75, marginRight: metrics.defaultMargin }}>
        <AlertCard type="Dismiss" title={item.title} description={item.description} />
    </View>

    return (


        <View style={styles.container}>

            <FlatList
                data={NotificationAlerts}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { marginBottom: metrics.defaultMargin },

})
