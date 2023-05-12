import { Dimensions, PixelRatio } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
const scale = SCREEN_WIDTH / 320;

export const widthPercentageToDP = (widthPercent: string) => {
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / 100);
};

export const heightPercentageToDP = (heightPercent: string) => {
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100);
};

export const normalize = (size: number) => {
    const newSize: number = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};


const { width, height } = Dimensions.get('window');

export function getResponsiveSize(figmaPixels: number) {
    const smallerDimension = Math.min(width, height);
    const responsiveValue = (figmaPixels / 280) * smallerDimension; // assuming Figma design width of 375

    return responsiveValue;
}


export default {
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    widthPercentageToDP,
    heightPercentageToDP,
    normalize,
    getResponsiveSize,
    defaultMargin: Math.min(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.05,
    smallMargin: Math.min(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.03,
    xsmallMargin: Math.min(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.02,
    largeMargin: Math.min(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.08,
    xlargeMargin: Math.min(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.10,
};