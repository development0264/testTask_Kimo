import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../style/Surfing.style';
import CustomHeader from '../../../components/CustomerHeader/CustomHeader';
import {images} from '../../../theme';

interface TopSpot {
  id: number;
  title: string;
  image: any;
}

const topSpotList: TopSpot[] = [
  {
    id: 1,
    title: 'Maui',
    image: images.mauiSpot,
  },
  {
    id: 2,
    title: 'Kauai',
    image: images.kauaiSpot,
  },
  {
    id: 3,
    title: 'Honolulu',
    image: images.honoluluSpot,
  },
];

const Surfing: React.FC = () => {
  return (
    <>
      <CustomHeader />
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.innerMainViewStyle}>
            <View>
              <Image source={images.surfingHead} style={styles.imageStyle} />
              <Text style={styles.text}>
                Hawaii is the capital of modern surfing. This group of Pacific
                islands gets swell from all directions, so there are plenty of
                pristine surf spots for all.
              </Text>
            </View>

            <View>
              <Text style={styles.topSpotTitleStyle}>Top spots</Text>
              {topSpotList?.map((tsList, index) => {
                return (
                  <View
                    key={tsList?.id}
                    style={styles.categoryInnerMainViewStyle}>
                    <Text style={styles.innerTXTStyle}>
                      {tsList?.id}. {tsList?.title}
                    </Text>
                    <Image source={tsList?.image} style={styles.spotImgStyle} />
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.travelMainViewStyle}>
            <Text style={styles.travelTXTStyle}>Travel Guide</Text>
            <View style={styles.travelMainCardViewStyle}>
              <View style={styles.innerTravelMainViewStyle}>
                <View>
                  <Text style={styles.titleTXTSTyle}>Hadwin Malone</Text>
                  <Text style={styles.subInnerTitleTXTStyle}>
                    Guide since 2012
                  </Text>
                </View>
                <Image
                  source={images.travelGuide}
                  style={styles.guideImgStyle}
                />
              </View>
              <TouchableOpacity style={styles.contactTouchStyle}>
                <Text style={styles.contactTXTStyle}>Contact</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.tripMainViewStyle}>
        <TouchableOpacity style={styles.tripTouchStyle}>
          <Text style={styles.tripTXTStyle}>Book a trip</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Surfing;
