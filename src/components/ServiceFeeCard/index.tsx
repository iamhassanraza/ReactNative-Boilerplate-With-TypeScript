import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TitleBar from 'screens/Home/Components/TitleBar'
import { Colors, commonStyles } from 'theme'
import metrics from 'theme/metrics';
import { fontsFamily, fontSize } from 'theme/fonts';
import CustomSlider from 'components/CustomSlider';


type dataProps = {
  id: number,
  title: string,
  value: number,
  total: number,
  color: string,
  amount: string,
  thumbColor: string
}

type ServiceFeeCardProps = {
  onPress?: () => void
  backgrounColor?: string,
  textColor?: string
  data: dataProps[]

  // define the props type for the component here, if any
}

const ServiceFeeCard: React.FC<ServiceFeeCardProps> = (props) => {

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={props.onPress}>
      <TitleBar title='Service Fee' rightTitle='$1000/Month' />
      <View style={[styles.cardContainer, !!props.backgrounColor && { backgroundColor: props.backgrounColor }]}>
        <View style={{ marginBottom: metrics.defaultMargin }}>
          {props.data.map((item, index) => <CustomSlider key={item.id} value={item.value} minimumTrackColor={item.color} thumbColor={item.thumbColor} />)}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
          {props.data.map((item, index) => <DueBox key={item.id} textColor={props.textColor} backgroundColor={item.color} months={item.title} amount={item.amount} />)}
        </View>
      </View>
    </TouchableOpacity>
  )
}

type DueBoxProps = {
  backgroundColor: string,
  months: string,
  amount: string,
  textColor?: string
}

const DueBox: React.FC<DueBoxProps> = (props) => {
  const { backgroundColor, months, amount, textColor } = props;

  return (
    <View style={styles.dueContainer}>
      <View style={[styles.dueBox, { backgroundColor }]} />
      <View>
        <Text style={[styles.dueText, !!textColor && { color: textColor }]}>{months}</Text>
        <Text style={[styles.amountText, !!textColor && { color: textColor }]}>{amount}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    width: '100%',
    borderRadius: 20,
    ...commonStyles.shadow,
    paddingHorizontal: metrics.defaultMargin,
    paddingVertical: metrics.smallMargin
  },


  dueContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: metrics.xlargeMargin
  },
  dueBox: {
    width: 12,
    height: 12,
    marginTop: 3,
    marginRight: 10,
    borderRadius: 10
  },
  dueText: {
    fontFamily: fontsFamily.primary,
    fontSize: fontSize.medium,
  },
  amountText: {
    fontFamily: fontsFamily.primaryBold,
    fontSize: fontSize.normal,
    marginTop: metrics.xsmallMargin,
    color: Colors.black
  }
});

export default ServiceFeeCard;
