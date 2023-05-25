import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import BottomModal from 'components/BottomModal'
import CustomButton from 'components/CustomButton'
import MultiSelectList from 'components/MultiSelectList';
import Label from 'components/Label';
import metrics from 'theme/metrics';

const data: Item[] = [
    { id: 1, month: 'Jan', title: 'Jan', amount: 30 },
    { id: 2, month: 'Feb', title: 'Feb', amount: 40 },
    { id: 3, month: 'Mar', title: 'Mar', amount: 50 },
    { id: 4, month: 'Apr', title: 'Apr', amount: 50 },
    { id: 5, month: 'May', title: 'May', amount: 50 },
    { id: 6, month: 'Jun', title: 'Jun', amount: 50 },
    { id: 7, month: 'Jul', title: 'Jul', amount: 50 },
];

interface Item {
  id: number;
  title: string;
  month: string;
  amount: number;
}

interface ElectricityPaymentModalProps {
  visible: boolean;
  onClose: () => void;
  onBackdropPress:()=> void
}

const ElectricityPaymentModal: React.FC<ElectricityPaymentModalProps> = ({ visible, onClose , onBackdropPress}) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);


  const handleItemSelect = useCallback((selectedItems: Item[]) => {
    setSelectedItems(selectedItems);
  }, []);

  return (
    <BottomModal onBackdropPress={onBackdropPress} visible={visible} onClose={onClose}>
        <Label style={styles.title} text="Electricity Payment" />
        <MultiSelectList onSelectItems={handleItemSelect} data={data} />
        <CustomButton text="Pay Electricity" />
    </BottomModal>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: metrics.largeMargin,
    justifyContent:'center'
  },
});

export default ElectricityPaymentModal;

