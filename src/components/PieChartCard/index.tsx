import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors, commonStyles } from 'theme'
import metrics from 'theme/metrics';
import { fontsFamily, fontSize, scaleFont } from 'theme/fonts';
import GraphDetailBox from 'components/GraphDetailBox';
import { PieChart } from 'react-native-gifted-charts';

type PieChartCardProps = {
    data: any[]
    // define the props type for the component here, if any
}





const PieChartCard: React.FC<PieChartCardProps> = (props) => {
    return (
        <View style={{
            backgroundColor: Colors.primary,
            width: '100%', borderRadius: 20,
            paddingHorizontal: metrics.defaultMargin,
            paddingVertical: metrics.smallMargin,
            flexDirection: 'row',
            justifyContent: "space-between"

        }}>
            <View style={{ paddingTop: metrics.smallMargin }}>
                <PieChart
                    data={props?.data}
                    donut
                    showGradient
                    radius={scaleFont(80)}
                    innerRadius={scaleFont(50)}
                    innerCircleColor={Colors.primary}
                    centerLabelComponent={() => {
                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.gaugeText, { fontSize: fontSize.medium_12, fontFamily: fontsFamily.primary }]}>Total Rent</Text>
                                <Text style={styles.gaugeText}>$12,000</Text>
                            </View>
                        );
                    }}
                />


            </View>

            <View style={{ flexDirection: 'column', justifyContent: "space-around" }}>
                {props?.data?.map((item) => {
                    return <GraphDetailBox key={item.percentage + item.color} textColor={Colors.white} style={styles.DueBoxExternal} backgroundColor={item.color} months={item.title} amount={item.amount} />

                })}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    gaugeText: {
        fontFamily: fontsFamily.primaryBold,
        fontSize: fontSize.normal,
        color: Colors.whiteFadedText
    },
    DueBoxExternal: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: Colors.whiteFaded,
        marginBottom: metrics.smallMargin
    }
});

export default PieChartCard;
