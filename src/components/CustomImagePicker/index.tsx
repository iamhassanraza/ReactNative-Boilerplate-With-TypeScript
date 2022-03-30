import React from 'react';
import {TouchableOpacity, Image, ImageProps} from 'react-native';
import ImagePicker, {Image as ImageType} from 'react-native-image-crop-picker';
import {styles} from './CustomImagePicker.styles';

interface CustomImagePickerProps {
  uri: string;
  onChange: (image: ImageType) => void;
}

export default function CustomImagePicker(props: CustomImagePickerProps) {
  const onComponentPress = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      mediaType: 'photo',
    }).then((image: ImageType) => {
      props.onChange(image);
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onComponentPress}>
      <Image style={styles.imageStyle} source={{uri: props.uri}}></Image>
    </TouchableOpacity>
  );
}
