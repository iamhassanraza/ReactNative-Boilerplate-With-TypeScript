import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import CustomButton from 'components/CustomButton';
import { Colors } from 'theme';
import metrics, { SCREEN_HEIGHT, SCREEN_WIDTH } from 'theme/metrics';
import Modal, { ReactNativeModal } from "react-native-modal";

interface BottomModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode,
  onBackdropPress: () => void
}

const BottomModal: React.FC<BottomModalProps> = ({ visible, onClose, children, onBackdropPress }) => {

  return (
    <Modal
      deviceWidth={SCREEN_WIDTH}
      deviceHeight={SCREEN_HEIGHT}
      isVisible={visible}
      // animationType="fade"
      animationIn="slideInUp"
      // animationOut="fadeOut"
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      // transparent={true}
      onSwipeComplete={onBackdropPress}
      swipeDirection="down"
      onBackdropPress={onBackdropPress}
      style={{ margin: 0 }}
    // onRequestClose={() => console.log("request close")}
    >
      <View style={styles.overlay}>
        <View style={[styles.modalContainer]}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    // flex: 1,
    width:'100%',
    position: "absolute",
    bottom: 0,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    paddingHorizontal: metrics.defaultMargin,
    paddingVertical: metrics.largeMargin,
  },
});

export default BottomModal;
