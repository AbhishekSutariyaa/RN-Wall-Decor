import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {WALL_CATEGORY} from '../../WallData';
import {COLORS} from '../Theme';

const WallCategory = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/wallpaper.jpg')}
        style={{width: '100%', height: '100%', opacity: 0.9}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 24,
            marginTop: '5%',
            color: COLORS.background,
          }}>
          {'Please Choose Your Category'}
        </Text>

        <FlatList
          // numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}
          data={WALL_CATEGORY}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('CategoryDetails', {itemId: item.id})
                }
                style={styles.categoryContainer}>
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: 10,
  },
  categoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    width: '70%',
    backgroundColor: COLORS.categorycolor,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 8,
    marginVertical: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff',
  },
};

export default WallCategory;
