import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList } from 'react-native';
import { Colors } from 'theme';
import { fontsFamily, fontSize } from 'theme/fonts';
import metrics from 'theme/metrics';

interface MultiSelectListProps<T extends { title: string; id: number }> {
    data: T[];
    onSelectItems: (selectedItems: T[]) => void;
}




const MultiSelectList = <T extends { title: string; id: number }>({ data, onSelectItems }: MultiSelectListProps<T>) => {
    const [selectedIds, setSelectedIds] = useState<number[]>([]);


    useEffect(() => {
        const selectedItems = data.filter((item) => selectedIds.includes(item.id));
        onSelectItems(selectedItems);
    }, [selectedIds.length])


    const handleButtonPress = (id: number) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }


    };

    const renderItem = ({ item }: { item: T }) => {
        const isSelected = selectedIds.includes(item.id);

        return (
            <TouchableOpacity
                style={[
                    styles.button,
                    isSelected && styles.selectedButton,
                ]}
                onPress={() => handleButtonPress(item.id)}
            >
                <Text style={[styles.text, isSelected && styles.selectedText]}>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: metrics.defaultMargin,
        marginBottom: metrics.largeMargin,
    },
    button: {
        marginRight: metrics.defaultMargin,
        paddingHorizontal: metrics.largeMargin + 3,
        paddingVertical: metrics.xsmallMargin + 3,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.extraLightGrey,
    },
    selectedButton: {
        backgroundColor: Colors.primary,
    },
    text: {
        fontFamily: fontsFamily.primaryBold,
        fontSize: fontSize.medium_12,
    },
    selectedText: {
        color: Colors.white,
    },
});

export default MultiSelectList;
``
