import Toast, { Durations } from 'react-native-root-toast';
import { Colors } from 'theme/colors';

export const errorToast = (msg: string) => {
    Toast.show(msg, {
        backgroundColor: Colors.error,
        textColor: Colors.white,
        opacity: 1,
        position: -80,
        duration: 3000,
    });
};

export const successToast = (msg: string) => {
    Toast.show(msg, {
        backgroundColor: Colors.lightGrey,
        textColor: Colors.white,
        opacity: 1,
        position: -80,
        duration: 3000,
    });
};
