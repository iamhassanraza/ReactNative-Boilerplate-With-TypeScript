import { FlatList, Text, View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { fontSize } from 'theme/fonts'
import { Button, Switch, TextInput } from '@react-native-material/core'
import DatePicker from 'react-native-date-picker'

import { Attribute, IMachine } from 'store/types'


interface MachineFormAttributeProps {
    attribute: Attribute;
    value: any;
    updateMachineAttribute: (keyToUpdate: string, updatedValue: any) => void;
}

export default function MachineFormAttribute(props: MachineFormAttributeProps) {


    const [openDateModal, setopenDateModal] = useState(false)
    const { attribute, value, updateMachineAttribute } = props

    switch (attribute.type) {
        case 'Date':
            return (
                <View style={styles.datePickerContainer}>
                    <DatePicker
                        modal
                        open={openDateModal}
                        date={new Date()}
                        onConfirm={(date) => {
                            updateMachineAttribute(attribute.id, date.toDateString().toString());
                            setopenDateModal(false);
                        }}
                        onCancel={() => {
                            setopenDateModal(false);
                        }}
                    />
                    <TextInput
                        style={styles.textInput}
                        onPressIn={() => {
                            setopenDateModal(true);
                        }}
                        editable={false}
                        value={value?.toString()}
                        variant="outlined"
                        label={attribute.label}
                    />
                </View>
            );
        case 'Text':
            return (
                <TextInput
                    onChangeText={(text) => {
                        updateMachineAttribute(attribute.id, text);
                    }}
                    value={value?.toString()}
                    style={styles.textInput}
                    variant="outlined"
                    label={attribute.label}
                />
            );
        case 'CheckBox':
            return (
                <View style={styles.checkBoxView}>
                    <Switch
                        value={value}
                        onValueChange={(e) => {
                            updateMachineAttribute(attribute.id, e);
                        }}
                    />
                    <Text style={{ marginLeft: '3%', fontWeight: '500', fontSize: fontSize.medium_15 }}>
                        {attribute.label}
                    </Text>
                </View>
            );
        case 'Number':
            return (
                <TextInput
                    onChangeText={(text) => {
                        updateMachineAttribute(attribute.id, text);
                    }}
                    keyboardType="number-pad"
                    style={styles.textInput}
                    value={value?.toString()}
                    variant="outlined"
                    label={attribute.label}
                />
            );
        default:
            return null;
    }

}

const styles = StyleSheet.create({

    datePickerContainer: {
        // marginBottom: '5%',
    },
    textInput: {
        marginBottom: '5%',
    },
    checkBoxView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '5%',
    },
});

