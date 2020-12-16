import React from 'react';
import {Image, Dimensions, Text, TouchableOpacity} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Share from 'react-native-share';
import {COLORS} from '../Theme';
// import imageToB  ase64 from 'image-to-base64';

const WallDetails = ({route, navigation}) => {
  const {data} = route.params;
  console.log('data---', data.base);
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          // imageToBase64(require('../../assets/bb.jpg'))
          //   .then((response) => {
          //     console.log('response-----', response); // "cGF0aC90by9maWxlLmpwZw=="
          //   })
          //   .catch((error) => {
          //     console.log('error-----', error); // Logs an error if there was one
          //   });
          console.log('OnPress----');
          let options = {
            url: data.base,
          };

          Share.open(options)
            .then((res) => {
              console.log('shareResponse-----', res);
            })
            .catch((err) => {
              err && console.log('ShareError----', err);
            });
        }}
        style={{right:10}}>
        <Image
          style={{height: 25, width: 25}}
          source={require('../../assets/share.png')}
        />
      </TouchableOpacity>
    ),
  });
  return (
    // <View>
    <ImageZoom
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}
      enableCenterFocus
      useNativeDriver
      pinchToZoom
      enableDoubleClickZoom
      cropWidth={Dimensions.get('window').width}
      cropHeight={Dimensions.get('window').height}
      imageWidth={Dimensions.get('window').width}
      imageHeight={Dimensions.get('window').height}>
      <Image
        resizeMode={'contain'}
        style={{width: '100%', height: '100%'}}
        source={data.image}
      />
    </ImageZoom>

    //  </View>
  );
};

export default WallDetails;
