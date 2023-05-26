import { LayoutAnimation, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from 'components/Header'
import Tabs from 'components/Tabs'
import RootView from 'components/RootView'
import metrics from 'theme/metrics'
import TimeLineList from 'components/TimeLineList'
import { timelineData } from 'mock/timelineList'
import { ScrollView } from 'react-native-gesture-handler'
import PieChartCard from 'components/PieChartCard'
import { ServiceCallStatusPieData } from 'mock/ServiceCallStatusPieData'
import StatusCard from 'components/StatusCard'






export default function ServiceCallStatus() {
    const [selectedIndex, setSelectedIndex] = useState(0);




    const handleTabChange = (index: number) => {

        setSelectedIndex(index);
    };


    const renderTabs = () => {
        switch (selectedIndex) {
            case 0:
                return <TimeLineList data={timelineData}></TimeLineList>
                break;
            case 1:
                return <TimeLineList data={timelineData}></TimeLineList>
                break;
            case 2:
                return <TimeLineList data={timelineData}></TimeLineList>
                break;

            default:
                break;
        }
    }



    return (
        <RootView>
            <Header backButtonShown={false} title='Service Call Status'></Header>
            <ScrollView style={{ flex: 1, paddingHorizontal: metrics.defaultMargin }}>

                <PieChartCard data={ServiceCallStatusPieData}></PieChartCard>
                <Tabs selectedIndex={selectedIndex} handleTabChange={handleTabChange} tabs={["Pending (3)", "Progress (5)", "Completed (10)"]}></Tabs>

                <View style={{ marginBottom: metrics.defaultMargin }}>
                    {/* {renderTabs()} */}
                    <StatusCard
                        heading="Maintenance"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        buttonText="Progress"
                        // onPress={handleButtonPress}
                    />
                     <StatusCard
                        heading="Maintenance"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        buttonText="Progress"
                        // onPress={handleButtonPress}
                    />
                     <StatusCard
                        heading="Maintenance"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        buttonText="Progress"
                        // onPress={handleButtonPress}
                    />
                </View>






            </ScrollView>
        </RootView>
    )
}

const styles = StyleSheet.create({})