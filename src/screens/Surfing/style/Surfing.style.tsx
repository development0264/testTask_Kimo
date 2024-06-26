import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {FONTS} from '../../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F2F2',
  },
  text: {
    fontFamily: FONTS.ibmPlexRegular,
    fontSize: 16,
    color: '#001A1A',
    padding: 20,
    marginTop: 20,
  },
  scrollViewStyle: {
    paddingBottom: width * 0.2,
  },
  imageStyle: {
    width: width,
    height: height * 0.3,
  },

  //   INNER MAIN VIEW STYLE

  innerMainViewStyle: {
    backgroundColor: '#FFF',
    paddingBottom: width * 0.2,
  },

  //   TOP SPOT STYLE

  topSpotTitleStyle: {
    padding: 20,
    fontFamily: FONTS.ibmPlexBold,
    fontSize: 16,
    color: '#001A1A',
  },
  categoryInnerMainViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 10,

    // Shadow effect for button
    shadowOffset: {width: 10, height: 10},
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3, // 15
  },
  innerTXTStyle: {
    fontSize: 16,
    fontFamily: FONTS.ibmPlexBold,
    color: '#008080',
    alignSelf: 'center',
    padding: 20,
  },
  spotImgStyle: {
    width: 150,
    height: 80,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },

  //   TRAVEL GUIDE

  travelMainViewStyle: {
    width: width,
  },
  travelTXTStyle: {
    fontSize: 18,
    color: '#001A1A',
    fontFamily: FONTS.ibmPlexBold,
    padding: 20,
    marginTop: 20,
  },
  travelMainCardViewStyle: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
  },
  innerTravelMainViewStyle: {
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
