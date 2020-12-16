import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS} from '../Theme';

const SaveWall = ({navigation}) => {
  const cartItems = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: COLORS.categorycolor,
          height: 40,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            color: COLORS.background,
          }}>
          {'Saved Walls'}
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={cartItems}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
              }}>
              {'No data found in saved wall'}
            </Text>
          </View>
        }
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('WallDetails', {data: item})}
              style={styles.listContainer}>
              <Image
                style={{width: '90%', height: '80%'}}
                source={item.image}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    borderColor: COLORS.categorycolor,
    borderWidth: 3,
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
  modelTxt: {marginTop: 10, fontWeight: 'bold', fontSize: 16},
};

export default SaveWall;
