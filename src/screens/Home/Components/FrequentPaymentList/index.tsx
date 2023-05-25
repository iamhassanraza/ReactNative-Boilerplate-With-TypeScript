import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleBar from '../TitleBar'
import { SvgImages } from 'constants/Images'
import { Colors, commonStyles } from 'theme'
import { fontsFamily, fontSize } from 'theme/fonts'
import metrics from 'theme/metrics'
import { TouchableOpacity } from 'react-native-gesture-handler'


const FrequentPayments = [
    {
        id: 1,
        title: "Rent",
        Image: SvgImages.BackIcon
    },
    {
        id: 2,
        title: "Service fee",
        Image: SvgImages.BackIcon
    },
    {
        id: 3,
        title: "Electricity",
        Image: SvgImages.BackIcon
    },
    {
        id: 4,
        title: "Contract",
        Image: SvgImages.BackIcon
    },



]


interface PaymentCardProps {
    text: string,
    icon: any

}

const PaymentCard = (props: PaymentCardProps) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ backgroundColor: Colors.white, ...commonStyles.shadow, borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 20, marginBottom: 10 }}>
                <SvgImages.EmailIcon></SvgImages.EmailIcon>
            </View>
            <Text style={{ fontFamily: fontsFamily.primary, color: Colors.black, fontSize: fontSize.medium }}>{props.text}</Text>
        </View>
    )
}


interface FrequentPaymentListProps {
    data?: []
    onItemPress: (item: any) => void
}

export default function FrequentPaymentList(props: FrequentPaymentListProps) {
    return (
        <View style={{ marginBottom: metrics.largeMargin }}>
            <TitleBar title='Frequent payments' />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                {FrequentPayments.map((item) =>
                    <TouchableOpacity activeOpacity={0.9} key={item.id + ''} onPress={() => { props.onItemPress(item) }}>
                        <PaymentCard
                            text={item.title}
                            icon={null} />
                    </TouchableOpacity>
                )}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({})