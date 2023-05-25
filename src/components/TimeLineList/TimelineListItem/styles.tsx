import { StyleSheet } from 'react-native';
import { Colors, commonStyles, SCREEN_HEIGHT } from 'theme';
import { fontsFamily, fontSize } from 'theme/fonts';
import metrics from 'theme/metrics';

export default StyleSheet.create({
  listItemContainer: {
    height: SCREEN_HEIGHT * 0.1,
    flexDirection: 'row',
  },
  monthContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  monthTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthText: {
    // Add your styles for the month text here
  },
  timelineContainer: {
    flex: 1,
  },
  timelineInnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineLine: {
    borderLeftWidth: 1,
    borderColor: Colors.lighterGrey,
    flex: 1,
    width: 0,
  },
  timelineDot: {
    borderWidth: 1,
    backgroundColor: Colors.primary,
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  itemContainer: {
    flex: 3,
    padding: metrics.xsmallMargin,
  },
  itemInnerContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    ...commonStyles.shadow,
    borderRadius: 10,
    justifyContent: 'space-around',
    paddingHorizontal: metrics.smallMargin,
    paddingVertical: 5,
  },
  itemAmount: {
    fontFamily: fontsFamily.primaryBold,
    fontSize: fontSize.normal,
    color: Colors.black,
  },
  itemDate: {
    fontFamily: fontsFamily.primary,
    fontSize: fontSize.medium_12,
  },
});
