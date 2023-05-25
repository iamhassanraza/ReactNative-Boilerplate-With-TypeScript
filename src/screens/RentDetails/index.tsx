import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RootView from 'components/RootView'
import Header from 'components/Header'
import PieChartCard from 'components/PieChartCard'
import metrics from 'theme/metrics'
import Tabs from 'components/Tabs'
import TimeLineList from 'components/TimeLineList'
import { timelineData } from 'mock/timelineList'
import { ScrollView } from 'react-native-gesture-handler'
import { rentPieChartData } from 'mock/RentPiechartData'

export default function RentDetails() {

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


      default:
        break;
    }
  }


  return (
    <RootView>
      <Header title='Rent'></Header>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>


        <View style={{ marginHorizontal: metrics.defaultMargin }}>
          <PieChartCard data={rentPieChartData}></PieChartCard>
            <Tabs selectedIndex={selectedIndex} handleTabChange={handleTabChange} tabs={["Paid", "Due"]}></Tabs>
  
          <View style={{ marginVertical: metrics.defaultMargin }}>
            {renderTabs()}
          </View>
        </View>
      </ScrollView>

    </RootView>
  )
}

const styles = StyleSheet.create({})