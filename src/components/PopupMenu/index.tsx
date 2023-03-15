import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { InputTypes } from 'store/types';



type Props = {
    children: JSX.Element,
    optionsArray: InputTypes[]
    onSelect: (value: InputTypes) => void
}



export default function PopUpMenu({ children, optionsArray, onSelect }: Props) {

    return (
        <View>
            <Menu>
                <MenuTrigger>
                    {children}
                </MenuTrigger>
                <MenuOptions>
                    {optionsArray?.map((value) => {
                        return <MenuOption key={value} onSelect={() => {
                            onSelect(value)
                        }} text={value} />
                    })}
                </MenuOptions>
            </Menu>
        </View>
    )
}

const styles = StyleSheet.create({})