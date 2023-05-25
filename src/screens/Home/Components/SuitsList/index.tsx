import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, SCREEN_WIDTH } from 'theme';
import { fontsFamily, fontSize } from 'theme/fonts';
import metrics from 'theme/metrics';

const Suits = [
    {
        id: 1,
        title: 'Suit 1',
    },
    {
        id: 2,
        title: 'Suit 2',
    },
    {
        id: 3,
        title: 'Suit 3',
    },
    {
        id: 4,
        title: 'Suit 4',
    },
];

export default function SuitsList() {
    const [selectedSuitId, setSelectedSuitId] = useState<number | null>(1);

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


    const handleSuitPress = (id: number) => {
        setSelectedSuitId(id);
    };

    const renderItem = ({ item }: { item: typeof Suits[number] }) => {
        const isSelected = item.id === selectedSuitId;

        return (
        <Animated.View style={{ transform: [{ translateX: moveAnim }] }}>

            <TouchableOpacity
                style={[
                    styles.suitItem,
                    {
                        backgroundColor: isSelected ? Colors.primary : Colors.white,
                    },
                ]}
                onPress={() => handleSuitPress(item.id)}
            >
                <Text style={[styles.suitTitle, isSelected && { color: Colors.white }]}>{item.title}</Text>
            </TouchableOpacity>
            </Animated.View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={Suits}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: metrics.defaultMargin,
    },
    suitItem: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH * 0.25,
        paddingVertical: 13,
        marginRight: metrics.defaultMargin,
    },
    suitTitle: {
        fontFamily: fontsFamily.primaryBold,
        fontSize: fontSize.medium,
    },
});
