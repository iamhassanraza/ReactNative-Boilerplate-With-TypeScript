import { StyleSheet, Text, View, FlatList, Platform, UIManager, LayoutAnimation, Animated } from 'react-native'
import React, { useEffect } from 'react'
import TitleBar from '../TitleBar'
import { SvgImages } from 'constants/Images'
import { Colors, commonStyles } from 'theme'
import { fontsFamily, fontSize } from 'theme/fonts'
import metrics, { SCREEN_HEIGHT, SCREEN_WIDTH } from 'theme/metrics'

const Services = [
    {
        id: 1,
        title: 'Rent',
        Image: SvgImages.BackIcon,
    },
    {
        id: 2,
        title: 'Service fee',
        Image: SvgImages.BackIcon,
    },
    {
        id: 3,
        title: 'Electricity',
        Image: SvgImages.BackIcon,
    },
    {
        id: 4,
        title: 'Contract',
        Image: SvgImages.BackIcon,
    },
]

interface ServiceCardProps {
    text: string
    icon: any
}

const ServiceCard = (props: ServiceCardProps) => {

    const moveAnim = new Animated.Value(30);

    useEffect(() => {
        Animated.parallel([
            Animated.timing(moveAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }),
         
        ]).start();
    }, []);


    return (
        <Animated.View style={{ transform: [{ translateX: moveAnim }] }}>
            <View style={styles.serviceCard}>
                <SvgImages.MaintainanceIcon style={styles.icon} />
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </Animated.View>

    )
}

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export default function ServiceList() {




    const renderItem = ({ item }: { item: typeof Services[number] }) => <ServiceCard text={item.title} icon={null} />

    return (


        <View style={styles.container}>
            <TitleBar title='Services' />

            <FlatList
                data={Services}
                contentContainerStyle={styles.contentContainer}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {marginBottom:metrics.defaultMargin},
    contentContainer: {
        paddingBottom: metrics.xsmallMargin,
        paddingHorizontal: '0.5%',
    },
    serviceCard: {
        backgroundColor: Colors.white,
        ...commonStyles.shadow,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginRight: metrics.smallMargin,
        borderRadius: 10,
        height: SCREEN_HEIGHT * 0.13,
        width: SCREEN_WIDTH * 0.3,
    },
    icon: {
        marginBottom: metrics.smallMargin,
    },
    text: {
        fontFamily: fontsFamily.primaryBold,
        color: Colors.black,
        fontSize: fontSize.medium,
    },
})
