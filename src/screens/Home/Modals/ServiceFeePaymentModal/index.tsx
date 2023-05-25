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

interface ServiceFeePaymentModalProps {
  visible: boolean;
  onClose: () => void;
  onBackdropPress:()=> void
}

const ServiceFeePaymentModal: React.FC<ServiceFeePaymentModalProps> = ({ visible, onClose  ,   onBackdropPress}) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const totalAmount = useMemo(() => {
    return selectedItems.reduce((total, item) => total + item.amount, 0);
  }, [selectedItems.length]);

  const handleItemSelect = useCallback((selectedItems: Item[]) => {
    setSelectedItems(selectedItems);
  }, []);

  return (
    <BottomModal onBackdropPress={onBackdropPress} visible={visible} onClose={onClose}>
        <Label style={styles.title} text="Service Fee" />
        <MultiSelectList onSelectItems={handleItemSelect} data={data} />
        <Label underline size={16} text={totalAmount === 0 ? '0$' : `${totalAmount}$`} />
        <CustomButton text="Pay Service Fee" />
    </BottomModal>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: metrics.largeMargin,
    justifyContent:'center'
  },
});

export default ServiceFeePaymentModal;

