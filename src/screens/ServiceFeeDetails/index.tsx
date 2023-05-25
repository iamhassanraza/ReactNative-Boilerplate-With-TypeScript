import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RootView from 'components/RootView'
import Header from 'components/Header'
import ServiceFeeCard from 'components/ServiceFeeCard'
import { ScrollView } from 'react-native-gesture-handler'
import metrics from 'theme/metrics'
import { Colors } from 'theme'
import { serviceFeeDetailsData } from 'mock/servicefeeCardData'
import Tabs from 'components/Tabs'
import TimeLineList from 'components/TimeLineList'
import { timelineData } from 'mock/timelineList'

export default function ServiceFeeDetails() {

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
      <Header title='Service Fee'></Header>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginHorizontal: metrics.defaultMargin }}>
        <ServiceFeeCard data={serviceFeeDetailsData} textColor={Colors.whiteFadedText} backgrounColor={Colors.primary}></ServiceFeeCard>
        <Tabs selectedIndex={selectedIndex} handleTabChange={handleTabChange} tabs={["Paid", "Due"]}></Tabs>

        {renderTabs()}
      </ScrollView>
    </RootView>
  )
}

const styles = StyleSheet.create({})