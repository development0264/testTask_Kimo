import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../style/Home.style';
import CustomHeader from '../../../components/CustomerHeader/CustomHeader';
import {images} from '../../../theme';

interface DataItem {
  id: number;
  image: any;
  title: string;
  desc: string;
}

interface CategoryItem {
  id: number;
  title: string;
}

interface Props {
  navigation: any;
}

const data: DataItem[] = [
  {
    id: 1,
    image: images.cardSurfing,
    title: 'Surfing',
    desc: 'Best Hawaiian islands for surfing.',
  },
  {
    id: 2,
    image: images.cardHula,
    title: 'Hula',
    desc: 'Try it yourself.',
  },
  {
    id: 3,
    image: images.cardVulcanoes,
    title: 'Vulcanoes',
    desc: 'Volcanic conditions can change at any time.',
  },
];
const categoryData: CategoryItem[] = [
  {
    id: 1,
    title: 'Adventure',
  },
  {
    id: 2,
    title: 'Culinary',
  },
  {
    id: 3,
    title: 'Eco-tourism',
  },
  {
    id: 4,
    title: 'Family',
  },
  {
    id: 5,
    title: 'Sport',
  },
];

const Home: React.FC<Props> = ({navigation}) => {
  const renderItem = (item: DataItem) => {
    return (
      <View style={styles.cardMainViewStyle}>
        <Image source={item?.image} style={styles.imgStyle} />
        <View style={styles.innerViewStyle}>
          <Text style={styles.headerTitleTXTStyle}>{item?.title}</Text>
          <Text style={styles.subTitleTXTStyle}>{item?.desc}</Text>

          <TouchableOpacity
            style={styles.arrowTouchStyle}
            onPress={() => handleHeighlightsClick(item)}>
            <Image source={images.arrowForward} style={styles.arrowImgStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleHeighlightsClick = (item: DataItem) => {
    switch (item.id) {
      case 1:
        navigation.navigate('Surfing');
        break;
      case 2:
        navigation.navigate('Hula');
        break;
      case 3:
        navigation.navigate('Vulcano');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <CustomHeader />
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Image source={images.welcomeHead} style={styles.imageStyle} />

            <View style={styles.highlightMainViewStyle}>
              <Text style={styles.text}>Highlights</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainerStyle}>
                {data?.map((item, index) => (
                  <View key={item.id} style={{marginLeft: 20}}>
                    {renderItem(item)}
                  </View>
                ))}
              </ScrollView>
            </View>

            <View>
              <Text style={styles.text}>Categories</Text>
              {categoryData?.map((catData, index) => {
                return (
                  <View
                    key={catData?.id}
                    style={styles.categoryInnerMainViewStyle}>
                    <Text style={styles.innerTXTStyle}>{catData?.title}</Text>
                    <TouchableOpacity>
                      <Image
                        source={images.arrowForward}
                        style={styles.arrowImgStyle}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>

            <View>
              <Text style={styles.text}>Travel Guide</Text>
              <View style={styles.travelMainViewStyle}>
                <View style={styles.innerMainViewStyle}>
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

export default Home;
