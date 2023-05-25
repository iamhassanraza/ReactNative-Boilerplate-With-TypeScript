import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import BottomModal from 'components/BottomModal'
import CustomButton from 'components/CustomButton'
import Label from 'components/Label';
import metrics, { SCREEN_WIDTH } from 'theme/metrics';
import IconWithText from 'components/IconWithText';
import { SvgImages } from 'constants/Images';



interface MaintainanceRequestModalProps {
  visible: boolean;
  onClose: () => void;
  onBackdropPress: () => void
}

const MaintainanceRequestModal: React.FC<MaintainanceRequestModalProps> = ({ visible, onClose, onBackdropPress }) => {
  return (
    <BottomModal onBackdropPress={onBackdropPress} visible={visible} onClose={onClose}>
  
        <Label style={styles.title} text="Maintenance Request " />
        <IconWithText Icon={SvgImages.MaintainanceIcon} text='A unique identifier assigned to the transaction for tracking purposes.'></IconWithText>
        <CustomButton text="Request Service" />
    </BottomModal>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: metrics.largeMargin,
    justifyContent: 'center'
  },
});

export default MaintainanceRequestModal;

