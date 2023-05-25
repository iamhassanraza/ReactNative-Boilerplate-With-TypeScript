import { Platform, ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'

import HomeHeader from './Components/HomeHeader'
import metrics from 'theme/metrics'
import FrequentPaymentList from './Components/FrequentPaymentList'
import ServiceList from './Components/ServiceList'
import RentCard from 'screens/Home/Components/RentCard'
import { Colors } from 'theme'
import RootView from 'components/RootView'
import SuitsList from './Components/SuitsList'
import NotificationAlertList from './Components/NotificationAlertList'
import ServiceFeeCard from 'components/ServiceFeeCard'
import ElectricityListCard from './Components/ElectricityListCard'
import RentPaymentModal from './Modals/RentPaymentModal'
import ServiceFeePaymentModal from './Modals/ServiceFeePaymentModal'
import ElectricityPaymentModal from './Modals/ElectricityPaymentModal'
import MaintainanceRequestModal from './Modals/MaintainanceRequestModal'
import Navigator from 'utils/Navigator'
import { MainRoutes } from 'navigation/HomeStack'
import { serviceFeeDetailsData, serviceFeeHomeData } from 'mock/servicefeeCardData'




export default function Home() {

    const [showMaintainanceModal, setshowMaintainanceModal] = useState(false)
    const [showElectricityModal, setShowElectricityModal] = useState(false)
    const [showServiceFeeModal, setShowServiceFeeModal] = useState(false)
    const [showRentPaymentModal, setShowRentPaymentModal] = useState(false)

    const toggleMaintainanceModal = () => {
        setshowMaintainanceModal(prev => !prev);
    }

    const toggleElectricityModal = () => {
        setShowElectricityModal(prev => !prev);
    }

    const toggleServiceFeeModal = () => {
        setShowServiceFeeModal(prev => !prev);
    }

    const toggleRentPaymentModal = () => {
        setShowRentPaymentModal(prev => !prev);
    }

    const onFrequentPaymentItemPress = (item: any) => {
        console.log({ item });
        switch (item.title) {
            case "Rent":
                toggleRentPaymentModal();
                break;
            case "Service fee":
                toggleServiceFeeModal();
                break;
            case "Electricity":
                toggleElectricityModal();
                break;
            case "Contract":
                return null;
        }
    };

    const onMaintainanceItemPress = () => {
        setshowMaintainanceModal(prev => !prev)
    }

    const onRentCardPress = () => {
       Navigator.push(MainRoutes.RentDetails)
    }

    const onServiceFeeCardPress = () => {
        Navigator.push(MainRoutes.ServiceFeeDetails)
     }
 

    return (
        <RootView>
            <StatusBar backgroundColor={Colors.primary} barStyle={Platform.OS === "android" ? "light-content" : "dark-content"} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <HomeHeader></HomeHeader>

                <View style={styles.container}>
                    <SuitsList />
                    <NotificationAlertList />
                    <FrequentPaymentList onItemPress={onFrequentPaymentItemPress} />
                    <ServiceList onItemPress={onMaintainanceItemPress} />
                    <RentCard onPress={onRentCardPress} />
                    <ServiceFeeCard data={serviceFeeHomeData} onPress={onServiceFeeCardPress}/>
                    <ElectricityListCard />

                    <ElectricityPaymentModal onBackdropPress={toggleElectricityModal} visible={showElectricityModal} onClose={() => { }} />
                    <ServiceFeePaymentModal onBackdropPress={toggleServiceFeeModal} visible={showServiceFeeModal} onClose={() => { }} />
                    <RentPaymentModal onBackdropPress={toggleRentPaymentModal} visible={showRentPaymentModal} onClose={() => { }} />
                    <MaintainanceRequestModal onBackdropPress={toggleMaintainanceModal} visible={showMaintainanceModal} onClose={() => { }} />

                </View>

            </ScrollView>
        </RootView>

    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: metrics.defaultMargin,
        marginBottom: metrics.defaultMargin
    }
})