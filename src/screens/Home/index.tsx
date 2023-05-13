import { ScrollView, StatusBar, View } from 'react-native'
import React from 'react'

import HomeHeader from './Components/HomeHeader'
import TitleBar from './Components/TitleBar'
import metrics from 'theme/metrics'
import FrequentPaymentList from './Components/FrequentPaymentList'
import ServiceList from './Components/ServiceList'
import RentCard from 'screens/Home/Components/RentCard'
import { Colors } from 'theme'




export default function Home() {
    return (
        <>
            <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <ScrollView>
                <HomeHeader></HomeHeader>

                <View style={{ marginHorizontal: metrics.defaultMargin }}>

                    <FrequentPaymentList></FrequentPaymentList>
                    <ServiceList></ServiceList>
                    <RentCard></RentCard>


                </View>

            </ScrollView>
        </>

    )
}
