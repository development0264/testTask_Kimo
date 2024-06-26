import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {FONTS} from '../../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E6F2F2',
  },
  imageStyle: {
    width: width,
    height: height * 0.6,
  },
  text: {
    fontSize: 18,
    color: '#001A1A',
    fontFamily: FONTS.ibmPlexBold,
    padding: 20,
    marginTop: 20,
  },
  scrollViewStyle: {
    paddingBottom: width * 0.2,
  },

  //   HIGHLIGHTS STYLE

  highlightMainViewStyle: {
    backgroundColor: '#FFF',
    height: height * 0.65,
  },
  contentContainerStyle: {
    paddingRight: width * 0.05,
  },

  //   CARD STYLE

  carouselContainer: {
    paddingRight: width * 0.05,
  },

  cardMainViewStyle: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 10,
    width: width * 0.83,
    height: height * 0.48,
    // marginRight: 5,

    // Shadow effect for button
    shadowOffset: {width: 10, height: 10},
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3, // 15
  },
  imgStyle: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  innerViewStyle: {
    padding: 20,
  },
  headerTitleTXTStyle: {
    fontSize: 20,
    fontFamily: FONTS.ibmPlexBold,
    color: '#008080',
  },
  subTitleTXTStyle: {
    fontSize: 16,
    fontFamily: FONTS.ibmPlexRegular,
    color: '#001A1A',
    marginVertical: 10,
  },
  arrowTouchStyle: {
    alignSelf: 'flex-end',
    borderRadius: 100 / 2,
    backgroundColor: '#E6F2F2',
    padding: 15,
  },
  arrowImgStyle: {
    width: 20,
    height: 20,
  },

  //   CATEGORIES STYLE

  categoryInnerMainViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 25,
    marginBottom: 10,
  },
  innerTXTStyle: {
    fontSize: 16,
    fontFamily: FONTS.ibmPlexMedium,
  },

  //   TRAVEL GUIDE

  travelMainViewStyle: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
  },
  innerMainViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTXTSTyle: {
    fontFamily: FONTS.ibmPlexBold,
    fontSize: 24,
    color: '#001A1A',
  },
  subInnerTitleTXTStyle: {
    fontFamily: FONTS.ibmPlexRegular,
    fontSize: 16,
    color: '#001A1A',
  },
  guideImgStyle: {
    width: 80,
    height: 80,
  },
  contactTouchStyle: {
    alignSelf: 'flex-start',
    marginTop: 15,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#008080',
    borderRadius: 10,
    padding: 8,
    paddingHorizontal: 30,
  },
  contactTXTStyle: {
    fontFamily: FONTS.ibmPlexBold,
    fontSize: 16,
    color: '#008080',
  },

  //   BOOK A TRIP STYLE
  tripMainViewStyle: {
    // backgroundColor: 'red',
    padding: 20,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  tripTouchStyle: {
    alignItems: 'center',
    backgroundColor: '#008080',
    borderRadius: 10,
    padding: 10,

    // Shadow effect for button
    shadowOffset: {width: 10, height: 10},
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 6, // 15
  },
  tripTXTStyle: {
    fontFamily: FONTS.ibmPlexBold,
    fontSize: 16,
    color: '#FFF',
  },
});

export default styles;
