import React from 'react';
import {View, FlatList, TouchableOpacity, Image, Text} from 'react-native';
import {WALL_DATA} from '../../WallData';
import {COLORS} from '../Theme';
import {ADD_TO_SAVE, REMOVE_FROM_SAVE} from '../redux/SaveReducer';
import {useSelector, useDispatch} from 'react-redux';

const CategoryDetails = ({navigation, route}) => {
  const {itemId} = route.params;

  WALL_DATA.map((item) => {
    Object.assign(item, {isSelected: false});
  });
  const data = WALL_DATA.filter((item) => item.id == itemId);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state);

  const addItemToCart = (item) => {
    dispatch({type: ADD_TO_SAVE, payload: item});
  };
  const removeItemFromCart = (item) =>
    dispatch({
      type: REMOVE_FROM_SAVE,
      payload: item,
    });
  data.map((item) => {
    cartItems.map((data) => {
      if (item.id == data.id && item.image == data.image) {
        item.isSelected = true;
      } else {
        // item.isSelected = false;
        // data.isSelected = false;
      }
    });
  });

  return (
    <View>
      <FlatList
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('WallDetails', {data: item})}
              style={styles.listContainer}>
              <Image
                // resizeMode={'contain'}
                style={{width: '100%', height: '100%'}}
                source={item.image}
              />
              <TouchableOpacity
                onPress={() =>
                  !item.isSelected
                    ? addItemToCart(item)
                    : removeItemFromCart(item)
                }
                style={{
                  position: 'absolute',
                  bottom: 5,
                  right: 5,
                }}>
                <Image
                  source={
                    !item.isSelected
                      ? require('../../assets/star.png')
                      : require('../../assets/star1.png')
                  }
                  style={{height: 25, width: 25}}
                />
              </TouchableOpacity>
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
    height: 200,
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
    margin: 5,
  },
  modelTxt: {marginTop: 10, fontWeight: 'bold', fontSize: 16},
};

export default CategoryDetails;
